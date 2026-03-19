import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    image: "/images/test9.png",
    profile: "/images/profile12.png",
    review:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    image: "/images/test10.png",
    profile: "/images/profile13.png",
    review:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang yang terlihat mewah",
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    image: "/images/test11.png",
    profile: "/images/profile14.png",
    review:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      
      {/* Title */}
      <div className="text-center mb-16">
        <p className="text-orange-500 text-sm uppercase tracking-widest">
          Testimonials
        </p>
        <h2 className="text-3xl font-semibold mt-2">
          Our Client Reviews
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center px-6">
        {testimonials.map((item, index) => (
          <div key={index} className="relative w-[320px]">
            
            {/* Background Image with Hover */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt=""
                className="w-full h-[420px] object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* WHITE CARD */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white p-5 rounded-2xl shadow-2xl text-center">
              
              {/* Profile */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <img
                  src={item.profile}
                  alt=""
                  className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                />
              </div>

              <h3 className="mt-8 font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>

              <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                "{item.review}"
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-4 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}