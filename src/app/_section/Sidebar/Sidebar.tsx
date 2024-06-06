import { Search } from "lucide-react";

import { Select } from "./Select";

const Sidebar = () => {
  return (
    <aside className="w-1/4 p-4 border-r space-y-5 ">
      <h2 className=" border-l-4   border-l-violet-600 text-2xl font-semibold mb-4 px-4">
        Filters
      </h2>

      {/* Search Filter */}
      <div className="mb-4">
        <label className="block font-bold text-gray-700 mb-2">Search</label>
        <div className="flex items-center border rounded-lg p-2">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow outline-none bg-transparent "
          />
        </div>
      </div>
      <Select />

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Category</label>
        <select className="w-full border rounded-lg p-2">
          <option>All Categories</option>
          <option>T-Shirts</option>
          <option>Jackets</option>
          <option>Pants</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price</label>
        <div className="flex items-center space-x-2">
          <input type="range" className="w-full" min="0" max="100" />
          <span>$0 - $100</span>
        </div>
      </div>

      {/* Brands Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Brands</label>
        <div>
          <div>Minimog</div>
          <div>Retrolie</div>
          <div>Brook</div>
          <div>Learts</div>
          <div>Vagabond</div>
          <div>Abby</div>
        </div>
      </div>

      {/* Collections Filter */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Collections</label>
        <div>
          <div>All products</div>
          <div>Best sellers</div>
          <div>New arrivals</div>
          <div>Accessories</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
