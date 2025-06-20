import { useState } from 'react';
import { useReelsContext } from '../context/ReelsContext';

const LoginPage = () => {

  const [userID, setUserID] = useState('');
  const { login } = useReelsContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userID.trim()) {
      login(userID.trim());
    }
  };

  return (
    <div className='h-screen flex items-center justify-center bg-black text-white'>
      <form onSubmit={handleSubmit} className='space-y-4 w-80'>
        <h1 className='text-2xl font-bold mb-4'>Login</h1>
        <input
          type='text'
          placeholder='Enter user ID'
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          className='w-full px-4 py-2 rounded bg-white text-black'
        />
        <button
          type='submit'
          className='w-full bg-pink-500 py-2 rounded text-white font-semibold hover:bg-pink-600'
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage