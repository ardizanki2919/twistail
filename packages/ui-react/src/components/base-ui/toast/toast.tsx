// TODO: remove `next-themes` dependency
import * as Lucide from 'lucide-react'
import { useTheme } from 'next-themes'
import { Toaster as Sonner, toast } from 'sonner'
import { clx } from 'twistail-utils'
import { toastStyles } from './toast.css'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ className, ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()
  const styles = toastStyles()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className={clx('toaster group', className)}
      toastOptions={{
        classNames: {
          toast: styles.toast(),
          description: styles.description(),
          actionButton: styles.actionButton(),
          cancelButton: styles.cancelButton(),
        },
      }}
      icons={{
        success: <Lucide.CircleCheckBig className={styles.icon()} strokeWidth={2} />,
        info: <Lucide.Info className={styles.icon()} strokeWidth={2} />,
        warning: <Lucide.OctagonAlert className={styles.icon()} strokeWidth={2} />,
        error: <Lucide.CircleOff className={styles.icon()} strokeWidth={2} />,
        loading: (
          <Lucide.Loader
            className={styles.icon({ className: 'shrink-0 animate-spin' })}
            strokeWidth={2}
          />
        ),
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
