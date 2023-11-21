import ImageSlider from "./base_component.js";
import useMediaQuery from '@mui/material/useMediaQuery';

const Image_slider = () => {

  const isMobile = useMediaQuery('(max-width: 1100px)');

  const slides = [
    { url: "./images/slider_img1.jpg", title: "beach" },
    { url: "./images/image-2.jpg", title: "boat" },
    { url: "./images/image-3.jpg", title: "forest" },
    { url: "./images/image-4.jpg", title: "city" },
    { url: "./images/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: isMobile ? "85vw" : "60vw",
    height:  isMobile ? "35vw" : "23vw" ,
    backgroundSize:"contain",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Image_slider;