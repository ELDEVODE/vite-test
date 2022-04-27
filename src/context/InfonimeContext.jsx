import { createContext, useState } from 'react';

const InfonimeContext = createContext();

export const InfonimeProvider = ({ children }) => {
  const [randomAnime, setRandomAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);

  const FetchRandomAnime = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/random/anime?sfw=true`
    );

    const data = await response.json();

    setImage(data.data.images.jpg.large_image_url);
    setRandomAnime(data.data);
    setLoading(false);
  };

  return (
    <InfonimeContext.Provider
      value={{
        randomAnime,
        loading,
        FetchRandomAnime,
        image,
      }}
    >
      {children}
    </InfonimeContext.Provider>
  );
};

export default InfonimeContext;
