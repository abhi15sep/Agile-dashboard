import React, { useState, useEffect } from "react";
import goToTopLogo from '../assets/up-arrow.svg';

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={() => scrollToTop()}>
          <img src={goToTopLogo} alt="go to top image" />
        </div>
      )}
    </div>
  )
}

export default ScrollToTop;