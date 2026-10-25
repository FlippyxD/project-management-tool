# Project management tool

Next.js App Router starter with React, TypeScript, CSS Modules, and npm.

Use Node.js 24, as specified in `.nvmrc`.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` to change the home page.

| Command                | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `npm run dev`          | Start the development server.                                           |
| `npm run typecheck`    | Generate Next.js route types and run TypeScript without emitting files. |
| `npm run lint`         | Run ESLint with zero warnings allowed.                                  |
| `npm run lint:fix`     | Apply automatic ESLint fixes.                                           |
| `npm run format:check` | Check formatting with Prettier.                                         |
| `npm run format`       | Format files with Prettier.                                             |
| `npm run check`        | Run type checking, linting, and formatting checks.                      |
| `npm run build`        | Run all checks, then create the production build.                       |
| `npm start`            | Serve the production build.                                             |

`tsconfig.json` enables strict mode, checked array and dictionary access, exact optional properties, exhaustive return paths, override checks, unused-code checks, side-effect import checks, and erasable-syntax-only TypeScript (no `enum`, `namespace`, or parameter properties). Application code must use TypeScript, and ESLint rejects any JavaScript file under `src/`.

`skipLibCheck` stays enabled because Next.js 16.4.3's generated link declarations reference the removed global `JSX` namespace, and its URL pattern declarations reference unavailable types. This skips checking declaration files while preserving strict checking of application code and its use of library types. Recheck this exception after upgrading Next.js.

`eslint.config.mjs` combines Next.js Core Web Vitals rules with typescript-eslint's `strictTypeChecked` and `stylisticTypeChecked` presets. Additional rules require explicit function return types, type-only imports, strict boolean conditions, and exhaustive union switches. Unsafe `any` operations, type assertions, non-null assertions, TypeScript suppression comments, unhandled promises, console calls, and debugger statements fail linting. The config also enables jsx-a11y's strict preset, extra React rules (leaked `&&` renders, index keys, untyped buttons), import cycle detection, shadowing, comparator-less `sort()`, and mandatory braces. `curly` is declared after `eslint-config-prettier` because that config turns it off.

Typed routes are enabled in `next.config.ts`. `typecheck` runs `next typegen` first so route and layout types exist on a fresh checkout.

`npm run build` enforces checks through its `prebuild` script. Calling `next build` directly bypasses lint and formatting checks.

ESLint stays on version 9 to satisfy the peer dependency ranges of Next.js's React, accessibility, and import plugins. Dependency versions are pinned, and `package-lock.json` records the resolved dependency tree.

Configuration references: [Next.js type generation](https://nextjs.org/docs/app/api-reference/cli/next#next-typegen-options) and [typescript-eslint shared configurations](https://typescript-eslint.io/users/configs/).
