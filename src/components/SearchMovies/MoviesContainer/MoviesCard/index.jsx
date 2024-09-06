import Image from "next/image";
import styles from "./style.module.css";
export default function MoviesCard({ item }) {
  const imgSrc =
    item.Poster === "N/A" ? `/noPictureAvailable.png` : item.Poster;
  return (
    <>
      <div
        className={`${styles.card} cursor-pointer relative overflow-hidden w-full max-w-[500px] sm:max-w-[450px] md:max-w-[265px] h-[400px]`}
      >
        <Image
          className="w-full h-full"
          src={imgSrc}
          width={500}
          height={400}
          alt="movie images"
        />
        <div
          className={`${styles.hover} px-3 pt-2 text-white absolute w-full h-[96px] bg-red-500`}
        >
          <h1 className="font-bold">{item.Title}</h1>
          <p>{item.Year}</p>
        </div>
      </div>
    </>
  );
}
