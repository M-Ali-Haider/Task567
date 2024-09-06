"use client";
import WikiImage from "@/components/Wiki/wikiImage";
import WikiContainer from "./wikiContainer";
import WikiInput from "./wikiInput";
import WikiNotValid from "./wikiNotValid";
import { useState } from "react";
import { useMutation } from "react-query";
import Loader from "@/utils/Loader";

export default function Wiki() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: (query) =>
      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${query}`
      ).then((res) => res.json()),
    onSuccess: (data) => {
      setData(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleClick = () => {
    if (query !== "") {
      setIsValid(false);
      mutate(query);
    } else {
      setIsValid(true);
    }
  };

  return (
    <>
      <WikiImage />
      <WikiInput query={query} setQuery={setQuery} handleClick={handleClick} />
      {isValid ? (
        <WikiNotValid />
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <WikiContainer data={data} />
      ) : null}
    </>
  );
}
