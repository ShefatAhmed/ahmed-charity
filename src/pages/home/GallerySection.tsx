import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://i.ibb.co.com/6mQ5ZtP/1.png",
    thumbnail: "https://i.ibb.co.com/6mQ5ZtP/1.png",
    description: "Blood donation campaign for injured people.",
  },
  {
    original: "https://i.ibb.co.com/0GqBswg/2.jpg",
    thumbnail: "https://i.ibb.co.com/0GqBswg/2.jpg",
    description: "Relief for homeless people.",
  },
  {
    original: "https://i.ibb.co.com/LtnsVbj/3.jpg",
    thumbnail: "https://i.ibb.co.com/LtnsVbj/3.jpg",
    description: "Seminar after successful donation campaign.",
  },
  {
    original: "https://i.ibb.co.com/Vq60SSj/4.jpg",
    thumbnail: "https://i.ibb.co.com/Vq60SSj/4.jpg",
    description: "Donation goods package.",
  },
  {
    original: "https://i.ibb.co.com/y04Gp94/5.jpg",
    thumbnail: "https://i.ibb.co.com/y04Gp94/5.jpg",
    description: "Book donation campaign for poor student.",
  },
  {
    original: "https://i.ibb.co.com/8sH6zbP/6.jpg",
    thumbnail: "https://i.ibb.co.com/8sH6zbP/6.jpg",
    description: "Donate food in flood disaster peoples.",
  },
];

const GallerySection = () => {
  return (
    <div className="container mx-auto my-8 p-4 rounded-md text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Donation and Humanitarian Works Gallery
      </h2>
      <p className="text-sm md:text-base mb-6 px-[30%]">
        Explore the impactful photos showcasing our donations and humanitarian
        efforts, fostering transparency and trust among our users.
      </p>
      <div className="mx-auto md:max-w-[60vw]">
        <Gallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          additionalClass="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default GallerySection;
