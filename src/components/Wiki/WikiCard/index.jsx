import styles from "./style.module.css";
export default function WikiCard({ title, desc }) {
  return (
    <>
      <div
        className={`w-full h-[182px] md:w-[379px] md:h-[271px] bg-white py-6 px-8 ${styles.card}`}
      >
        <h4 className={`text-[#0f172a] text-2xl ${styles.heading}`}>{title}</h4>
        <div
          className={`text-[#64748b] mt-4 ${styles.desc}`}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
    </>
  );
}
