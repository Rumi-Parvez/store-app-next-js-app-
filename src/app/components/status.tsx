const Stats = () => {
  return (
   <div className="bg-gradient-to-r  mx-auto from-purple-600 to-purple-500 flex justify-center items-center  ">
     <section className="w-full mx-auto  mt-10">
      <div className=" px-8 py-8 text-white text-center">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Downloads */}
          <div>
            <p className="text-sm">Total Downloads</p>
            <h3 className="text-4xl font-bold mt-1">
              29.6M
            </h3>
            <p className="text-xs mt-2">
              21% More Than Last Month
            </p>
          </div>

          {/* Reviews */}
          <div>
            <p className="text-sm">Total Reviews</p>
            <h3 className="text-4xl font-bold mt-1">
              906K
            </h3>
            <p className="text-xs mt-2">
              46% More Than Last Month
            </p>
          </div>

          {/* Apps */}
          <div>
            <p className="text-sm">Active Apps</p>
            <h3 className="text-4xl font-bold mt-1">
              132+
            </h3>
            <p className="text-xs mt-2">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </section>
   </div>
  );
};

export default Stats;