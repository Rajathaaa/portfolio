# Portfolio Quest

A pixel-art RPG portfolio. Walk the map, enter buildings, collect 20 skill gems.
Supports both phone and laptop.

## Run it locally
Double-click `index.html`.

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
