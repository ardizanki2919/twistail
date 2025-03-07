import { env } from 'std-env'
// import { query as urlQuery } from 'urlcat'

// const ogImageUrlParams = urlQuery({
//   theme: 'blue',
//   title: 'Twistail',
//   description: 'Modular and extensible React components library powered by Tailwind CSS.',
//   avatar: 'https://twistail.com/favicon.png',
//   author: 'twistail.com',
// })

// export const ogImageUrl = `https://og.anuragroy.dev/api?${ogImageUrlParams}`

// export const analytics = {
//   selfHosted: true,
//   enabled: env.NODE_ENV === 'production',
//   domain: 'twistail.com',
//   customDomain: 'https://stats.web.id',
//   trackOutboundLinks: true,
// }

export const urls = {
  storybook:
    env.NODE_ENV === 'production' ? 'https://storybook.twistail.com' : 'http://localhost:6006',
}
