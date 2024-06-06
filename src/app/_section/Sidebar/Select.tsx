import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Select() {
  const styles = [
    "Classic",
    "Casual",
    "Business",
    "Sport",
    "Elegant",
    "Formal (evening)",
  ];
  const colors = [
    { name: "Purple", class: "bg-purple-500" },
    { name: "Black", class: "bg-black" },
    { name: "Red", class: "bg-red-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Navy", class: "bg-blue-800" },
    { name: "White", class: "bg-white border border-gray-300" },
    { name: "Brown", class: "bg-amber-700" },
    { name: "Green", class: "bg-green-500" },
    { name: "Yellow", class: "bg-yellow-500" },
    { name: "Grey", class: "bg-gray-500" },
    { name: "Pink", class: "bg-pink-500" },
    { name: "Blue", class: "bg-blue-500" },
  ];
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"];
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Colors</AccordionTrigger>
        <AccordionContent className=" grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <div key={color.name} className="text-center">
              <div
                className={`w-8 h-8 rounded-full ${color.class}`}
                title={color.name}
              ></div>
              <p className="text-sm mt-1">{color.name}</p>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Sizes</AccordionTrigger>
        <AccordionContent className=" grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <div
              key={size}
              className="text-center p-2 border border-gray-300 rounded cursor-pointer"
            >
              {size}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Styles</AccordionTrigger>
        <AccordionContent>
          {styles.map((style) => (
            <div
              key={style}
              className="flex justify-between items-center cursor-pointer"
            >
              <span>{style}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
