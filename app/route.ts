import { getRandomSong } from "../src/utils/getRandomSong";

export async function GET() {
  return new Response(`<html><head>
    <meta property="og:image" content="https://yourdomain.com/default-opengraph.jpg" />
    <meta name="fc:frame" content='{
      "version": "next",
      "imageUrl": "https://yourdomain.com/default-opengraph.jpg",
      "button": {
        "title": "🎵 Get Throwback Tune",
        "action": {
          "type": "launch_frame",
          "url": "https://yourdomain.com",
          "splashImageUrl": "https://yourdomain.com/icon.png",
          "splashBackgroundColor": "#000000"
        }
      }
    }' />
  </head><body></body></html>`, {
    headers: { "Content-Type": "text/html" }
  });
}

export async function POST(request: Request) {
  const song = getRandomSong();

  return new Response(`<html><head>
    <meta property="og:image" content="https://yourdomain.com/song-opengraph.jpg" />
    <meta name="fc:frame" content='{
      "version": "next",
      "imageUrl": "https://yourdomain.com/song-opengraph.jpg",
      "button": {
        "title": "🎧 Listen Now",
        "action": {
          "type": "open_url",
          "url": "${song.url}"
        }
      }
    }' />
  </head><body><p>${song.title} by ${song.artist}</p></body></html>`, {
    headers: { "Content-Type": "text/html" }
  });
}
