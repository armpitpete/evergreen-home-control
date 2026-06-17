# Simple Page Publishing Plan

## Purpose

Plan the simplest way to present the public project page later.

This is documentation only.

## Source copy

Use this draft as the source text:

```text
docs/public-project-page-copy-draft.md
```

## Options compared

| Option | Pros | Cons | Decision |
|---|---|---|---|
| README only | Already visible, no setup | Not a separate public page | Keep as current baseline |
| GitHub Pages from docs | Simple, static, low maintenance | Needs one small publishing setup | Best later option |
| Add page inside Vite app | Could match dashboard style | Mixes marketing/page content with app prototype | Not first |
| Separate website repo | Clean separation | More setup and maintenance | Too much now |

## Recommendation

Use the README and docs for now.

When ready to publish a public page, use GitHub Pages from a simple static page in the repo.

Do not build a separate site yet.

Do not mix the public page into the app prototype yet.

## Suggested future path

1. Keep `docs/public-project-page-copy-draft.md` as the source copy.
2. Create a simple static page later.
3. Use minimal HTML and CSS.
4. Publish through GitHub Pages.
5. Link back to README, roadmap, and safety documents.

## Good enough for now

The project has a clear publishing route without adding build complexity.
