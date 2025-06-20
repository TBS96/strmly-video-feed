import { useReelsContext } from '../context/ReelsContext';

const FollowButton = ({ userName }) => {

  const { followedCreators, toggleFollow } = useReelsContext();
  const isFollowing = followedCreators.includes(userName);

  return (
    <button
      onClick={() => toggleFollow(userName)}
      className={`ml-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${isFollowing ? 'bg-white text-black' : 'bg-pink-500 text-white'}`}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </button>
  )
}

export default FollowButton