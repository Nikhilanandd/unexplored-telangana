import { type VariantProps, cva } from 'class-variance-authority'
import { cn } from '../lib/cn'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-obsidian-700 text-sand-300 border border-obsidian-600',
        saffron: 'bg-saffron-500/15 text-saffron-400 border border-saffron-500/30',
        jade: 'bg-jade-500/15 text-jade-400 border border-jade-500/30',
        terracotta: 'bg-terracotta-500/15 text-terracotta-400 border border-terracotta-500/30',
        crimson: 'bg-crimson-500/15 text-crimson-400 border border-crimson-500/30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />
}
