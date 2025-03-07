import { Brand, create } from '@storybook/theming'

export type Theme = 'light' | 'dark' | 'system'

const brand: Brand = {
  url: undefined,
  target: '_self',
  title: undefined,
  image: undefined,
}

export const light = create({
  ...brand,
  base: 'light',
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  colorPrimary: '#0f131a',
  colorSecondary: '#1fa2ff',
})

export const dark = create({
  ...brand,
  base: 'dark',
  appBg: '#10141a',
  appContentBg: '#10141a',
  appPreviewBg: '#10141a',
  appBorderColor: '#212428',
  colorPrimary: '#ffffff',
  colorSecondary: '#1fa2ff',
})
