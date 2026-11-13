# Rajatha Prasad · Portfolio Quest

A pixel-art RPG portfolio. Walk the map, enter buildings, collect 20 skill gems.
Works on laptops (keyboard) and phones/tablets (touch pad), portrait or landscape.
No build step, no dependencies, no external requests.

## Run it locally
Double-click `index.html`. That's it.

## Put it on LinkedIn (Featured)
LinkedIn needs a public https link, so host the folder first (all free):

**GitHub Pages**
1. Create a repo (e.g. `portfolio`) and upload everything in this folder (keep the file layout).
2. Repo → Settings → Pages → Deploy from branch → `main` / root.
3. Your URL will be `https://<your-username>.github.io/portfolio/`.

**Or Netlify / Vercel:** drag and drop this folder, get a URL.

Then:
1. Run `node set-site-url.js https://<your-live-url>/` (or edit the 5 `YOUR-SITE-URL` spots in `index.html` by hand). Re-upload `index.html`.
2. LinkedIn → your profile → Add profile section → Featured → Add a link → paste the URL.
   The card shows `og-image.png`, the title and the description.
3. If the preview looks stale, open https://www.linkedin.com/post-inspector/ , paste the URL and click Inspect. That refreshes LinkedIn's cache.

## Controls
| | Laptop | Phone / tablet |
|---|---|---|
| Move | WASD / arrows | slide thumb on the pad (diagonals work) |
| Enter | E / Space | A button (or tap the prompt) |
| Quest log | M | LOG button |
| Sound | N | speaker button |
| Close | Esc | CLOSE button / tap outside |

## Music and sound
Chiptune music is generated live in the browser (no audio files). It only starts after PRESS START,
is muffled while a card is open, pauses when the tab is hidden, and remembers your mute choice.
To change the tune, edit `BARS` and `MEL` in the `Snd` block of `index.html`. To remove it, set `MUSIC_VOL` to `0`.

## Edit content
Resume data lives in `ZONES`, `SKILLS` and `LINKS` near the top of `index.html`.
To show a resume download button, drop `resume.pdf` next to `index.html` and set `resume:"resume.pdf"` in `LINKS`.
Your phone number is shown in the Contact card. Delete the PHONE line there if you'd rather not publish it.

## Files
`index.html` the whole game (fonts embedded) · `og-image.png` link preview · `favicon.svg`, `*.png` icons ·
`manifest.webmanifest` add-to-home-screen · `set-site-url.js` helper · `licenses/` font licenses (SIL OFL)
