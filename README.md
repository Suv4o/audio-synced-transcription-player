# Audio-Synced Transcription Player

A simple, lightweight audio player with real-time transcript synchronisation. Watch the text highlight as the audio plays, just like YouTube captions!

## Quick Start

### Prerequisites

-   A web browser (Chrome, Firefox, Safari, Edge)
-   An audio file (MP3, WAV, or any browser-supported format)
-   A transcript with timestamps in JSON format

### Installation

1. **Clone or download this repository**

```bash
git clone https://github.com/yourusername/audio-synced-transcription.git
cd audio-synced-transcription
```

2. **Add your files**

-   Replace `podcast_episode.mp3` with your audio file
-   Replace `podcast_episode_transcript.json` with your timestamped transcript

3. **Open in browser**

Simply open `index.html` in your web browser. That's it! No build process or npm install needed.

## File Structure

```
audio-synced-transcription/
├── index.html                          # Main HTML file
├── script.js                           # JavaScript logic
├── styles.css                          # Styling
├── podcast_episode.mp3                 # Your audio file
├── podcast_episode_transcript.json     # Timestamped transcript
└── README.md                           # This file
```

## Transcript Format

Your transcript JSON should follow this format:

```json
[
    {
        "start": 0,
        "end": 3.28,
        "text": "Welcome back to the podcast where tech meets creativity."
    },
    {
        "start": 3.28,
        "end": 5.04,
        "text": "Today, we're diving into how to transform"
    },
    {
        "start": 5.04,
        "end": 7.72,
        "text": "your markdown blogs into engaging podcasts"
    }
]
```

Each segment needs:

-   `start` - Start time in seconds
-   `end` - End time in seconds
-   `text` - The text spoken during this time

## Generating Timestamps

If you don't have timestamps for your audio, here are some tools to generate them:

## Customization

### Change Colors

Edit `styles.css` to match your brand:

```css
/* Active segment color */
.segment.active {
    border-left-color: #YOUR_COLOR;
    background: rgba(YOUR_RGB, 0.5);
}

/* Hover color */
.segment:hover {
    border-left-color: #YOUR_COLOR;
}
```

### Change Title

Edit the `<h1>` tag in `index.html`:

```html
<h1>Your Custom Title</h1>
```

### Adjust Player Height

In `styles.css`, modify the transcript max-height:

```css
.transcript {
    max-height: 500px; /* Change this value */
}
```

## How It Works

1. **Load**: JavaScript fetches the transcript JSON file
2. **Render**: Each transcript segment is rendered as a `<p>` element
3. **Sync**: The `timeupdate` event checks current audio time every ~250ms
4. **Highlight**: Matching segments get the `active` class
5. **Scroll**: Active segments scroll into view automatically
6. **Click**: Clicking a segment sets audio to that timestamp
