import React, { useEffect, useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CircularProgress from "@mui/material/CircularProgress";


function Home() {
  const [bookData, setBookData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(searchInput);
  const [hasSearched, setHasSearched] = useState(false);
  // const bookTitle = null

  const fetchBookData = async () => {
    setIsLoading(true);
    try {
      const apiUrl = `https://openlibrary.org/search.json?title=${query}`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("unable to fetch the data ");
      }
      const data = await response.json();

      setBookData(data.docs);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setBookData([]);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(bookData);
  useEffect(() => {
    if (!query) {
      setBookData([]);
      return;
    }

    fetchBookData();
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setQuery(searchInput);
      setHasSearched(true);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (value.trim() === "") {
      setHasSearched(false);
      setBookData([]);
      setQuery("");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col ">
      <input
        type="search"
        placeholder="Enter the book name to search "
        value={searchInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className="w-[90%]  border border-gray-400  rounded-[10px] mt-10 h-16 mx-auto pl-3 shrink-0"
      />
      <div className="flex flex-wrap justify-center items-center w-100%  mt-18  ">
        {!hasSearched && (
          <div className="flex flex-col  items-center">
            <p className="text-2xl text-black">Enter title to get the book </p>
            <AutoStoriesIcon sx={{ fontSize: "100px", marginTop: "20px" }} />
          </div>
        )}

        {isLoading && <CircularProgress />}
        {hasSearched && !isLoading && bookData.length === 0 && (
          <p className="text-2xl text-black">No Book Found</p>
        )}

        {bookData.length > 0 &&
          bookData.map((book) => {
            return (
              <div
                key={book.key}
                className="sm:w-[240px] md:w-[248px] w-3xs h-50 border-1 border-grey m-2 rounded-3xl flex flex-col justify-center items-start pl-2 leading-8 shadow-lg overflow-x-hidden"
              >
                <h2 className=" text-left truncate w-[250px]">
                  Title : {book.title}
                </h2>
                <p
                  className="text-left truncate w-[250px]"
                  title={book.author_name ?? "Not Available"}
                >
                  Author_name : {book.author_name ?? "Not Available"}
                </p>
                <p className=" text-left truncate w-[250px]">
                  Published_Year : {book.first_publish_year ?? "Not Available"}
                </p>
                <p className=" text-left truncate w-[250px]">
                  Edition : {book.edition_count}
                </p>
                <p className=" text-left truncate w-[250px]">
                  Language : {book.language ?? "Not Available"}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Home;
