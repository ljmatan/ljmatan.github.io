# Fallback fonts, served with the app

Flutter's web engine draws the default Roboto, and any character the app's own fonts lack (an
emoji in a nickname, ⌘, a Greek letter or math sign in an edited lesson), with fonts it fetches
from `fonts.gstatic.com`. That request tells Google every visitor's address, so
`flutter_bootstrap.js` points the engine (`fontFallbackBaseUrl`) at this folder instead, and the
engine itself (`canvasKitBaseUrl`) at the build's own `canvaskit/`, not `www.gstatic.com`.

Kept here, at the engine's own paths: Roboto, Noto Color Emoji, Noto Sans, Noto Sans Symbols,
Noto Sans Symbols 2, Noto Sans Math and Noto Sans SC (≈ 5.4 MB; each file is read only when a
character needs it). Noto Sans SC is the engine's first choice for many symbols (⌘ in the „⌘K“
search hint, arrows, ✓, ★, ①…), not only for Chinese. Other scripts (Japanese, Korean, Indic,
historic) are not kept: a character only they draw shows as a box.

The paths name the Flutter engine's font versions. `tool/web_offline.dart` fails the build when
`main.dart.js` names one of these families at a path missing here — after a Flutter upgrade,
download the new files from `https://fonts.gstatic.com/s/<path>` into this folder and drop the
old ones.

Roboto: Apache License 2.0 / SIL Open Font License 1.1. Noto: SIL Open Font License 1.1.
