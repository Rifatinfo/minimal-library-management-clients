import img_2 from "../../assets/2.png"

const Slider_two = () => {
  return (
    <div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img_2} className="w-full h-[100vh] object-cover" alt="Library Slide 2" />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-5">
          <div className="space-y-5 ml-5 text-center md:text-left max-w-full md:max-w-[50%]">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Organize. Track. <br /> Borrow Smarter.
            </h1>
            <div>
              <button className="bg-[#004A99] text-white border-[#004A99] px-10 py-3 rounded-md font-semibold">
                Manage Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider_two;
