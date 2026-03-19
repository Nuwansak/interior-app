import { useRef, useState, useEffect } from "react";

export default function Products() {
  const scrollRef = useRef();

  const [products, setProducts] = useState([]); 
  const [activeCategory, setActiveCategory] = useState("chair");
  const [showPopup, setShowPopup] = useState(false);

  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  
 const filteredProducts = products.filter(
  (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
);

  
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  
  const handleAdd = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const categories = ["chair", "beds", "sofa", "lamp"];

  return (
    <section className="py-20 bg-gray-100 text-center relative">

      
      {showPopup && (
        <div className="fixed top-20 right-6 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50">
          Added to cart 🛒
        </div>
      )}

      
      <h2 className="text-3xl font-semibold mb-6">
        Best Selling Product
      </h2>

      
      <div className="flex justify-center mb-12">
        <div className="bg-gray-200 rounded-full px-2 py-1 flex gap-3 text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full transition ${
                activeCategory === cat
                  ? "bg-white shadow font-semibold"
                  : "text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      
      <div className="relative max-w-6xl mx-auto">

       
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-10 hover:scale-110 transition"
        >
          ←
        </button>

        
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow z-10 hover:scale-110 transition"
        >
          →
        </button>

        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar justify-center px-2"
        >
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] bg-white rounded-xl p-5 shadow transition transform hover:-translate-y-2 hover:shadow-xl"
            >

              
              <div className="h-44 flex items-center justify-center overflow-hidden">
                <img
                  src={`/images/${item.image}`} 
                  alt={item.name}
                  className="max-h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              
              <div className="text-left mt-4">
                <p className="text-gray-400 text-sm">{item.category}</p>
                <h3 className="font-semibold">{item.name}</h3>

                <div className="text-yellow-500 text-sm">
                  {"★".repeat(Math.round(item.rating || 5))}
                </div>

                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold">${item.price}</p>

                  <button
                    onClick={handleAdd}
                    className="bg-gray-900 text-white w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      
      <div className="mt-10 text-orange-500 cursor-pointer hover:underline">
        View All →
      </div>
    </section>
  );
}