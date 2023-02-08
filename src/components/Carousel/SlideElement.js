import Image from "next/image";

export default function SlideElement({ src }) {
  return (
    <div className="flex flex-shrink-0 h-full w-full relative justify-center items-center bg-black">
      <Image className="opacity-40" alt="carousel-image" fill src={src} />
      <div className="absolute whitespace-normal w-3/6">
        <h2 className="text-purple-400 font-bold text-4xl mb-4">
          Product Title
        </h2>
        <p className="text-purple-400 font-medium text-xl">
          <span className="underline">Product Description: </span>Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ducimus temporibus ea
          tempore veniam! Nihil voluptate, accusamus culpa libero veniam et
          quisquam inventore unde nesciunt architecto.
        </p>
        <button
          className={`bg-purple-900 w-1/5 rounded-md mt-4 p-1 text-purple-400 font-semibold
          transition-all duration-200 hover:bg-purple-400 hover:text-purple-900 active:transform 
          active:translate-y-1`}
        >
          View More!
        </button>
      </div>
    </div>
  );
}
