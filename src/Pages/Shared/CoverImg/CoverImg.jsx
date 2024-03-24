import { Parallax } from "react-parallax";

const CoverImg = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[500px]">
        <div className="hero-content text-center text-neutral-content bg-opacity-55 bg-gray-900 md:w-5/12 h-[250px]">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-cinzel font-bold uppercase">{title}</h1>
            <p className="mb-5 font-cinzel text-2xl font-semibold">
              Would You Like to Try A Dish?
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
export default CoverImg;
