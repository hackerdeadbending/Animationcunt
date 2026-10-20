# Animation Studio — iPhone-first app

Animation Studio is a touch-friendly 2D animation editor for beginners. The current build is a static web app designed for Safari on iPhone; it can be added to the Home Screen once hosted over HTTPS.

## Editor features currently implemented
- Responsive 16:9 canvas with touch drawing
- Brush, transparent eraser, line, rectangle, ellipse, and text tools
- Palette, canvas backgrounds, and previous-frame onion skin
- Multiple named drawing layers with visibility toggles
- Frame thumbnails; add, duplicate, and delete frames
- Playback speed control from 2 to 24 FPS
- Starter emoji characters and props plus a simple built-in cartoon character
- Import PNG/JPEG/WebP images (up to 2 MB per image)
- Local browser autosave and portable `.animation.json` save/open
- Clean PNG export of the current frame
- Browser-dependent MP4/WebM video export with a separate clean render canvas
- App icon, web manifest, service worker app shell, and iPhone Home Screen metadata

## iPhone testing
1. Open the published HTTPS app URL in Safari.
2. Tap **Share → Add to Home Screen**.
3. Open Animation Studio from the new icon.

A public test URL has not yet been verified. The repository is private, and deployment access must be configured before a public URL can be provided. The app has not yet been tested on a physical iPhone; Safari video codec support also needs real-device verification.

## Current limitations
- This is a usable first editor foundation, not yet a complete professional animation suite.
- Autosave stays in the current browser/device. Use **Save** to download a backup.
- Image imports are embedded in the project file; large image collections may make project files large.
- Video export depends on browser recording/codec support and may fall back to WebM.
- Ready-made starter objects are emoji, not yet editable rigged/vector characters.
- Layer visibility and drawing are implemented; layer reordering, per-layer transforms, scene/storyboard management, audio/voice tracks, GIF export, and a signed native iOS app are not implemented yet.

## Roadmap
1. Test drawing, timeline, project save/open, installation, and export in iPhone Safari.
2. Add true layers and editable reusable characters/props.
3. Add audio/voice, scene/storyboard management, and longer-form cartoon workflows.
4. Improve beginner guidance, project recovery, and export compatibility.
5. Decide whether to package a native iOS app after the browser version is stable.

Development is on `feature/iphone-animation-studio`. `main` has not been changed or merged.
