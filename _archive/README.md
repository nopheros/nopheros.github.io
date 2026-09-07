# Archived pages

These pages are kept for reference but are **not published**. GitHub Pages runs
Jekyll by default, and Jekyll ignores any directory whose name starts with `_`,
so nothing in this folder is served at nopheros.com.

Nothing on the live site links to these files.

| File | Why archived |
|------|--------------|
| `albums-store.html` | Leftover Colorlib template page, never adapted for the real site |
| `blog.html` | Leftover Colorlib template page |
| `elements.html` | Colorlib template component gallery |
| `login.html` | Leftover Colorlib template page |
| `event.html` | Leftover Colorlib template page; nav linked to `latest.html`, `spotify.html`, `patreon.html` which never existed |
| `broadcaster_old.html` | Superseded by the rebuilt `broadcaster.html` (kept as a backup) |
| `anchor-template.html` | Scaffold for building new skill pages — kept for reference, not a live page |
| `VOICE_ACTOR_PAGE_GUIDE.md` | Internal planning notes for `voice-actor.html` — not meant to be public |
| `OOBE_refined_lockup_white.png` | "Out of Bounds Entertainment" logo — the branding was removed from `broadcaster.html` (station is now "Tower 3") |

To restore one, `git mv _archive/<file> <file>` and re-link it from the nav.
Note: `anchor-template.html` uses relative asset paths (`style.css`, `js/…`) that
only resolve from the site root, so fix those if you copy it back out.

> Note: if you ever add a `.nojekyll` file to the repo root, Jekyll processing is
> disabled and this folder **would** become publicly served. In that case move
> these files somewhere outside the site root instead.
