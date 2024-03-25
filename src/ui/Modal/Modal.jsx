import { createPortal } from "react-dom";
import { Button } from "../shadcn_component/button";
import Overlay from "./Overlay";
import { HiXMark } from "react-icons/hi2";
import { useEffect, useRef } from "react";

function Modal({ children, onCloseModal }) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onCloseModal();
      }
    }

    // The modal close and opens fast after the first time.
    // I use the capture phase for this to work and not the bubbling phase
    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [onCloseModal]);

  return createPortal(
    <Overlay onCloseOutside={onCloseModal}>
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 px-12 pb-8 pt-16 shadow-lg transition-all duration-500"
      >
        <Button
          className="border-1 absolute right-5 top-2 translate-x-3 rounded-md bg-slate-400 p-3 transition-all duration-300 hover:bg-slate-600 [&>*]:h-5 [&>*]:w-5"
          onClick={onCloseModal}
        >
          <HiXMark />
        </Button>
        {children}
      </div>
    </Overlay>,
    document.body,
  );
}

export default Modal;
