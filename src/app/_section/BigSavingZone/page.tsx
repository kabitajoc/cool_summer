import { motion } from "framer-motion";
import Image from "next/image";
import Saving1 from "@/assets/HomeImages/Bigsavingzone1.png";
import Saving2 from "@/assets/HomeImages/Bigsavingzone2.png";
import Saving3 from "@/assets/HomeImages/Bigsavingzone3.png";
import Saving4 from "@/assets/HomeImages/BigSavingZone4.png";
import Saving5 from "@/assets/HomeImages/BigSavingZone5.png";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const SavingZone = [
  {
    id: 1,
    image: Saving1,
    title: "Hawaiian Shirts",
    description: "Dress up in summer vibe",
    off: "UPTO 50% OFF",
    textPosition: "left-6 top-10",
    textColor: "text-white",
  },
  {
    id: 2,
    image: Saving2,
    title: "Printed T-Shirt",
    description: "New Designs Every Week",
    off: "UPTO 40% OFF",
    textPosition: "right-1 top-10",
    textColor: "text-black",
  },
  {
    id: 3,
    image: Saving3,
    title: "Cargo Joggers",
    description: "Move with style & comfort",
    off: "UPTO 50% OFF",
    textPosition: "right-1 bottom-10",
    textColor: "text-gray-800",
  },
  {
    id: 4,
    image: Saving4,
    title: "Urban Shirts",
    description: "Live In Comfort",
    off: "FLAT 60% OFF",
    textPosition: "right-10 top-2",
    textColor: "text-gray-600",
  },
  {
    id: 5,
    image: Saving5,
    title: "Oversized T-Shirts",
    description: "Street Style Icon",
    off: "FLAT 60% OFF",
    textPosition: "right-10 top-10",
    textColor: "text-black",
  },
];

const BigSavingZone = () => {
  return (
    <div className="px-6 py-10">
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Big Saving Zone
      </h3>
      <div className="saving-zone grid gap-6 lg:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SavingZone.slice(0, 3).map((saving) => (
            <motion.div
              key={saving.id}
              className="saving-card relative bg-white rounded-lg overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={saving.image}
                alt={saving.title}
                className="w-full h-auto"
              />
              <div
                className={`saving-card-text absolute ${saving.textPosition} p-6 ${saving.textColor}`}
              >
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold leading-tight">
                    {saving.title.split(" ").map((word, index) => (
                      <span key={index}>
                        {word}
                        {index !== saving.title.split(" ").length - 1 && <br />}
                      </span>
                    ))}
                  </h4>
                  <p>{saving.description}</p>
                  <h4>{saving.off}</h4>
                  <ArrowDownToLine />
                  <Button>Shop Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {SavingZone.slice(3).map((saving) => (
            <motion.div
              key={saving.id}
              className="saving-card relative bg-white rounded-lg overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={saving.image}
                alt={saving.title}
                className="w-full h-auto"
              />
              <div
                className={`saving-card-text absolute ${saving.textPosition} p-6 ${saving.textColor}`}
              >
                <div className="space-y-3">
                  <h4 className="text-2xl font-bold leading-tight">
                    {saving.title.split(" ").map((word, index) => (
                      <span key={index}>
                        {word}
                        {index !== saving.title.split(" ").length - 1 && <br />}
                      </span>
                    ))}
                  </h4>
                  <p>{saving.description}</p>
                  <h4>{saving.off}</h4>
                  <ArrowDownToLine />
                  <Button>Shop Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BigSavingZone;
