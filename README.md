# Animation Studio — iPhone-first app

A beginner-friendly 2D animation studio designed for touch screens, with iPhone Safari as a key target. The current version is a lightweight static web app that can be opened in a browser and prepared for adding to the iPhone Home Screen.

## What works in the prototype
- Touch-friendly 16:9 drawing canvas with brush, transparent eraser, line, rectangle, ellipse, and text tools
- Color palette, canvas background presets, and onion-skin previous-frame guide
- Add and duplicate frames, thumbnails, playback, and undo for the current frame
- Emoji starter objects and characters
- Local browser autosave
- Export the current frame as PNG
- Save/open portable `.animation.json` projects
- Browser-dependent canvas video export (MP4/WebM support varies)
- Web app manifest, app icon, and service worker app shell for installation/offline startup

## Try it on iPhone
1. Open the app's HTTPS GitHub Pages URL in **Safari**.
2. Tap **Share → Add to Home Screen**.
3. Launch Animation Studio from the new Home Screen icon.

The Pages URL will be available after the GitHub Pages workflow succeeds and repository Pages settings allow deployments from GitHub Actions.

## Current limitations
- This is the first app foundation, not yet a finished professional animation suite.
- Autosave is local to one browser/device; use **Save** to download a backup project.
- Video export depends on browser recording/codec support and must be verified on real iOS Safari.
- The current starter character library uses emoji; editable vector characters are a planned milestone.
- Audio/voice tracks, imported image assets, layers, scene/storyboard management, GIF export, and a native iOS package are not implemented yet.
- The current app is not yet validated on an actual iPhone.

## Roadmap
1. Verify drawing, frame timeline, save/open, install, and export on iPhone Safari.
2. Add imported images, layers, and reusable editable characters.
3. Add sound, voice recording, timing/FPS settings, and scene management for longer cartoons.
4. Improve beginner guidance and build polished character/prop libraries.
5. Decide whether a native iOS wrapper is needed after the web app is stable.

Changes are being developed on `feature/iphone-animation-studio`; keep `main` unchanged until the branch is reviewed and tested.
