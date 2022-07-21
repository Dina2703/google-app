import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

function Body() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    //get the search term
    const term = searchInputRef.current.value;
    if (!term.trim()) {
      return;
    }
    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  return (
    <div>
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          alt="google logo"
          objectFit="cover"
        />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-lg lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={handleSearch} className="btn">
            Google Search
          </button>
          <button className="btn">I am Feeling Lucky</button>
        </div>
      </form>
    </div>
  );
}

export default Body;
