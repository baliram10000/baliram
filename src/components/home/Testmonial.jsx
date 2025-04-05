import React, { useState, useEffect, useRef } from "react";
import { TfiQuoteRight } from "react-icons/tfi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    text: "Amazing experience! Great service and very friendly staff.",
    name: "Prabhat Kumar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80",
    customerImage: "https://images.unsplash.com/photo-1695679958326-918405eacb70?q=80"
  },
  {
    text: "Amazing experience! Great service and very friendly staff.",
    name: "Sahil Kumar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80",
    customerImage: "https://images.unsplash.com/photo-1695679958326-918405eacb70?q=80"
  },
  {
    text: "Amazing experience! Great service and very friendly staff.",
    name: "Kunal Kumar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80",
    customerImage: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    text: "Amazing experience! Great service and very friendly staff.",
    name: "Golu Kumar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80",
    customerImage: "https://images.unsplash.com/photo-1635274605638-d44babc08a4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // "next" or "prev"
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  const handlePrevClick = () => {
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }, 300);
  };

  const handleNextClick = () => {
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 300);
  };

  return (
    <div className="mx-4 lg:mx-20 px-4 md:px-10 lg:px-20 py-10 md:py-20 mt-20 bg-blue-50 rounded-4xl md:rounded-[90px] relative overflow-hidden">
      <div className="flex justify-between">
        <div className="lg:w-1/2">
          <div className="text-3xl md:text-5xl lilita-one-regular">
            Customer <span className="text-blue-500">Testimonials</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-5 text-stone-700 items-end">
          <div
            onClick={handlePrevClick}
            className="border-2 border-stone-500 px-8 py-3 rounded-full cursor-pointer hover:bg-orange-500 transition-all"
          >
            <IoIosArrowBack size={25} />
          </div>
          <div
            onClick={handleNextClick}
            className="border-2 border-stone-500 px-8 py-3 rounded-full cursor-pointer hover:bg-orange-500 transition-all"
          >
            <IoIosArrowForward size={25} />
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="overflow-hidden mt-10 relative">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            direction === "next" ? "translate-x-[-100%]" : "translate-x-[100%]"
          }`}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map(({ text, name, image, customerImage }, index) => (
            <div key={index} className="w-full flex-shrink-0 p-5 flex gap-10 items-center">
              <div className="w-80 aspect-square rounded-4xl overflow-hidden">
                <img src={customerImage} alt="customer" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <TfiQuoteRight size={60} className="text-blue-500" />
                <div className="mt-4 text-stone-700">{text}</div>
                <div className="mt-10 flex gap-5 items-center">
                  <div className="w-16 aspect-square rounded-full overflow-hidden">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg">{name}</div>
                    <div className="text-stone-700">Verified Customer</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
