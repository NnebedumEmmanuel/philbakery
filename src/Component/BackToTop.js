import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cakecious-scroll-to-top cakecious-scroll-to-top-position-right cakecious-scroll-to-top-display-sticky"
        >
          <span className="cakecious-icon " title="" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="64"
              height="64"
            >
          
              <path d="M32,20.3a3,3,0,0,0-2.12.88L12.17,38.89a2,2,0,0,0,0,2.83h0l1.42,1.41a2,2,0,0,0,2.82,0L32,27.54,47.59,43.13a2,2,0,0,0,2.82,0l1.42-1.41a2,2,0,0,0,0-2.83h0L34.12,21.18A3,3,0,0,0,32,20.3Z"></path>
            </svg>
          </span>{" "}
          <span className="screen-reader-text">Back to Top</span>
          <p>dddddddddddddddddd</p>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
