# Dev Books

A small Astro application for exploring books about software engineering. It demonstrates typed content collections, dynamic routes, view transitions, environment validation, and server islands deployed through Vercel.

**Live demo:** [dev-books-beta.vercel.app](https://dev-books-beta.vercel.app/)

## Engineering highlights

- Astro content collections provide typed book metadata and Markdown content.
- Dynamic book routes are generated from the collection.
- `BookScore` is rendered as a server island and degrades safely when no score provider is configured.
- The purchase link is controlled by a validated environment flag.
- Country-aware store selection uses Vercel request headers without exposing private data.
- CI runs Astro diagnostics and a production build from a clean checkout.

## Run locally

```bash
cp .env.example .env
pnpm install
pnpm dev
```

The application runs at [http://localhost:4321](http://localhost:4321).

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `SHOW_BUY_BUTTON` | No | Enables country-aware Amazon links. Defaults to `false`. |
| `SCORE_API_ENDPOINT` | No | Optional text endpoint used by the score server island. |

## Verify

```bash
pnpm check
pnpm build
```

## Author

Built by **Jesus Perez** as an Astro and server-islands engineering example.

[GitHub profile](https://github.com/jesusprz2492) · [LinkedIn](https://www.linkedin.com/in/jesus-perez-22a09b103/)
