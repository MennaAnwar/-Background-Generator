import React, { useState, useEffect, useContext, useRef, FC } from "react";
import Context from "../../Context";

interface AngleSelectorProps {}

const AngleSelector: FC<AngleSelectorProps> = () => {
  const { angle, setAngle } = useContext(Context);
  const circleRef = useRef<HTMLDivElement>(null); // Specify the HTML element type for the ref
  const [isDragging, setIsDragging] = useState(false);

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    // Specify the type for the event
    e.preventDefault();
    setIsDragging(true);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: MouseEvent | TouchEvent) => {
    // Specify the type for the event
    if (isDragging && circleRef.current) {
      // Check if circleRef.current is not null
      const circle = circleRef.current;
      const rect = circle.getBoundingClientRect();
      const center_x = rect.left + rect.width / 2;
      const center_y = rect.top + rect.height / 2;
      const clientX =
        e instanceof MouseEvent ? e.clientX : e.touches[0].clientX; // Properly differentiate between mouse and touch events
      const clientY =
        e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      const delta_x = clientX - center_x;
      const delta_y = clientY - center_y;
      let angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI);
      angle -= 90;
      if (angle < 0) {
        angle += 360;
      }
      setAngle(Math.round(angle));
    }
  };

  // Attach event listeners for mouse/touch events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => onDrag(e);
    const handleTouchMove = (e: TouchEvent) => onDrag(e);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);

    // Clean up event listeners
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]); // Only re-run the effects if isDragging changes

  return (
    <div className="align-items-center d-flex justify-content-center">
      <div className="debug">{angle}deg</div>
      <div
        className="circle"
        ref={circleRef}
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        <div className="dot" style={{ transform: `rotate(${angle}deg)` }}></div>
      </div>
    </div>
  );
};

export default AngleSelector;
