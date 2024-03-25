function Overlay({ children }) {
  return (
    <div
      className="fixed left-0 top-0 z-50 h-screen w-full
     bg-slate-500 bg-opacity-30 backdrop-blur-sm transition-all duration-500"
    >
      {children}
    </div>
  );
}

export default Overlay;
