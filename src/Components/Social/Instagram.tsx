import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useEffect } from "react";
import GetInstagramPosts from "../../Services/Instagram";
import { GlobalDetails } from "../../GlobalDetails";
import ImageGallery from "react-image-gallery";

export const Instagram = () => {
  //TO-DO: Define types instead of using any(type here)

  type imageData = {
    original: string;
    thumbnail: string;
    originalAlt: string;
    thumbnailAlt: string;
    description: string;
  };

  const [instaUrl, setInstaUrl] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);

  const handleInstaData = (data: any[]) => {
    let newImages: any[] = [];
    data.map(image => {
      let imageData: imageData = {
        original: image.display_url,
        thumbnail: image.thumbnail,
        originalAlt: image.text,
        thumbnailAlt: image.text,
        description: image.text
      };
      return newImages.push(imageData);
    });
    setImages(newImages);
  };

  const getInsta = () => {
    GetInstagramPosts(GlobalDetails.Instagram.string).then(data => {
      let images = data.medias;
      handleInstaData(images);
    });
  };

  useEffect(() => {
    setInstaUrl(`https://instagram.com/${GlobalDetails.Instagram.string}`);
    getInsta();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="social-div">
      <h3>INSTAGRAM</h3>
      {images.length > 0 ? <ImageGallery items={images} /> : null}
      <a href={instaUrl} target="_blank" rel="noopener noreferrer">
        Go To Instagram Page
      </a>
    </div>
  );
};
