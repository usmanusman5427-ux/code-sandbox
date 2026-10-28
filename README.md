# Subway Rush

A 3D endless subway runner for phones, inspired by Subway Surfers. It's a single HTML page built on Three.js (r128, loaded from cdnjs).

## Graphics

- Rounded cartoon characters built from code: capsule limbs, sculpted hair and hats, and painted faces that blink.
- Filmic (ACES) tone mapping with real-time soft sun shadows and sky-lit reflections. Trains, rails and coins shine.
- Bevelled trains with reflective windows and glowing headlights. Real 3D sleepers and steel rails on gravel.
- A city with balconies, rooftop water tanks, trees, lamp posts and overpass bridges.
- Quality drops automatically (resolution, then shadow detail) if a phone can't hold the frame rate.

## How to play

| Gesture | Action |
| --- | --- |
| Swipe left / right | Switch tracks |
| Swipe up | Jump (swipe up in the air to queue a jump for landing) |
| Swipe down | Roll (swipe down in the air to slam down and roll) |
| Double-tap, or the purple button | Ride a hoverboard: it absorbs a crash |

The keyboard also works: arrows or WASD to move, Space for the hoverboard, P or Esc to pause.

- **Trains** block a track. Run up a **ramp** to get onto the roofs. **Oncoming trains** have lit headlights.
- **Red/white barriers** must be jumped. **Tall yellow barriers** must be rolled under.
- Clipping the side of a train makes you **stumble**, and the inspector closes in. Stumble again while he's chasing and you're **busted**.
- Speed climbs the whole run: about 17 m/s at the start, 26 m/s after a minute, 32 m/s after two, and close to 38 m/s late in a run.
- Phones that support vibration buzz on lane changes, jumps, landings, coins, crashes and purchases. Vibration can be turned off in Settings.

## Shop

Coins collected in a run are added to your balance. New players start with 1,000 coins, 3 hoverboards, 1 Headstart and 1 Score Booster.

- **Runners**: Jax, Mia, Rex, Zoe, Duke and Nova, each with 3 costumes. Prices run from 1,500 to 15,000 coins.
- **Hoverboards**, each with an ability:

  | Board | Price | Ability |
  | --- | --- | --- |
  | Classic | Free | Standard |
  | Lightning | 2,500 | Switch tracks twice as fast |
  | Bouncer | 3,500 | Jumps 50% higher |
  | Glider | 5,000 | Double jump |
  | Gold Rush | 7,500 | Built-in coin magnet |
  | Titan | 12,000 | Survives 2 crashes and lasts 45 s |

- **Upgrades**: 5 levels each for the Jetpack, Super Sneakers, Coin Magnet and 2X Multiplier. Each level makes the power-up last longer.
- **Boosts**:
  - Hoverboards: singles or a pack of 5.
  - **Headstart**: a rocket flight 560 m ahead at the start of a run.
  - **Score Booster**: +4 to the score multiplier for one run.
  - **Mystery Box**: random coins, boards or boosts, including a 6,000-coin jackpot.

Every purchase asks you to tap twice to confirm, so a stray tap can't spend your coins.

## Saving

Progress is saved in the browser right away. When the game runs inside the claude.ai viewer, it is also saved to the player's private record in the artifact's database (`data/users/<id>/profile`), so coins and unlocks carry across devices. The newer copy wins, and data loaded from storage is validated before use.

## Files

- `src/game.html` is the game source and the page published as the claude.ai artifact.
- `index.html` is the same game wrapped as a standalone document. Regenerate it with `node build.mjs` after editing `src/game.html`.

## Level generation

Obstacles are laid out in rows ahead of the runner. Every row keeps one "safe" track that you can reach from the previous row's safe track in time. Oncoming trains are only placed on a track that has been kept empty and off the safe path for roughly 95 m before them. "Train yards" (all three tracks blocked) always have a ramp on the current safe track. Jetpack and Headstart flights clear a landing zone ahead of where you come down.
