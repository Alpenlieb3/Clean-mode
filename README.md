# Clean-mode
Turn YouTube into a distraction-free video player by removing all UI elements while keeping the video running normally.
🎬 YouTube Clean Mode
😤 The Problem Users Face

Modern video platforms like YouTube are designed with heavy interface layering. While watching videos, users often experience distractions such as:

Overlayed video titles that appear on hover or fullscreen entry
Playback controls blocking parts of the video
Progress bars and tooltips constantly fading in/out
Recommended videos and end-screen suggestions appearing suddenly
Channel branding, banners, and metadata cluttering the screen
UI elements reappearing every time the mouse moves
A generally “non-cinematic” experience even in fullscreen mode

Even in fullscreen, YouTube still keeps multiple interface layers active, which breaks immersion for users who want a clean viewing experience.

This is especially frustrating for:

Students watching lectures
Developers using videos as background learning material
People watching cinematic content or music videos
Users who want distraction-free focus
💡 The Solution

YouTube Clean Mode is a lightweight browser bookmarklet that removes all visible YouTube interface elements while keeping the video playing normally.

It transforms YouTube into a distraction-free cinema viewer with one click.

⚙️ How It Works (Simple Explanation)
Injects a small CSS style block into the page
Targets YouTube UI elements such as:
Top and bottom control bars
Progress bar and timestamps
Titles and metadata overlays
End screen suggestions and cards
Popups and tooltips
Applies display: none and opacity: 0 to hide them instantly
Forces cursor visibility so the mouse always remains usable
Does NOT modify or stop the video playback element itself
Can be toggled on/off using the same button
🧩 Key Features
✔ One-click activation (bookmarklet)
✔ Video keeps playing normally
✔ Removes all YouTube UI distractions
✔ Cursor remains visible at all times
✔ Toggle ON/OFF anytime
✔ No installation required
✔ Works instantly in browser
🌐 Where It Works

This tool works on websites that:

Allow custom JavaScript execution via bookmarklets
Use standard DOM-based UI rendering
✅ Fully supported:
YouTube (desktop web version)
YouTube Music (partial support)
Most video players built with HTML5
Embedded YouTube players on websites
⚠️ Partially supported:
YouTube in fullscreen mode (depends on browser behavior)
Embedded players inside strict sandboxed frames
❌ Not supported:
Mobile YouTube app (no JavaScript injection allowed)
Browsers that block bookmarklet execution
DRM-protected video overlays in some streaming platforms
🔒 Safety & Privacy
✔ Runs entirely inside your browser
✔ No data is collected or transmitted
✔ No external servers or APIs are used
✔ No cookies or tracking involved
✔ Fully client-side script only
Important Notes:
This does NOT modify YouTube servers or content
It only changes how the page is displayed locally
Safe to use as long as browser bookmarklets are allowed
YouTube updates may occasionally break selectors (maintenance may be needed)
🧠 In Short
It is a lightweight UI remover for YouTube
It creates a distraction-free video viewing experience
It works by hiding interface layers using CSS injection
It does not interfere with video playback or audio
It is safe, reversible, and runs only in the browser
