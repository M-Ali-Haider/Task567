import WikiCard from "./WikiCard";

export default function WikiContainer({ data }) {
  console.log(data);
  return (
    <>
      {data.query?.search ? (
        <div className="mt-10 flex flex-wrap justify-center xl:justify-normal max-w-[1185px] gap-4">
          {data.query.search.map((item, index) => {
            const href = `https://en.wikipedia.org/?curid=${item.pageid}`;
            return (
              <a href={href} key={index} target="_blank">
                <WikiCard title={item.title} desc={item.snippet} />
              </a>
            );
          })}
        </div>
      ) : (
        <p className="mt-10">No Result Found</p>
      )}
    </>
  );
}
