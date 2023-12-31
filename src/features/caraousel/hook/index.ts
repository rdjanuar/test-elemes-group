import { animate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

export const useCaraousel = () => {
  const ref = useRef<HTMLUListElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [trackMouse, setTrackMouse] = useState(false);

  const x = useMotionValue(0);

  const handleMouseMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    if (!trackMouse) return;

    const xVal = e.pageX - ref.current.offsetLeft;
    const walk = (xVal - startX) * 2; //scroll-fast

    const controls = animate(x, scrollLeft - walk, {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      onUpdate: (val) => {
        if (!ref.current) return;
        ref.current.scrollLeft = val;
      },
    });
    return controls.stop;
  };

  const handleMouseDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    setTrackMouse(true);

    const startX = e.pageX - ref.current.offsetLeft;
    setStartX(startX);

    const scrollLeft = ref.current.scrollLeft;
    setScrollLeft(scrollLeft);
  };

  const handleMouseLeave = () => {
    setTrackMouse(false);
  };

  const handleMouseUp = () => {
    setTrackMouse(false);
  };

  const handleScroll = () => {
    if (!ref.current) return;

    x.set(ref.current.scrollLeft);
  };

  const handleNext = () => {
    if (!ref.current) return;

    const next = Math.trunc(ref.current.scrollLeft) + 240;
    const controls = animate(x, next, {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      onUpdate: (val) => {
        if (!ref.current) return;
        ref.current.scrollLeft = val;
      },
    });
    return controls.stop;
  };

  const handlePrev = () => {
    if (!ref.current) return;

    const prev = ref.current.scrollLeft - 235;
    const controls = animate(x, prev, {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
      onUpdate: (val) => {
        if (!ref.current) return;
        ref.current.scrollLeft = val;
      },
    });
    return controls.stop;
  };

  return {
    ref,
    handleMouseDown,
    handleMouseUp,
    handleScroll,
    scrollLeft,
    handleMouseLeave,
    handleMouseMove,
    handleNext,
    handlePrev,
  };
};
