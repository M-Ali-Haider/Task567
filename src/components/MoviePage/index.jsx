"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import Info from "./Info";
import { ColorRing } from "react-loader-spinner";

export default function MoviePageComponent({ slug }) {
  const [data, setData] = useState(null);

  const fetchData = async (slug) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=16b59cb0&i=${slug}`
    );

    const data = await res.json();
    return data;
  };

  const { mutate, isLoading, error } = useMutation(fetchData, {
    onSuccess: (data) => {
      setData(data);
    },
  });

  useEffect(() => {
    mutate(slug);
  }, [slug]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading || !data)
    return (
      <p className="mt-12">
        <ColorRing width={40} height={40} colors={[]} />
      </p>
    );

  const keyValuePairs = Object.keys(data).map((key) => {
    return {
      heading: key,
      desc: JSON.stringify(data[key]),
    };
  });
  const filteredKeyValuePairs = keyValuePairs.filter((item) => {
    return (
      item.heading !== "Poster" &&
      item.heading !== "Ratings" &&
      item.heading !== "Response" &&
      item.heading !== "imdbID"
    );
  });

  const handleLoading = () => {
    if (isLoading || !data) {
      return <ColorRing width={40} height={40} colors={[]} />;
    } else {
    }
  };

  return (
    <>
      <div className="max-w-[1170px] flex gap-8 mt-12">
        {/* Image Container */}
        <div>
          <Image
            src={data.Poster}
            width={295}
            height={495}
            alt="movie image"
            className="min-w-[295px] h-[495px] object-cover"
          />
        </div>
        {/* Details Container */}
        <div className="flex flex-col gap-3">
          <h1 className="text-[#102a42] text-4xl font-bold">{data.Title}</h1>
          <p className="leading-relaxed text-[#324d67]">{data.Plot}</p>

          {filteredKeyValuePairs.map((item, index) => {
            return <Info key={index} heading={item.heading} desc={item.desc} />;
          })}

          <Link
            href={"/"}
            className="bg-[#49a6e9] text-white rounded p-2 w-fit"
          >
            Back To Movies
          </Link>
        </div>
      </div>
    </>
  );
}
