import MoviePageComponent from "@/components/MoviePage";

export default function MovieCardPage({ params }) {
  return (
    <>
      <main className="w-full flex justify-center">
        <MoviePageComponent slug={params.slug} />
      </main>
    </>
  );
}
