# 🌀 Twistail

[![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE-MIT)
[![License Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE-APACHE)
[![Turborepo](https://img.shields.io/badge/Built%20With-Turborepo-blueviolet)][turborepo]
[![Contribution](https://img.shields.io/badge/Contributions-welcome-gray.svg)][contribution]

Modular and extensible React UI components library powered by Radix UI, Tailwind CSS, and TypeScript.

> [!CAUTION]
> 🚨🚨🚨
>
> Twistail is in a _very_ early development preview - expect some bugs and changes along the way.
> <br/>Please do not use it in production yet, use in production at your own discretion!
>
> 🚨🚨🚨

## Quick Start

TODO!

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `examples/react-vite`: Example application built with [Vite][vite] and [React][reactjs]
- `@repo/config-typescript`: Shared TypeScript configurations and [Storybook][storybook]
- `twistail-react`: Reusable React components and utilities

Each package and app is 100% [TypeScript][typescript].

### Publishing Packages

#### Run in dry-run mode

```sh
pnpm turbo publish:dry --filter=twistail-utils
```

#### Publish specific packages
```sh
pnpm --filter=twistail-utils publish
```

## Acknowledgements

Twistail is a thoughtful blend of design philosophies from two exceptional UI libraries, combining the best of both worlds:

- [Tremor](https://tremor.so/): Many of Twistail's foundational components draw heavy inspiration from Tremor's well-crafted designs. Twistail reimagines these components with its own architectural approach. Tremor is licensed under [Apache 2.0](https://github.com/tremorlabs/tremor/blob/main/LICENSE).

- [shadcn/ui](https://ui.shadcn.com/): Twistail incorporates design patterns and component structures from these projects, adapting them to fit seamlessly with the Twistail ecosystem. shadcn/ui is licensed under [MIT](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Key differences from Tremor and shadcn/ui include:
- Twistail separates style files for each component, improving organization and customization.
- Twistail uses [Lucide icons](https://lucide.dev/) instead of Remix Icons which are used by Tremor.
- A carefully curated integration of design elements from Tremor and shadcn/ui.

We're grateful to these projects for their contributions to the React and Tailwind ecosystem, and for providing the foundation upon which Twistail builds its unique identity.

## License

Licensed under either of [Apache License 2.0][license-apache] or [MIT license][license-mit] at your option.
To understand the key differences between these two popular open-source licenses, please refer to the 
[Apache License 2.0][tldr-apache] and the [MIT License][tldr-mit] on tldrlegal.com.

> Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this project by you,
> as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.

Copyrights in this project are retained by their contributors.

See the [LICENSE-APACHE](./LICENSE-APACHE) and [LICENSE-MIT](./LICENSE-MIT) files for more information.

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).</sub>

<!-- link reference definition -->
[biome]: https://biomejs.dev
[contribution]: https://github.com/riipandi/twistail/pulse
[license-apache]: https://choosealicense.com/licenses/apache-2.0/
[license-mit]: https://choosealicense.com/licenses/mit/
[reactjs]: https://react.dev
[storybook]: https://storybook.js.org
[tailwind]: https://tailwindcss.com
[turborepo]: https://turbo.build/repo/docs
[typescript]: https://www.typescriptlang.org/
[vite]: https://vite.dev
[tldr-mit]: https://www.tldrlegal.com/license/mit-license
[tldr-apache]: https://www.tldrlegal.com/license/apache-license-2-0-apache-2-0
