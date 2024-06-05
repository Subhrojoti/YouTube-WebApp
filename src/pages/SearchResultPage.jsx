import { useEffect, useState } from "react";
import SearchResultVideoCard from "../Components/SearchResultVideoCard/SearchResultVideoCard";
import { useParams } from "react-router-dom";
import { fetchSearchResult } from "../utils/Api/fetchSearchResult";

const SearchResultPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const search = async () => {
      try {
        const response = await fetchSearchResult(searchTerm);
        setSearchResult(response);
      } catch (error) {
        console.error(error);
      }
    };
    search();
  }, [searchTerm]);
  return (
    <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-white">
      <div className="grid grid-cols-1 gap-2 p-5">
        {searchResult.map((video, k) => (
          <SearchResultVideoCard
            key={k}
            video={video?.video}
            views={video?.video?.stats?.views}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResultPage;
