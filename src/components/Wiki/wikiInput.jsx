const WikiInput = ({ query, setQuery, handleClick }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="h-[109px] max-w-[600px] w-full bg-white flex items-center justify-center p-10">
      <div className="flex items-center h-[30px] rounded-sm overflow-hidden">
        <input
          value={query}
          className="pl-3 border border-[#e2e8f0] border-solid w-[420px] h-full shadow-md text-sm"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleClick}
          className="bg-[#645cff] text-xs text-white transition-all ease-linear hover:text-black duration-300 min-w-[100px] h-full flex items-center justify-center"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default WikiInput;
