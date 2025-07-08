import img_1 from "../../assets/1.png"
const Slider_one = () => {
  return (
    <div>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img_1} className="w-full h-[100vh] object-cover" alt="Library Slide" />
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] p-5">
          <div className="space-y-5 ml-5 text-center md:text-left max-w-full md:max-w-[50%]">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Unlock Knowledge, <br /> Empower Your Mind
            </h1>
            <div>
              <button className="bg-[#004A99] text-white border-[#004A99] px-10 py-3 rounded-md font-semibold">
                Browse Library
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider_one;
