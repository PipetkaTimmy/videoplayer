'use client'

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <video
        width="480"
        controls>
        <source
          src="/1710766332591_GALLERY_20240318_163648.mp4"
          type="video/mp4"
        />
      </video>
      <ReactPlayer url='/1710766332591_GALLERY_20240318_163648.mp4' controls={true}/>
    </main>
  );
}
