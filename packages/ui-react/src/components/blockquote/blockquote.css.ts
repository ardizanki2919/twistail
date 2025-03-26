import { type VariantProps, tv } from 'tailwind-variants'

export const blockquoteStyles = tv({
  slots: {
    base: [
      'relative rounded-lg border-l-4 border-l-primary bg-accent py-4 pl-12 pr-4 pb-4',
      'font-sans text-lg italic leading-relaxed text-foreground before:absolute before:left-3',
      "before:top-3 before:font-serif before:text-6xl before:text-gray-700 before:content-['“']",
      'transition-colors duration-200',
    ],
    author: [
      'mt-3 flex items-center justify-end text-muted-foreground font-medium not-italic text-sm',
      'before:mr-2 before:h-px before:w-6 before:bg-border before:content-[""]',
    ],
  },
  variants: {
    variant: {
      default: {
        base: 'border-l-primary bg-accent before:text-primary',
        author: 'text-muted-foreground before:bg-border',
      },
      muted: {
        base: 'border-l-muted-foreground bg-muted before:text-muted-foreground',
        author: 'text-muted-foreground before:bg-muted-foreground/50',
      },
      primary: {
        base: 'border-l-primary bg-primary/10 before:text-primary',
        author: 'text-primary before:bg-primary/50',
      },
      destructive: {
        base: 'border-l-destructive bg-destructive/10 before:text-destructive',
        author: 'text-destructive before:bg-destructive/50',
      },
      success: {
        base: 'border-l-success bg-success/10 before:text-success',
        author: 'text-success before:bg-success/50',
      },
      warning: {
        base: 'border-l-warning bg-warning/10 before:text-warning',
        author: 'text-warning before:bg-warning/50',
      },
    },
    size: {
      sm: {
        base: 'text-sm pl-8 py-2.5 pb-2.5 before:text-3xl before:top-2 before:left-2',
        author: 'text-xs before:w-4',
      },
      md: {
        base: 'text-base pl-10 py-4 pb-4 before:text-4xl before:top-3 before:left-3',
        author: 'text-sm before:w-6',
      },
      lg: {
        base: 'text-lg pl-14 py-5 pb-5 before:text-5xl before:top-3 before:left-3',
        author: 'text-base before:w-8',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type BlockquoteStyles = VariantProps<typeof blockquoteStyles>
