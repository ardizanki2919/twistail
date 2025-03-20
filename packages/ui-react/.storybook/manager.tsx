/**
 * @ref: https://storybook.js.org/docs/configure/user-interface/theming
 * @ref: https://storybook.js.org/docs/configure/user-interface/features-and-behavior
 */

import { addons } from '@storybook/manager-api'
import * as React from 'react'
import badges, { type BadgeConfig } from './badges'
import { type Theme, dark, light } from './themes'
import { listenToColorScheme } from './utils'

addons.setConfig({
  isFullscreen: false,
  showToolbar: true,
  panelPosition: 'bottom',
  initialActive: 'canvas',
  bottomPanelHeight: 340,
  navSize: 320,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  sidebar: {
    showRoots: true,
    collapsedRoots: ['layout-components', 'visualizations'],
    filters: {
      patterns: (item) => {
        return !item.tags?.includes('hidden')
      },
    },
    renderLabel(item) {
      if (item.type !== 'component') {
        return item.name
      }

      let badge: BadgeConfig | undefined

      for (const tag of item.tags) {
        if (tag in badges) {
          badge = badges[tag as keyof typeof badges]
          if (badge) {
            break
          }
        }
      }

      if (!badge) {
        return item.name
      }

      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem',
            flex: 1,
          }}
        >
          <span>{item.name}</span>
          <span
            style={{
              ...badge.style,
              display: 'inline-block',
              padding: '2px 6px',
              fontSize: '12px',
              lineHeight: '1',
              textAlign: 'center',
              borderRadius: '10px',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            {badge.label}
          </span>
        </div>
      )
    },
  },
})

// Hide addon panel by default
addons.register('hide-addon-panel', (api) => {
  api.togglePanel(false)
})

// Switch color scheme based on the global types or system preferences
addons.register('color-scheme', (api) => {
  const setTheme = (theme: Theme) => {
    // Handle system theme preference
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const isDark = mediaQuery.matches
      api.setOptions({ theme: isDark ? dark : light })
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
      return
    }

    // Handle explicit theme selection
    api.setOptions({ theme: theme === 'dark' ? dark : light })
    document.documentElement.dataset.theme = theme
  }

  listenToColorScheme(api, setTheme)
})
