import Image from "next/image";
import SimilarImage from "@/assets/HomeImages/Rectangle 25 (2).png";
import SimilarImage1 from "@/assets/HomeImages/Rectangle 25 (4).png";
import SimilarImage2 from "@/assets/HomeImages/Rectangle 25 (6).png";
import SimilarImage3 from "@/assets/HomeImages/Rectangle 25 (8).png";
import SimilarImage4 from "@/assets/HomeImages/Rectangle 25 (9).png";
import SimilarImage5 from "@/assets/HomeImages/Rectangle 25 (10).png";
import SimilarImage6 from "@/assets/HomeImages/newArrival1.png";
import SimilarImage7 from "@/assets/HomeImages/newArrival2.png";
import SimilarImage8 from "@/assets/HomeImages/newArrival3.png";

function SimilarProducts() {
  const products = [
    { name: "White T-Shirt", price: "$20.00", imgSrc: SimilarImage6 },
    {
      name: "Dark Green Sweatshirt",
      price: "$35.00",
      imgSrc: SimilarImage,
    },
    {
      name: "Lavender Sweatshirt",
      price: "$30.00",
      imgSrc: SimilarImage1,
    },
    { name: "Urban Jacket", price: "$45.00", imgSrc: SimilarImage8 },
    {
      name: "Plain White T-Shirt",
      price: "$15.00",
      imgSrc: SimilarImage2,
    },
    { name: "Check Shirt", price: "$25.00", imgSrc: SimilarImage4 },
    {
      name: "Casual Printed Shirt",
      price: "$22.00",
      imgSrc: SimilarImage3,
    },
    { name: "Denim Blue Shirt", price: "$28.00", imgSrc: SimilarImage5 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <Image
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <span className="text-gray-700">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SimilarProducts;
