export default function Experience() {
  return (
    <div className="bg-white py-20 px-6 md:px-16">

      
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

        
        <div className="relative">
          
         
          <div className="absolute top-6 left-6 w-full h-full bg-lightgray-200 rounded-2xl"></div>

          
          <div className="absolute top-3 left-3 w-full h-full bg-gray-300 rounded-2xl"></div>

          
          <img
            src="/images/sofa5.png"
            className="relative w-full rounded-2xl shadow-xl hover:scale-105 transition duration-300 object-cover -ml-6"
          />
        </div>

        
        <div>
          <p className="text-orange-500 uppercase tracking-widest text-sm">
            Experiences
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            We Provide You The Best Experience
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            You don’t have to worry about the result because all of these interiors
            are made by people who are professionals in their fields with an elegant
            and luxurious style and with premium quality materials
          </p>

          <button className="mt-5 text-orange-500 font-semibold">
            More Info →
          </button>
        </div>

      </div>

     
      <div className="grid md:grid-cols-2 gap-10 items-center">

        
        <div>
          <p className="text-orange-500 uppercase tracking-widest text-sm">
            Materials
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Very Serious Materials For Making Furniture
          </h2>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>

          <button className="mt-5 text-orange-500 font-semibold">
            More Info →
          </button>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-2 gap-6 h-[380px]">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-3 h-full items-end pr-2 mt-6">

            {/* IMAGE 6 */}
            <div className="w-1/2 aspect-square overflow-hidden rounded-2xl">
              <img
                src="/images/chair6.png"
                className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition duration-300"
              />
            </div>

            {/* IMAGE 8 */}
            <div className="w-1/2 h-[45%] overflow-hidden rounded-2xl">
              <img
                src="/images/chair8.png"
                className="w-full h-full object-cover object-left hover:scale-105 transition duration-300"
              />
            </div>

          </div>

{/* RIGHT BIG IMAGE */}
<div className="relative overflow-hidden rounded-2xl h-[90%] self-center">

  {/* LIGHT ORANGE SHADOW */}
  <div className="absolute top-3 left-3 w-full h-full bg-orange-200 rounded-2xl z-0"></div>

  {/* IMAGE */}
  <img
    src="/images/chair7.png"
    className="relative z-10 w-full h-full object-cover object-right scale-105 hover:scale-110 transition duration-300"
  />

</div>

</div>

      </div>
    </div>
  );
}