import styles from "./style.module.css";
import { randomOptions } from "@/utils/random";

export default function RandomDetails({
  data,
  option,
  setOption,
  handleClick,
}) {
  const handleDisplay = () => {
    const optionHandlers = {
      0: () => {
        const name = data.name;
        return [name.title, name.first, name.middle, name.last]
          .filter(Boolean)
          .join(" ");
      },
      1: () => data.email,
      2: () => data.dob.age,
      3: () => {
        const location = data.location.street;
        return [location.number, location.name].filter(Boolean).join(" ");
      },
      4: () => data.phone,
      5: () => data.login.password,
    };
    return optionHandlers[option.index]();
  };

  return (
    <>
      <div className="h-[313px] w-full flex flex-col items-center">
        <div className="text-[#617d98] text-lg mt-16">
          My {option.chosen} is
        </div>

        <div className="text-4xl mb-5 mt-2">{handleDisplay()}</div>

        <div className="flex items-center gap-[80px] my-4">
          {randomOptions.map((item, index) => {
            return (
              <div
                key={index}
                className={index === option.index ? styles.trigger : null}
                onClick={() => setOption({ index: index, chosen: item.chosen })}
              >
                {item.icon}
              </div>
            );
          })}
        </div>

        <button
          onClick={handleClick}
          className="mt-4 bg-[#49a6e9] text-white shadow-md py-[0.375rem] px-[0.75rem] rounded-md tracking-[0.25rem] hover:text-[#0669d1] hover:bg-[#063251] duration-300 transition-all"
        >
          RANDOM USER
        </button>
      </div>
    </>
  );
}
