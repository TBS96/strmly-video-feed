import { createContext, useContext, useState } from 'react';

const ReelsContext = createContext();

export const ReelsProvider = ({ children }) => {
  
  const [likedVideos, setLikedVideos] = useState([]);
  const [followedCreators, setFollowedCreators] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('userID'));

  const toggleLike = (id) => {
    setLikedVideos((prev) => prev.includes(id) ? prev.filter((vid) => vid !== id) : [...prev, id]);
    // console.log(likedVideos);
  };

  const toggleFollow = (name) => {
    setFollowedCreators((prev) => prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]);
  };

  const login = (id) => {
    localStorage.setItem('userID', id);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('userID');
    setIsLoggedIn(false);
  };

  return (
    <ReelsContext.Provider value={{ likedVideos, toggleLike, followedCreators, toggleFollow, isLoggedIn, login, logout }}>
      {children}
    </ReelsContext.Provider>
  );
};

export const useReelsContext = () => useContext(ReelsContext);