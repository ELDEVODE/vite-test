import { useEffect, useContext } from 'react';
import InfonimeContext from '../../context/InfonimeContext';

function Hero() {
  const { randomAnime, FetchRandomAnime, image } =
    useContext(InfonimeContext);

  useEffect(() => {
    FetchRandomAnime();
  }, []);

  return (
    <div class="mt-10 max-w-md mx-auto bg-base-200 rounded shadow-md overflow-hidden md:max-w-full md:max-w-full ">
      <div className="md:flex ">
        <div className="md:shrink-0">
          <img
            src={image}
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="jolo"
          ></img>
        </div>
        <div className="p-8">
          <h1 className="text-3xl mb-4">{randomAnime.title}</h1>
          <h1 className="text-base mb-3">
            <span>English Title : </span>
            {randomAnime.title_english}
          </h1>
          <h1 className="text-base mb-3">
            <span>Japanese Title : </span>
            {randomAnime.title_japanese}
          </h1>
          <h1 className="text-xs mb-3">
            <span>Type : </span>
            {randomAnime.type}
          </h1>
          <h1 className="text-xs mb-3">
            <span>Episodes : </span>
            {randomAnime.episodes}
          </h1>

          <p>{randomAnime.synopsis}</p>

          <div className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-5 btn-accent rounded ">
            details
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
