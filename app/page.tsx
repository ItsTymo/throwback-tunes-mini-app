'use client';

import React, { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

export const metadata = {
  title: 'Throwback Tunes',
  description: 'Get a random throwback song from your favorite decade.',
  openGraph: {
    images: ['https://throwback-tune-miniapp.vercel.app/og_image.png'],
  },
  other: {
    'fc:frame': JSON.stringify({
      version: 'next',
      imageUrl: 'https://throwback-tune-miniapp.vercel.app/og_image.png',
      button: {
        title: '🎵 Get Throwback Tune',
        action: {
          type: 'launch_frame',
          url: 'https://throwback-tune-miniapp.vercel.app',
          splashImageUrl: 'https://throwback-tune-miniapp.vercel.app/og_image.png',
          splashBackgroundColor: '#000000',
        },
      },
    }),
  },
};

export default function Home() {
  useEffect(() => {
    sdk.actions.ready(); // Tell Warpcast the app is ready
  }, []);

  return (
    <main
      style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <h1>🎶 Throwback Tunes</h1>
      <p>Frame metadata is set — ready for Warpcast.</p>
    </main>
  );
}
