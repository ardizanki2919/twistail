import type { CSSProperties } from 'react'

export type BadgeConfig = {
  style: CSSProperties
  label: string
}

export default {
  'status:planned': {
    label: 'Planned',
    style: {
      color: '#ffffff',
      backgroundColor: '#8b5cf6',
      borderColor: '#a78bfa',
    },
  },
  'status:wip': {
    label: 'WIP',
    style: {
      color: '#ffffff',
      backgroundColor: '#f59e0b',
      borderColor: '#fb923c',
    },
  },
  'status:done': {
    label: 'Done',
    style: {
      color: '#f0fdf5',
      backgroundColor: '#16a34a',
      borderColor: '#22c55e',
    },
  },
  'status:under-review': {
    label: 'Under Review',
    style: {
      color: '#ffffff',
      backgroundColor: '#3b82f6',
      borderColor: '#60a5fa',
    },
  },
  'status:updated': {
    label: 'Updated',
    style: {
      color: '#ffffff',
      backgroundColor: '#4f46e5',
      borderColor: '#6366f1',
    },
  },
  'status:legacy': {
    label: 'Legacy',
    style: {
      color: '#fdf6fc',
      backgroundColor: '#9a317f',
      borderColor: '#c149a4',
    },
  },
  'status:deprecated': {
    label: 'Deprecated',
    style: {
      color: '#ffffff',
      backgroundColor: '#dc2626',
      borderColor: '#ef4444',
    },
  },
  'status:experimental': {
    label: 'Experimental',
    style: {
      color: '#ffffff',
      backgroundColor: '#9f1239',
      borderColor: '#be123c',
    },
  },
} satisfies Record<string, BadgeConfig>
