import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetAllTestimonialQuery } from "../../redux/features/testimonial/testimonialApi";
const Testomonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const { data: testimonials } = useGetAllTestimonialQuery(undefined);
  if (!testimonials) {
    return <p>No testimonials available</p>;
  }

  return (
    <div className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center uppercase">
          <h3 className="text-2xl">Testimonials</h3>
          <h2 className="text-3xl font-extrabold">
            Our top donors, what they say
          </h2>
        </div>
        <div className="mt-5">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial: any) => (
              <figure
                className="bg-white shadow-lg overflow-hidden rotate-1 hover:rotate-0 transition duration-200"
                key={testimonial._id}
              >
                <blockquote className="p-8">
                  <div className="mb-2 text-teal-500">
                    <svg width="45" height="36" className="fill-current">
                      <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                    </svg>
                  </div>
                  <p className="font-bold text-lg">{testimonial.description}</p>
                </blockquote>
                <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-teal-500 to-emerald-500">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full border-4 w-14 h-14 border-white">
                      <img
                        src={testimonial.image}
                        alt="profile"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                    <figcaption className="text-white font-semibold">
                      <div>{testimonial.name}</div>
                      <div className="opacity-70">${testimonial.amount} M</div>
                    </figcaption>
                  </div>
                  <div className="text-white/50 hover:text-white/80 transition duration-200">
                    <svg className="w-9 fill-current" viewBox="0 0 24 24">
                      <path
                        d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
