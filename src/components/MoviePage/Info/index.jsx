export default function Info({ heading, desc }) {
  return (
    <p>
      <span className="font-bold">{heading}: </span>
      {desc}
    </p>
  );
}
