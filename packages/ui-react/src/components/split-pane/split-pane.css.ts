import { type VariantProps, tv } from 'tailwind-variants'

const splitPaneStyles = tv({
  slots: {
    base: [
      // CSS Variables
      '[--focus-border:var(--primary)]',
      '[--separator-border:var(--border)]',
      '[--sash-hover-transition-duration:0.1s]',
      '[--sash-size:8px]',
      '[--sash-hover-size:4px]',

      // Base styles
      'size-full relative',

      // Styles applied to the top-level container
      '[.split-view]:relative',
      '[.split-view]:size-full',
      '[.split-view]:overflow-hidden',
      '[.split-view]:bg-background',

      // Styles applied to the top-level container if vertical={false}
      '[.split-view-horizontal]:flex',

      // Styles applied to the top-level container if vertical={true}
      '[.split-view-vertical]:flex-col',

      // Styles applied to the top-level container if separator={true}
      '[.split-view-separator-border]:divide-border/35',

      // Styles applied to the sash container
      '[.sash-container]:size-full',
      '[.sash-container]:absolute',
      '[.sash-container]:pointer-events-none',

      // Styles applied to the sash
      '[.sash]:absolute',
      '[.sash]:z-30',
      '[.sash]:touch-none',
      '[.sash]:pointer-events-auto',
      '[.sash]:before:content-[""]',
      '[.sash]:before:absolute',
      '[.sash]:before:transition-colors',
      '[.sash]:before:duration-[var(--sash-hover-transition-duration)]',
      '[.sash]:before:ease-out',

      // Styles applied to the sash if being dragged
      '[.sash-active]:before:bg-[var(--focus-border)]',

      // Styles applied to the sash if disabled
      '[.sash-disabled]:pointer-events-none',
      '[.sash-disabled]:cursor-default',

      // Styles applied to the sash if vertical={false}
      '[.sash-horizontal]:cursor-ns-resize',
      '[.sash-horizontal]:left-0',
      '[.sash-horizontal]:w-full',
      '[.sash-horizontal]:h-[var(--sash-size)]',
      '[.sash-horizontal]:before:h-[var(--sash-hover-size)]',
      '[.sash-horizontal]:before:w-full',
      '[.sash-horizontal]:before:top-[calc(50%-var(--sash-hover-size)/2)]',

      // Styles applied to the sash if being hovered over
      '[.sash-hover]:before:bg-[var(--focus-border)]',

      // Styles applied to the sash if running under macos
      '[.sash-mac.sash-vertical]:cursor-col-resize',
      '[.sash-mac.sash-horizontal]:cursor-row-resize',

      // Styles applied to the sash if the pane is maximised
      '[.sash-maximum.sash-vertical]:cursor-w-resize',
      '[.sash-maximum.sash-horizontal]:cursor-n-resize',

      // Styles applied to the sash if the pane is minimised
      '[.sash-minimum.sash-vertical]:cursor-e-resize',
      '[.sash-minimum.sash-horizontal]:cursor-s-resize',

      // Styles applied to the sash if vertical={true}
      '[.sash-vertical]:cursor-ew-resize',
      '[.sash-vertical]:top-0',
      '[.sash-vertical]:w-[var(--sash-size)]',
      '[.sash-vertical]:h-full',
      '[.sash-vertical]:before:w-[var(--sash-hover-size)]',
      '[.sash-vertical]:before:h-full',
      '[.sash-vertical]:before:left-[calc(50%-var(--sash-hover-size)/2)]',

      // Styles applied to the split view container
      '[.split-view-container]:size-full',
      '[.split-view-container]:relative',

      // Styles applied to the split view view
      '[.split-view-view]:overflow-hidden',
      '[.split-view-view]:absolute',
      '[.split-view-view]:whitespace-normal',

      // Styles applied to the split view view if visible={true}
      '[.split-view-view-visible]:block',

      // Vertical and horizontal specific view styles
      '[.split-view-vertical_.split-view-view]:w-full',
      '[.split-view-horizontal_.split-view-view]:h-full',
    ],
    pane: 'size-full overflow-auto',
    panel: 'size-full overflow-auto',
  },
})

type SplitPaneStyles = VariantProps<typeof splitPaneStyles>

export { splitPaneStyles, type SplitPaneStyles }
