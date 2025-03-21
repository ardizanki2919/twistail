#!/usr/bin/env bash

# Get the script name
SCRIPT_NAME="$(basename "$0")"
CURRENT_SHELL="$(ps -p $$ -oargs=)"

# Ensure the script is running with bash
if [ -z "$BASH_VERSION" ] || [[ "$CURRENT_SHELL" != *"bash"* ]]; then
  echo "This script requires bash. Please run it with 'bash ${SCRIPT_NAME}' or ensure it is executed with bash."
  exit 1
fi

# Get current directory same with this script
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd -P)"

# Set ROOT_DIR to the parent directory of SCRIPT_DIR
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Change to the root directory to ensure we are in the root of the project
cd "$ROOT_DIR" || exit 1

# Read the version from the root package.json
APP_VERSION=$(jq -r '.version' "$ROOT_DIR/package.json")

# Directories to exclude
EXCLUDED_DIRS=("node_modules" "dist" "build" "tmp" "storybook-static" "examples" ".next")

# Build the find command with excluded directories
FIND_CMD="find \"$ROOT_DIR\" -type f -name 'package.json' -not -path \"$ROOT_DIR/package.json\""
for dir in "${EXCLUDED_DIRS[@]}"; do
  FIND_CMD+=" -not -path \"*/$dir/*\""
done

echo "Syncing all package.json files to version $APP_VERSION..."

# Execute the find command and update versions
eval $FIND_CMD | while read -r file; do
  # Get the relative path for shorter display
  RELATIVE_PATH=$(echo "$file" | sed "s|^$ROOT_DIR/||")

  # Check if the file is in an excluded directory
  EXCLUDED=false
  for dir in "${EXCLUDED_DIRS[@]}"; do
    if [[ "$RELATIVE_PATH" == *"$dir"* ]]; then
      EXCLUDED=true
      break
    fi
  done

  if [ "$EXCLUDED" = false ]; then
    # Create a backup of the original file
    cp "$file" "${file}.bak"

    # Update the version
    jq --arg version "$APP_VERSION" '.version = $version' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"

    # Format the file
    if command -v pnpm &> /dev/null; then
      pnpm exec biome format "./$RELATIVE_PATH" --write --log-level=error --no-errors-on-unmatched > /dev/null 2>&1
    fi

    echo "✓ Updated version in $RELATIVE_PATH to $APP_VERSION"

    # Remove the backup
    rm "${file}.bak"
  fi
done

echo "Version sync completed!"
