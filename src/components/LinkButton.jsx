export default function LinkButton({ children }) {
  return (
    <button className="rounded-md bg-accent-400 font-satoshi px-2 py-1 text-primary-200 hover:bg-accent-200">
      {children}
    </button>
  );
}
