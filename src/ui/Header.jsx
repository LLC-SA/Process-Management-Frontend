import { useState, useEffect } from "react";

function Header({ children }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <header
      className="flex justify-end
               bg-slate-50
                 px-10 py-2"
    >
      <div>{children}</div>
      <div className="flex gap-4 text-sm font-medium">
        <span className="ml-6">
          {date.toLocaleTimeString("es-AR", { hour12: false })}
        </span>
        <span>{date.toLocaleDateString()}</span>
      </div>
    </header>
  );
}

export default Header;
