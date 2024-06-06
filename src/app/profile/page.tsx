import { Edit, LogOut, MapPin, Heart, Package } from "lucide-react";
import Link from "next/link";

function Page() {
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
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span>Your Name: Jhanvi Shah</span>
              <button className="text-blue-500 flex items-center">
                <Edit className="mr-1" /> Change
              </button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>Email Address: jhanvi@gmail.com</span>
              <button className="text-blue-500 flex items-center">
                <Edit className="mr-1" /> Change
              </button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>Phone Number: 0980252445</span>
              <button className="text-blue-500 flex items-center">
                <Edit className="mr-1" /> Change
              </button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span>Password: ••••••••</span>
              <button className="text-blue-500 flex items-center">
                <Edit className="mr-1" /> Change
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <Link href="/profile/address">
              <button className="text-blue-500 mb-4"></button>
              Add New
            </Link>
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-4 rounded-lg">
                <p>Jhanvi Shah</p>
                <p>
                  V42 Pragati nagar Flats, opp jalvi dinser, Near Jain derasar,
                  Kalyanpura road
                </p>
                <div className="mt-4 space-x-2">
                  <button className="text-red-500">Remove</button>
                  <button className="text-gray-500">Edit</button>
                  <button className="text-blue-500">
                    Default billing address
                  </button>
                </div>
              </div>
              <div className="border p-4 rounded-lg">
                <p>Jhanvi Shah</p>
                <p>
                  V42 Pragati nagar Flats, opp jalvi dinser, Near Jain derasar,
                  Kalyanpura road
                </p>
                <div className="mt-4 space-x-2">
                  <button className="text-red-500">Remove</button>
                  <button className="text-gray-500">Edit</button>
                  <button className="text-blue-500">
                    Default shipping address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
