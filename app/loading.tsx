export default function Loading() {
  return (
    <main className="min-h-screen bg-offwhite flex flex-col items-center justify-center">
      {/* Animated dots */}
      <div className="flex items-center gap-2.5 mb-6">
        <span
          className="block w-2 h-2 rounded-full bg-primary animate-pulse"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="block w-2 h-2 rounded-full bg-primary animate-pulse"
          style={{ animationDelay: "300ms" }}
        />
        <span
          className="block w-2 h-2 rounded-full bg-primary animate-pulse"
          style={{ animationDelay: "600ms" }}
        />
      </div>

      {/* Loading text */}
      <p className="text-sm text-text-muted font-light tracking-widest">
        กำลังโหลด...
      </p>
    </main>
  );
}
