import React, { useState } from "react";
import Thumbnail1 from '@src/assets/images/gallery-1.jpg';
import Thumbnail2 from '@src/assets/images/gallery-2.jpg';
import Thumbnail3 from '@src/assets/images/gallery-3.jpg';
import Thumbnail4 from '@src/assets/images/gallery-4.jpg';
import Thumbnail5 from '@src/assets/images/ball.png';
import Thumbnail6 from '@src/assets/images/book.png';
import Thumbnail7 from '@src/assets/images/child.png';

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const thumbnails = [
    Thumbnail1,
    Thumbnail2,
    Thumbnail3,
    Thumbnail4,
    Thumbnail5,
    Thumbnail6,
    Thumbnail7
  ];

  function displayImage() {
    const mainImage = document.querySelector(".main-image img");
    // Change the main image source
    mainImage.src = thumbnails[currentImageIndex];

    // Remove the active class from all thumbnails
    const thumbnailElems = document.querySelectorAll(".small-img-row img");
    thumbnailElems.forEach((thumbnailElem) => {
      thumbnailElem.classList.remove("active");
    });

    // Add the active class to the current thumbnail
    thumbnailElems[currentImageIndex].classList.add("active");
  }

  function goToPreviousImage() {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = thumbnails.length - 1;
      }
      return newIndex;
    });
  }

  function goToNextImage() {
    setCurrentImageIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= thumbnails.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  }

  return (
    <div className="col-2">
        <div className="container">
            <div className="main-image">
                <img src={thumbnails[currentImageIndex]} width="100%" id="ProductImg" alt="Large Image"></img>
            </div>
            <div className="button-container">
                <button id="prev-btn" onClick={goToPreviousImage}><i className='bx bxs-chevron-left'></i></button>
                <button id="next-btn" onClick={goToNextImage}><i className='bx bxs-chevron-right'></i></button>
            </div>
        </div>
        <div className="small-img-row">
            {thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail}
                        alt=""
                        className={index === currentImageIndex ? "active" : ""}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                    ))}
        </div>
        <div className="certification">
            <p><i className='bx bxs-heart'></i>100% health guarantee for pets</p>
            <p><i className='bx bxs-dog'></i>100% guarantee of pet identification</p>
        </div>
        <div className="contact-box">
            <div className="share-box" style={{ display: "inline-flex" }}>
                <p style={{ display: "inline-flex" }}>
                    <i className="bx bx-share-alt" style={{ display: "inline-flex" }}></i>
                    Share:
                </p>
            </div>
            <div className="social" style={{ display: "inline-flex" }}>
                <a href="#"><i className="bx bxl-facebook"></i></a>
                <a href="#"><i className="bx bxl-instagram"></i></a>
                <a href="#"><i className="bx bxl-twitter"></i></a>
                <a href="#"><i className="bx bxl-youtube"></i></a>
            </div>
        </div>
    </div> 
  );
}

export default ImageGallery;