import RandomPeople from "@/components/RandomPeople";
import styles from "./style.module.css";
export default function RandomPage() {
  return (
    <>
      <main
        className={`${styles.gradient} px-12 h-screen w-full flex items-center justify-center`}
      >
        <RandomPeople />
      </main>
    </>
  );
}
