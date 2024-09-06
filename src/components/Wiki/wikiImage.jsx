import Image from "next/image";

export default function WikiImage({}) {
  return (
    <>
      <Image
        src={`https://vannilla-js-basic-project-28-wikipedia.netlify.app/wiki-logo.png`}
        width={200}
        height={182}
        alt="wikipedia image"
        className="w-[200px] h-[182px] object-cover mt-20"
      />
      <h1 className="mb-8 mt-3 text-[1.953rem]">Search Wikipedia</h1>
    </>
  );
}
