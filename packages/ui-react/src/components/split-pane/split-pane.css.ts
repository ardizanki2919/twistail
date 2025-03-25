import { type VariantProps, tv } from 'tailwind-variants'

const splitPaneStyles = tv({
  slots: {
    base: [
      '[.split-view]:bg-background' /*	Styles applied to the top-level container */,
      '[.split-view-horizontal]:debug' /*	Styles applied to the top-level container if vertical={false} */,
      '[.split-view-vertical]:debug' /*	Styles applied to the top-level container if vertical={true} */,
      // '[.split-view-separator-border]:border [.split-view-separator-border]:border-border' /*	Styles applied to the top-level container if separator={true} */,
      // '[.sash-container]:xxx' /*	Styles applied to the sash container */,
      // '[.sash]:xxx' /*	Styles applied to the sash */,
      // '[.sash-active]:xxx' /*	Styles applied to the sash if being dragged */,
      // '[.sash-disabled]:xxx' /*	Styles applied to the sash if disabled */,
      // '[.sash-horizontal]:xxx' /*	Styles applied to the sash if vertical={false} */,
      // '[.sash-hover]:xxx' /*	Styles applied to the sash if being hovered over */,
      // '[.sash-mac]:xxx' /*	Styles applied to the sash if running under macos */,
      // '[.sash-maximum]:xxx' /*	Styles applied to the sash if the pane is maximised */,
      // '[.sash-minimum]:xxx' /*	Styles applied to the sash if the pane is minimised */,
      // '[.sash-vertical]:xxx' /*	Styles applied to the sash if vertical={true} */,
      // '[.split-view-container]:xxx' /*	Styles applied to the split view container */,
      // '[.split-view-view]:xxx' /* Styles applied to the split view view */,
      // '[.split-view-view-visible]:xxx' /*	Styles applied to the split view view if visible={true} */,
    ],
    pane: '',
  },
  variants: {},
  defaultVariants: {},
})

type SplitPaneStyles = VariantProps<typeof splitPaneStyles>

export { splitPaneStyles, type SplitPaneStyles }
