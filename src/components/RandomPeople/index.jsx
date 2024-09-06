"use client";
import { useEffect, useState } from "react";
import RandomDetails from "./RandomDetails";
import RandomImage from "./RandomImage";
import { useMutation } from "react-query";
import { ColorRing } from "react-loader-spinner";

export default function RandomPeople() {
  const [data, setData] = useState(null);
  const [option, setOption] = useState({
    index: 0,
    chosen: "name",
  });

  const fetchData = async () => {
    const res = await fetch(`https://randomuser.me/api/`);
    const data = await res.json();
    return data;
  };

  const { mutate, isLoading, error } = useMutation(fetchData, {
    onSuccess: (data) => {
      setData(data);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  const handleClick = () => {
    mutate();
    setOption({ index: 0, chosen: "name" });
  };

  const handleLoading = () => {
    if (isLoading || !data) {
      return <ColorRing width={40} height={40} colors={[]} />;
    } else {
      return (
        <>
          <RandomImage src={data.results[0].picture.large} />
          <RandomDetails
            data={data.results[0]}
            option={option}
            setOption={setOption}
            handleClick={handleClick}
          />
        </>
      );
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden w-full max-w-[730px] h-[443px] shadow-lg flex flex-col justify-center items-center">
        {handleLoading()}
      </div>
    </>
  );
}
