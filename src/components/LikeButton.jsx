import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useReelsContext } from '../context/ReelsContext';
import { simulateLikeAPI } from '../services/reelService';

const LikeButton = ({ id, initialLikes }) => {
  
  const { likedVideos, toggleLike } = useReelsContext();
  const isLiked = likedVideos.includes(id);
  const [likes, setLikes] = useState(initialLikes);
  const [loading, setLoading] = useState(false);

  // console.log(likes);

  const handleLike = async () => {
    if (loading) return;
    const optimisticLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(optimisticLikes);
    // console.log(optimisticLikes);
    toggleLike(id);
    // console.log(isLiked, id);
    setLoading(true);

    const success = await simulateLikeAPI();
    // console.log(success);
    if (!success) {
      // revert
      setLikes(likes);
      toggleLike(id);
      alert('Failed to update like. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className='flex flex-col items-center'>
      <button onClick={handleLike} disabled={loading}>
        <Heart size={24} className={isLiked ? 'text-pink-500' : ''} />
      </button>
      <span className='text-xs'>{(likes / 1000).toFixed(1)}K</span>
    </div>
  )
}

export default LikeButton