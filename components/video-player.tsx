interface VideoPlayerProps {
  videoId: string;
  title: string;
  thumbnail?: string;
}

import React, { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Generate thumbnail URL if not provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = (): void => {
    setIsPlaying(true);
  };

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
      {!isPlaying ? (
        <>
          <div className="relative w-full h-full">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/30 transition-opacity hover:bg-black/40" />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-all duration-300 group-hover:scale-110">
              <Play
                className="w-8 h-8 text-teal-600 group-hover:text-teal-700 transition-colors ml-1"
                fill="currentColor"
              />
            </div>
          </button>
        </>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;