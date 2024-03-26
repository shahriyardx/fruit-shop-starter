const Banner = () => {
  return (
    <div className="container mx-auto text-white px-10">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.8)), url(/images/banner.jpg)",
        }}
        className="w-full bg-no-repeat bg-cover aspect-video rounded-2xl flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-extrabold">Fruit Shop</h1>
        <p className="max-w-[70ch] text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde
          nihil at velit fugit rerum architecto accusamus, placeat, eos magni
          incidunt veniam a ex cupiditate, eveniet veritatis quos necessitatibus
          ab!
        </p>

        <button className="px-3 py-2 bg-indigo-500 rounded-md text-white text-lg mt-5">
          Buy Fruits
        </button>
      </div>
    </div>
  );
};

export default Banner;
