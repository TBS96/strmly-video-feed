const formatTime = (secs) => {
    const min = Math.floor(secs / 60);
    const sec = Math.floor(secs % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
};

const VideoSeekbar = ({ currentTime, duration, onSeek }) => {
    return (
        <div className='absolute bottom-14 left-4 right-4 flex items-center gap-2 z-30'>
            <span className='text-xs text-white w-10'>{formatTime(currentTime)}</span>
            <input 
                type="range"
                min={0}
                max={duration}
                step={0.01}
                value={currentTime}
                onChange={(e) => onSeek(parseFloat(e.target.value))}
                className='w-full accent-pink-500 bg-white/30 cursor-pointer'
            />
            <span className='text-xs text-white w-10 text-right'>{formatTime(duration)}</span>
        </div>
    )
}

export default VideoSeekbar