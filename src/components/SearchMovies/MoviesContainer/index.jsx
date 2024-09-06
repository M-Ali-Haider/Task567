import Link from "next/link";
import MoviesCard from "./MoviesCard";
export default function MoviesContainer({ data }) {
  console.log(data.Search);
  return (
    <>
      <div className=" max-w-[1156px] justify-evenly md:justify-center xl:justify-normal w-full flex gap-8 flex-wrap  ">
        {data.Search.map((item, index) => {
          return (
            <Link href={`/movies/${item.imdbID}`} key={index}>
              <MoviesCard item={item} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
