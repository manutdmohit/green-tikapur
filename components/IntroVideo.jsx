'use client';
import React from 'react';
import YouTube from 'react-youtube';

const IntroVideo = () => {
  const videoId = 'dx4Teh-nv3A'; // Replace with your YouTube video ID
  const opts = {
    height: '80%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Introduction
        </h2>
        <div className="relative w-full h-0 pb-[56.25%] max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-full">
            <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;
