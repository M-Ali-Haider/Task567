import Image from "next/image";

export default function RandomImage({ src }) {
  return (
    <div className="relative h-[130px] bg-[#f1f5f8] border-b border-solid border-[#76736a] flex justify-center w-full">
      <div className="absolute top-4 flex items-center justify-center w-[150px] h-[150px] rounded-full overflow-hidden border-solid border border-[#76736a]">
        <div className="bg-white flex items-center justify-center w-[150px] h-[150px] rounded-full overflow-hidden">
          <Image
            src={src}
            width={128}
            height={128}
            alt="random person image"
            className="border-solid border border-[#76736a] object-cover w-[140px] h-[140px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
