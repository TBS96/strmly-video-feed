import { useRef, useEffect, useState, useCallback, memo } from 'react';
import { useInView } from '../hooks/useInView';
import { MessageCircle, Share2, IndianRupee, MoreVertical, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import FollowButton from './FollowButton';
import LikeButton from './LikeButton';

function ReelCard({ data }) {
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const isVisible = useInView(containerRef);
  const [showOverlayIcon, setShowOverlayIcon] = useState(false);
  const [overlayIcon, setOverlayIcon] = useState('pause');
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const manuallyPaused = useRef(false);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;

    if (isVisible && !manuallyPaused.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
    else if (!isVisible) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  }, [isVisible, isMuted]);

  const togglePlayMute = useCallback(() => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setOverlayIcon('pause');
      setIsPaused(false);
      manuallyPaused.current = false;
    }
    else {
      videoRef.current.pause();
      setOverlayIcon('play');
      setIsPaused(true);
      manuallyPaused.current = true;
    }

    setIsMuted((prev) => {
      const newMuted = !prev;
      videoRef.current.muted = newMuted;
      return newMuted;
    });

    setShowOverlayIcon(true);
    setTimeout(() => setShowOverlayIcon(false), 800);
  }, []);

  return (
    <div
      ref={containerRef}
      className='relative h-screen w-full snap-start flex items-center justify-center overflow-hidden'
    >
      {/* Lazy video render: only set src if in view */}
      <video
        ref={videoRef}
        src={isVisible ? data.videoUrl : undefined}
        className='absolute inset-0 w-full h-full object-cover'
        loop
        playsInline
        onClick={togglePlayMute}
      />

      {/* Center icon overlay */}
      {showOverlayIcon && (
        <div className='absolute inset-0 flex items-center justify-center z-20'>
          {overlayIcon === 'play' ? (
            <Play size={60} className='text-white/80 transition-opacity duration-300' />
          ) : (
            <Pause size={60} className='text-white/80 transition-opacity duration-300' />
          )}
        </div>
      )}

      {/* Mute indicator */}
      <div className='absolute top-4 left-4 z-20'>
        {isMuted ? (
          <VolumeX size={28} className='text-white/70 transition-opacity duration-300' />
        ) : (
          <Volume2 size={28} className='text-white/70 transition-opacity duration-300' />
        )}
      </div>

      {/* Left-side info */}
      <div className='absolute bottom-20 left-4 text-white w-3/4 space-y-2'>
        <p className='text-sm'>#{data.title.replace(/\s+/g, '')}</p>
        <div className='flex items-center gap-2'>
          <img
            src={data.userImage}
            alt='user'
            className='w-8 h-8 rounded-full border-2 border-white'
          />
          <span className='font-semibold text-sm'>{data.userName}</span>
          <FollowButton userName={data.userName} />
        </div>
        <p className='font-semibold text-base'>{data.title}</p>
        <p className='text-sm line-clamp-3 opacity-90'>{data.description}</p>
      </div>

      {/* Right-side icons */}
      <div className='absolute bottom-24 right-4 flex flex-col items-center gap-4 text-white'>
        <LikeButton id={data.id} initialLikes={data.likes} />
        <div className='flex flex-col items-center'>
          <MessageCircle size={24} />
          <span className='text-xs'>{(data.comments / 1000).toFixed(1)}K</span>
        </div>
        <div className='flex flex-col items-center'>
          <Share2 size={24} />
          <span className='text-xs'>{data.shares}</span>
        </div>
        <div className='flex flex-col items-center'>
          <IndianRupee size={24} />
          <span className='text-xs'>₹{(data.earnings / 1000).toFixed(1)}K</span>
        </div>
        <MoreVertical size={24} />
      </div>
    </div>
  )
}

export default memo(ReelCard)