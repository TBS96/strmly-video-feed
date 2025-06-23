import { useEffect, useState } from 'react';
import ReelCard from './components/ReelCard';
import BottomNav from './components/BottomNav';
import LoadingScreen from './components/LoadingScreen';
import { useReelsContext } from './context/ReelsContext';
import LoginPage from './pages/LoginPage';
import { LogOut } from 'lucide-react';

const App = () => {
  
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { isLoggedIn, logout } = useReelsContext();

  useEffect(() => {
    const loadReels = async () => {
      setLoading(true);
      const response = await fetch(`/data/reels-page-${page}.json`);
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const newReels = await response.json();
      // console.log(newReels);
      setReels((prev) => [...prev, ...newReels]);
      setLoading(false);
    };

    loadReels();
  }, [page]);

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && !loading) setPage((pg) => pg + 1);
  };

  if (!isLoggedIn) return <LoginPage />;
  if (loading && reels.length === 0) return <LoadingScreen />;

  return (
    <div
      onScroll={handleScroll}
      className='relative h-screen overflow-y-scroll snap-y snap-mandatory bg-black'
    >
      <button
        onClick={logout}
        className='fixed top-2 right-5 bg-white text-black px-3 py-1 rounded text-xs z-50 shadow'
      >
        <LogOut />
      </button>
      {reels.map((reel) => (
        <ReelCard key={reel.id} data={reel} />
      ))}
      <BottomNav />
    </div>
  )
}

export default App