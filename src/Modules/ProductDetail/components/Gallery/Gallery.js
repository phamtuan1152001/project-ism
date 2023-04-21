import { useState } from 'react';
import Product1 from '@src/assets/images/product-1.jpg';
import Product2 from '@src/assets/images/product-2.jpg';
import Product3 from '@src/assets/images/product-3.jpg';
import Product4 from '@src/assets/images/product-4.jpg';
import Product5 from '@src/assets/images/product-5.jpg';
import Product6 from '@src/assets/images/product-6.jpg';
function Gallery() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageWidth = 328; // Kích thước của mỗi hình ảnh
  const imageDivide = 100; // Kích thước của mỗi hình ảnh

  // Thiết lập sự kiện khi người dùng nhấn vào các liên kết trong image-navigation
  const handleNavigationClick = (index, event) => {
    event.preventDefault();
    const newPosition = index * -(imageWidth - imageDivide);
    const newIndex = Math.abs(index % 6);
    setCurrentPosition(newPosition);
    setActiveIndex(newIndex);
  };

  // Thiết lập sự kiện khi người dùng nhấn vào các hình ảnh trong image-list
  const handleImageClick = (index) => {
    const newPosition = index * -(imageWidth - imageDivide);
    const newIndex = Math.abs(index % 6);
    setCurrentPosition(newPosition);
    setActiveIndex(newIndex);
  };
  

  return (
    <div className="Gallery">
      <div className="slider">
        <h1>Our lovely customer</h1>
        <div className="image-list" style={{ transform: `translateX(${currentPosition}px)` }}>
          <img src={Product1} alt="" className={activeIndex === 0 ? "active" : ""} onClick={() => handleImageClick(0)} />
          <img src={Product2} alt="" className={activeIndex === 1 ? "active" : ""} onClick={() => handleImageClick(1)} />
          <img src={Product3} alt="" className={activeIndex === 2 ? "active" : ""} onClick={() => handleImageClick(2)} />
          <img src={Product4} alt="" className={activeIndex === 3 ? "active" : ""} onClick={() => handleImageClick(3)} />
          <img src={Product5} alt="" className={activeIndex === 4 ? "active" : ""} onClick={() => handleImageClick(4)} />
          <img src={Product6} alt="" className={activeIndex === 5 ? "active" : ""} onClick={() => handleImageClick(5)} />
          <img src={Product1} alt="" className={activeIndex === 6 ? "active" : ""} onClick={() => handleImageClick(0)} />
        </div>
      </div>
      <div className="image-navigation">
        <a href="#" className={activeIndex === 0 ? "active" : ""} onClick={(event) => handleNavigationClick(0, event)}></a>
        <a href="#" className={activeIndex === 1 ? "active" : ""} onClick={(event) => handleNavigationClick(1, event)}></a>
        <a href="#" className={activeIndex === 2 ? "active" : ""} onClick={(event) => handleNavigationClick(2, event)}></a>
        <a href="#" className={activeIndex === 3 ? "active" : ""} onClick={(event) => handleNavigationClick(3, event)}></a>
        <a href="#" className={activeIndex === 4 ? "active" : ""} onClick={(event) => handleNavigationClick(4, event)}></a>
        <a href="#" className={activeIndex === 5 ? "active" : ""} onClick={(event) => handleNavigationClick(5, event)}></a>
      </div>
    </div>
  );
}

export default Gallery;