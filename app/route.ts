import { getRandomSong } from "../src/utils/getRandomSong";

export async function GET() {
  return new Response(`<html><head>
    <meta property="og:image" content="https://throwback-tune-miniapp.vercel.app/og_image.png" />
    <meta name="fc:frame" content='{
      "version": "next",
      "imageUrl": "https://throwback-tune-miniapp.vercel.app/og_image.png",
      "button": {
        "title": "🎵 Get Throwback Tune",
        "action": {
          "type": "launch_frame",
          "url": "https://throwback-tune-miniapp.vercel.app",
          "splashImageUrl": "https://throwback-tune-miniapp.vercel.app/og_image.png",
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
    <meta property="og:image" content="https://throwback-tune-miniapp.vercel.app/og_image.png" />
    <meta name="fc:frame" content='{
      "version": "next",
      "imageUrl": "https://throwback-tune-miniapp.vercel.app/og_image.png",
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
