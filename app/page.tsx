'use client';
import React, { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

export default function Home() {
  useEffect(() => {
    sdk.actions.ready(); // Tells Warpcast to hide the splash screen
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎵 Throwback Tunes</h1>
      <p>Click the frame to get a random tune!</p>
    </main>
  );
}
