import React, { useState, useEffect } from "react";
import "./BttButton.css";

const BttButton = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={scrollToTop}
          className="btn-lg"
          id="btn-back-to-top"
        >
          <i class="fas fa-arrow-up"></i>
        </button>
      )}

      {/* <!-- Explanation -->
  <div class="container mt-4 text-center" style="height: 2000px">
    <p>
      Start scrolling the page and a strong
      <strong>"Back to top" button </strong> will appear in the
      <strong>bottom right corner</strong> of the screen.
    </p>
  
    <p>Click this button and you will be taken to the top of the page.</p>
  </div> */}
    </>
  );
};

export default BttButton;
