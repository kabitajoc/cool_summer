import { Heart, LogOut, MapPin, Package } from "lucide-react";

function AddAddressPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex space-x-8">
        <aside className="w-1/4">
          <h2 className="text-2xl font-bold mb-4">Hello Jhanvi</h2>
          <p className="text-gray-600 mb-8">Welcome to your account</p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <Package />
              <a href="#" className="text-gray-800">
                My orders
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Heart />
              <a href="#" className="text-gray-800">
                Wishlist
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin />
              <a href="#" className="text-gray-800">
                My info
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <LogOut />
              <a href="#" className="text-gray-800">
                Sign out
              </a>
            </li>
          </ul>
        </aside>
        <main className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">My Info</h2>
          <h3 className="text-xl font-bold mb-4">Add Address</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Country / Region"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Company Name (optional)"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Apt, suite, unit (optional)"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-2 rounded"
              />
              <select className="border p-2 rounded">
                <option>State</option>
              </select>
              <input
                type="text"
                placeholder="Phone"
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border p-2 rounded"
              />
            </div>
            <textarea
              placeholder="Delivery Instruction"
              className="border p-2 rounded w-full"
            ></textarea>
            <div className="flex items-center space-x-4">
              <input type="checkbox" />
              <label>Set as default shipping address</label>
            </div>
            <div className="flex items-center space-x-4">
              <input type="checkbox" />
              <label>Set as default billing address</label>
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>
              <button 
                type="button"
                className="border border-gray-500 text-gray-700 py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default AddAddressPage;
