import { tv } from 'tailwind-variants'

export const errorStyles = tv({
  slots: {
    wrapper: 'relative min-h-screen overflow-hidden bg-white dark:bg-black',
    decorativeGradient: 'absolute inset-0 overflow-hidden',
    gradientInner: '-inset-[10px] absolute opacity-50',
    gradientBg: [
      'absolute top-0 h-[40rem] w-full',
      'bg-gradient-to-b from-neutral-100 via-transparent to-transparent dark:from-neutral-950',
      'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-neutral-200/10 before:via-transparent before:to-transparent dark:before:from-neutral-800/10',
      'after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] after:from-blue-500/10 after:via-transparent after:to-transparent',
    ],
    decorativeCode: [
      'pointer-events-none fixed inset-0 z-10 flex select-none',
      'items-center justify-center',
    ],
    decorativeText: [
      'font-black text-[12rem] text-red-500/10 mix-blend-overlay dark:text-red-400/10',
      'sm:text-[16rem] md:text-[20rem]',
    ],
    content: [
      'relative flex min-h-screen flex-col items-center justify-center',
      'px-4 py-16 sm:px-6 lg:px-8',
    ],
    container: 'relative z-20 text-center',
    errorCode: 'font-bold text-2xl text-red-500 dark:text-red-400',
    title: 'mt-4 font-bold text-3xl text-neutral-900 tracking-tight sm:text-5xl dark:text-white',
    description: 'mt-6 font-medium text-lg text-neutral-600 leading-7 dark:text-neutral-400',
    pre: [
      'w-full overflow-x-auto rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900',
      'border border-neutral-200 dark:border-neutral-800',
      'mt-6 shadow-sm dark:shadow-neutral-900/50',
    ],
    code: [
      'font-mono text-sm text-neutral-800 dark:text-neutral-200',
      'selection:bg-blue-500/20 dark:selection:bg-blue-500/30',
      'selection:text-neutral-900 dark:selection:text-neutral-100',
    ],
    actions: 'mt-10 flex items-center justify-center gap-x-4',
    primaryButton: [
      'inline-flex items-center justify-center gap-x-1.5',
      'cursor-pointer rounded-lg bg-blue-500 px-5 py-2.5 font-semibold text-sm text-white',
      'hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20',
      'dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:shadow-blue-400/20',
      'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2',
      'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
      'border border-blue-600 dark:border-blue-500',
      'transition-all duration-200',
    ],
    secondaryButton: [
      'inline-flex items-center justify-center gap-x-1.5',
      'cursor-pointer rounded-lg px-5 py-2.5 font-semibold text-sm',
      'border border-neutral-300 bg-white/80 text-neutral-900',
      'hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-lg hover:shadow-neutral-200/10',
      'transition-all duration-200',
      'dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100',
      'dark:hover:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:shadow-neutral-900/30',
      'focus:outline-none focus:ring-2 focus:ring-neutral-200/50 focus:ring-offset-2',
      'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
    ],
  },
})
