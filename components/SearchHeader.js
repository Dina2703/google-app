import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";

function SearchHeader() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    //if the input is empty just return/do nothing
    if (!term.trim()) return;
    //if there is term(data) to search, route to the 'search' page
    router.push(`/search?term=${term.trim()}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div
        className="flex w-full p-6 items-center
      "
      >
        <Image
          className="cursor-pointer"
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          alt="google logo"
          objectFit="contain"
        />
        <form className="flex border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button type="submit" hidden onClick={search}></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}

export default SearchHeader;
