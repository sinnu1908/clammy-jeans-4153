import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.ulcdn.net/media/Slideshow/Set-the-scene-slideshow.jpg?1679855163" },
  { url: "https://www.ulcdn.net/media/Slideshow/Swing-in-action-Slideshow.jpg?1679059226" },
  { url: "https://www.ulcdn.net/media/Slideshow/Dining-slideshow-3.jpg?1679042848" },
  { url: "https://www.ulcdn.net/media/Slideshow/Beds-slideshow-2.jpg?1679042844" },
 
];

const ImageSlider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1349}
        height={562}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.9}
        autoPlay={false}
      />
    </div>
  );
}
export default ImageSlider;

