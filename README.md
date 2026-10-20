# Animation Studio — iPhone-first prototype

A lightweight, mobile-first 2D animation editor prototype for drawing frame-by-frame cartoons in Safari on iPhone and in modern desktop browsers.

## Current prototype features
- Touch-friendly drawing canvas with brush, eraser, line, rectangle, ellipse, and text tools
- Color palette and canvas background presets
- Onion-skin preview of the previous frame
- Add and duplicate frames, frame thumbnails, play preview, and undo for the current frame
- Emoji character/object starter library
- Local autosave in the current browser
- Export current frame as PNG
- Export canvas recording to MP4 when supported by the browser, otherwise WebM
- Save and reopen editable projects as `.animation.json`

## Run it
This is a static prototype with no build step. Open `index.html` in a modern browser, or publish the repository with GitHub Pages. For the best iPhone experience, open the HTTPS page in Safari.

## Important prototype notes
- This is an initial functional foundation, not yet a full professional animation suite.
- Project autosave is local to the browser/device. Use **Save** to download a portable project backup.
- Video export depends on the browser's MediaRecorder and codec support; Safari/iOS behavior should be tested on the target device.
- Soundtracks, audio recording, multi-layer editing, imported image assets, GIF encoding, and a native iOS package are not implemented yet.
- Keep the existing `main` branch unchanged until this feature branch has been reviewed and tested.

## Next milestones
1. Test touch drawing, timeline controls, project save/open, and video export on current iOS Safari.
2. Add editable layers and imported image assets.
3. Add audio tracks, timing controls, and scene management for longer cartoons.
4. Improve character tools beyond emoji placeholders and add guided beginner lessons.
5. Add installable PWA/offline support after testing the app shell and storage strategy.
