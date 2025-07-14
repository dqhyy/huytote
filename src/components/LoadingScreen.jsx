import React, { useEffect, useState } from 'react'

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "Hí anh em";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        // Bắt đầu fade out
        setFadeOut(true);
        // Gọi onComplete sau khi hiệu ứng fade out xong
        setTimeout(() => {
          onComplete();
        }, 1000); // khớp với thời gian fadeOut
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="mb-4 text-4xl font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
