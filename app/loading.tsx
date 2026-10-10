export default function Loading() {
  return (
    <div
      className="mx-auto min-h-[60vh] max-w-[1200px] animate-[fade-in_.2s_ease_.25s_both] px-6 py-32"
      role="status"
      aria-label="Loading"
    >
      <div className="h-10 w-2/3 animate-pulse bg-line" />
      <div className="mt-6 h-4 w-1/2 animate-pulse bg-line" />
    </div>
  );
}
