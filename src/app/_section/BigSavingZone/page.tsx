import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Saving1 from "@/assets/HomeImages/Bigsavingzone1.png";
import Saving2 from "@/assets/HomeImages/Bigsavingzone2.png";
import Saving3 from "@/assets/HomeImages/Bigsavingzone3.png";
import Saving4 from "@/assets/HomeImages/BigSavingZone4.png";
import Saving5 from "@/assets/HomeImages/BigSavingZone5.png";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Saving {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  off: string;
}

interface SavingCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  off: string;
  customClasses: string;
}

const savings: Saving[] = [
  {
    id: 1,
    image: Saving1,
    title: "Hawaiian Shirts",
    description: "Dress up in summer vibe",
    off: "UPTO 50% OFF",
  },
  {
    id: 2,
    image: Saving2,
    title: "Printed T-Shirt",
    description: "New Designs Every Week",
    off: "UPTO 40% OFF",
  },
  {
    id: 3,
    image: Saving3,
    title: "Cargo Joggers",
    description: "Move with style & comfort",
    off: "UPTO 50% OFF",
  },
  {
    id: 4,
    image: Saving4,
    title: "Urban Shirts",
    description: "Live In Comfort",
    off: "FLAT 60% OFF",
  },
  {
    id: 5,
    image: Saving5,
    title: "Oversized T-Shirts",
    description: "Street Style Icon",
    off: "FLAT 60% OFF",
  },
];

const SavingCard= ({
  image,
  title,
  description,
  off,
  customClasses,
}:SavingCardProps) => (
  <motion.div
    className="saving-card relative bg-white rounded-lg overflow-hidden shadow-lg group"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={image} alt={title} className="w-full h-auto" />
    <div className={`saving-card-text absolute p-6 ${customClasses}`}>
      <div className="space-y-3">
        <h4 className="text-2xl font-bold leading-tight">
          {title.split(" ").map((word: string, index: number) => (
            <span key={index}>
              {word}
              {index !== title.split(" ").length - 1 && <br />}
            </span>
          ))}
        </h4>
        <p>{description}</p>
        <h4>{off}</h4>
        <ArrowDownToLine />
        <Button>Shop Now</Button>
      </div>
    </div>
  </motion.div>
);

const BigSavingZone: React.FC = () => {
  return (
    <div className="px-6 py-10">
      <h3 className="text-4xl font-bold mb-10 border-l-4 border-gray-800 pl-4">
        Big Saving Zone
      </h3>
      <div className="saving-zone grid gap-6 lg:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <SavingCard
            key={savings[0].id}
            {...savings[0]}
            customClasses="left-6 top-10 text-white"
          />
          <SavingCard
            key={savings[1].id}
            {...savings[1]}
            customClasses="right-1 top-10 text-black"
          />
          <SavingCard
            key={savings[2].id}
            {...savings[2]}
            customClasses="right-1 bottom-10 text-gray-800"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <SavingCard
            key={savings[3].id}
            {...savings[3]}
            customClasses="right-10 top-2 text-gray-600"
          />
          <SavingCard
            key={savings[4].id}
            {...savings[4]}
            customClasses="right-10 top-10 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default BigSavingZone;
