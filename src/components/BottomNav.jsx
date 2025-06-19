import { Play, Video, Plus, Search, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full bg-black text-white flex justify-around py-2 border-t border-white/10 z-50'>
      {[Play, Video, Plus, Search, User].map((Icon, idx) => (
        <Icon key={idx} size={24} className='hover:text-pink-500 transition' />
      ))}
    </div>
  )
}

export default BottomNav