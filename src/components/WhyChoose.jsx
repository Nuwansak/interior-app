export default function WhyChoose() {
  return (
    <div className="py-20 px-6 md:px-16 bg-white">
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Choosing Us
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Luxury facilities
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
            <button className="mt-3 text-yellow-500 text-sm font-medium hover:underline">
  More Info →
</button>
          </div>

          {/* Card 2 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Affordable Price
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              You can get a workspace of the highest quality at an affordable price and still enjoy the facilities.
            </p>
            <button className="mt-3 text-yellow-500 text-sm font-medium hover:underline">
  More Info →
</button>
          </div>

          {/* Card 3 */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Many Choices
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              We provide many unique workspace choices so that you can choose the workspace to your liking.
            </p>
            <button className="mt-3 text-yellow-500 text-sm font-medium hover:underline">
  More Info →
</button>
          </div>

        </div>

      </div>
    </div>
  );
}