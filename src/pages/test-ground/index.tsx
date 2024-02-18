import { useState, useEffect } from "react";

const FadingCardContent = () => {
  const [currentElement, setCurrentElement] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentElement((prevElement) => (prevElement % 3) + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const elements = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima auturi voluptate aliquam quis quidem. Ut nostrum expedita dicta rerum quod.",
    " itaque eius, tempora minus quisquam impedit beatae adipisci tempore except",
    "element two to tango",
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {elements.map((element, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: currentElement === index + 1 ? 1 : 0,
            transition: "opacity 1s ease-in-out 1s",
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default FadingCardContent;
