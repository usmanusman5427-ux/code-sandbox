# Subway Rush

A 3D endless subway runner for phones, inspired by Subway Surfers. It's a single HTML page that uses Three.js (r128, loaded from cdnjs).

## How to play

| Gesture | Action |
| --- | --- |
| Swipe left / right | Switch tracks |
| Swipe up | Jump (swipe up in the air to queue a jump for landing) |
| Swipe down | Roll (swipe down in the air to slam down and roll) |
| Double-tap, or the purple button | Hoverboard: absorbs one crash, lasts 30 s, 3 per run |

The keyboard also works: arrows or WASD to move, Space for the hoverboard, P or Esc to pause.

- **Trains** block a track. Run up a **ramp** to get onto the roofs. **Oncoming trains** have lit headlights and move toward you.
- **Red/white barriers** must be jumped. **Tall yellow barriers** must be rolled under.
- Clipping the side of a train makes you **stumble**, and the inspector and his dog close in. Stumble again while they're chasing and you're **busted**.
- Power-ups: **Jetpack** (fly over everything and collect the sky coins), **Super Sneakers** (jump high enough to reach train roofs), **Coin Magnet**, **2X score**.
- Speed rises from 16 to 33 m/s over about 8 km. Best score and total coins are saved in the browser.

## Files

- `src/game.html` is the game source and the page published as the claude.ai artifact.
- `index.html` is the same game wrapped as a standalone document. Regenerate it with `node build.mjs` after editing `src/game.html`.

## Level generation

Obstacles are laid out in rows ahead of the runner. Every row keeps one "safe" track that you can reach from the previous row's safe track in time. Oncoming trains are only placed on a track that has been kept empty and off the safe path for roughly 95 m before them. "Train yards" (all three tracks blocked) always have a ramp on the current safe track. In automated play-tests, a bot that follows the safe path ran 22 ten-minute runs (about 17 km each, up to top speed) without a single unavoidable crash.
