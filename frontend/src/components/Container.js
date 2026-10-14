export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
