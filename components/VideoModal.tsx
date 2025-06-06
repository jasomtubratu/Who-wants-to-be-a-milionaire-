"use client";

import { useEffect, useRef } from "react";

interface VideoModalProps {
  src: string;
  isOpen: boolean;
  onClose: () => void;
  loop?: boolean;
  autoClose?: boolean;
}

export default function VideoModal({ src, isOpen, onClose, loop = false, autoClose = false }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  const handleVideoEnd = () => {
    if (autoClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop={loop}
        onEnded={handleVideoEnd}
        onClick={onClose}
      />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
      >
        ×
      </button>
    </div>
  );
}