"use client";
import { useEffect, useState } from "react";
import MoviesContainer from "./MoviesContainer";
import { useMutation, useQuery } from "react-query";
import { useDebounce } from "use-debounce";
import { ColorRing } from "react-loader-spinner";

export default function SearchMovies() {
  const [query, setQuery] = useState("friends");
  const [debouncedQuery] = useDebounce(query, 3000);
  // const [data, setData] = useState(null);

  const fetchMovies = async (query) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=16b59cb0&s=${query}`
    );
    const data = await res.json();
    return data;
  };

  const { data, isLoading, error } = useQuery(
    ["movies", debouncedQuery],
    () => fetchMovies(debouncedQuery),
    {
      enabled: !!debouncedQuery.trim(),
    }
  );

  // const fetchData = async (query) => {
  //   const res = await fetch(
  //     `https://www.omdbapi.com/?apikey=16b59cb0&s=${query}`
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  // const { mutate, isLoading, error } = useMutation(fetchData, {
  //   onSuccess: (data) => {
  //     setData(data);
  //   },
  // });

  // useEffect(() => {
  //   if (debouncedQuery) {
  //     mutate(debouncedQuery);
  //   }
  // }, [debouncedQuery]);

  const handleLoading = () => {
    if (isLoading) {
      return <ColorRing width={40} height={40} colors={[]} />;
    } else if (data) {
      if (data.Search && data.Search.length > 0) {
        return <MoviesContainer data={data} />;
      } else {
        return <p>No Results Found</p>;
      }
    } else {
      return (
        <p>
          <ManyInputs />
        </p>
      );
    }
  };

  return (
    <>
      <div className="w-full mt-8 max-w-[1156px]">
        <h1 className="text-[#102a42] text-2xl my-3 font-bold">
          Search Movies
        </h1>
        <input
          value={query}
          className="w-[300px] md:w-[600px] pl-4 h-[40px]"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="mt-14">{handleLoading()}</div>
    </>
  );
}

function ManyInputs({}) {
  return (
    <div className="text-[#bb2525] font-light text-sm pt-2">
      Too Many Results
    </div>
  );
}
