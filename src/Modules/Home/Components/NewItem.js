import React from "react";

// @svg and img
import imageText from "../assets/images/image-2-9@2x.png";

const NewItem = () => {
  return (
    <div className="new-content">
      <div className="new-content__img">
        <img src={imageText} alt="new-img" className="new-img" />
      </div>
      <div className="new-content__info">
        <h3>What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
        <p>
          The Pomeranian, also known as the Pomeranian (Pom dog), is always in
          the top of the cutest pets. Not only that, the small, lovely, smart,
          friendly, and skillful circus dog breed.
        </p>
      </div>
    </div>
  );
};

export default NewItem;
