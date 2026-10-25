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
| `npm test`             | Run unit tests once with Vitest.                                        |
| `npm run test:watch`   | Run unit tests in watch mode.                                           |
| `npm run test:e2e`     | Build the app and run Playwright end-to-end tests in Chromium.          |
| `npm run check`        | Run type checking, linting, formatting checks, and unit tests.          |
| `npm run build`        | Run all checks, then create the production build.                       |
| `npm start`            | Serve the production build.                                             |

`tsconfig.json` enables strict mode, checked array and dictionary access, exact optional properties, exhaustive return paths, override checks, unused-code checks, side-effect import checks, and erasable-syntax-only TypeScript (no `enum`, `namespace`, or parameter properties). Application code must use TypeScript, and ESLint rejects any JavaScript file under `src/`.

`skipLibCheck` stays enabled because Next.js 16.4.3's generated link declarations reference the removed global `JSX` namespace, and its URL pattern declarations reference unavailable types. This skips checking declaration files while preserving strict checking of application code and its use of library types. Recheck this exception after upgrading Next.js.

`eslint.config.mjs` combines Next.js Core Web Vitals rules with typescript-eslint's `strictTypeChecked` and `stylisticTypeChecked` presets. Additional rules require explicit function return types, type-only imports, strict boolean conditions, and exhaustive union switches. Unsafe `any` operations, type assertions, non-null assertions, TypeScript suppression comments, unhandled promises, console calls, and debugger statements fail linting. The config also enables jsx-a11y's strict preset, extra React rules (leaked `&&` renders, index keys, untyped buttons), import cycle detection, shadowing, comparator-less `sort()`, and mandatory braces. `curly` is declared after `eslint-config-prettier` because that config turns it off.

`.prettierrc.json` sets every Prettier option explicitly, so a Prettier upgrade that changes a default cannot reformat the codebase. `objectWrap: "collapse"` keeps an object on one line whenever it fits, so a newline after `{` is never a style choice. `@ianvs/prettier-plugin-sort-imports` sorts imports into groups: Node built-ins, packages, `@/` aliases, relative paths, then type imports. Side-effect imports such as `./globals.css` keep their position because moving them can change behavior. `.gitattributes` forces LF line endings, and `.vscode/` formats on save with the workspace Prettier.

Unit tests live next to the code they test as `src/**/*.test.{ts,tsx}` and run in jsdom with React Testing Library. Vite 8 resolves the `@/` alias and compiles JSX natively, so no Vite plugins are installed. Test files import `test` and `expect` from `vitest` explicitly. `vitest.setup.ts` unmounts rendered components after each test. `test.only` fails the run, and test files get `@vitest/eslint-plugin`'s recommended rules plus bans on skipped, focused, and conditional tests. Vitest cannot render `async` Server Components, so cover those with end-to-end tests.

End-to-end tests live in `e2e/` and run against a production build that Playwright starts on port 3100, so they never reuse a dev server on port 3000. Run `npx playwright install chromium` once before the first run. The smoke test fails on any uncaught page error or `console.error`. `test.only` fails the run, and failed tests are not retried, so a flaky test shows up as a failure. `test:e2e` is not part of `check`, because it needs a browser and a full build.

Typed routes are enabled in `next.config.ts`. `typecheck` runs `next typegen` first so route and layout types exist on a fresh checkout.

`npm run build` enforces checks through its `prebuild` script. Calling `next build` directly bypasses lint and formatting checks.

ESLint stays on version 9 to satisfy the peer dependency ranges of Next.js's React, accessibility, and import plugins. Dependency versions are pinned, and `package-lock.json` records the resolved dependency tree.

Configuration references: [Next.js type generation](https://nextjs.org/docs/app/api-reference/cli/next#next-typegen-options) and [typescript-eslint shared configurations](https://typescript-eslint.io/users/configs/).
