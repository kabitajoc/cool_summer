"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Heart, ShoppingCart, User } from "lucide-react";
import SearchBar from "@/components/input";

const Nav: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 w-full bg-white px-2 sm:px-4 md:px-8 py-2 sm:py-3 text-gray-600">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div
          className={cn(
            "logo flex flex-col justify-center items-center text-black font-lobster",
            "text-lg sm:text-xl md:text-2xl"
          )}
        >
          <span className="underline">Euphoria</span>
          <span className="pl-2 sm:pl-3 md:pl-6 text-xs sm:text-sm md:text-base lg:text-lg">
            keep it classy
          </span>
        </div>
      </div>

      <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        <Link
          className={cn(
            "hover:text-black hover:font-bold text-sm sm:text-lg sm:hover:text-xl",
            isActive("/") && "text-black font-bold text-sm sm:text-lg sm:text-xl"
          )}
          href="/"
        >
          Shop
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold text-sm sm:text-lg sm:hover:text-xl",
            isActive("/menswear") && "text-black font-bold text-sm sm:text-lg sm:text-xl"
          )}
          href="/menswear"
        >
          Men
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold text-sm sm:text-lg sm:hover:text-xl",
            isActive("/womenswear") && "text-black font-bold text-sm sm:text-lg sm:text-xl"
          )}
          href="/womenswear"
        >
          Women
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold text-sm sm:text-lg sm:hover:text-xl",
            isActive("/singleproduct") && "text-black font-bold text-sm sm:text-lg sm:text-xl"
          )}
          href="/singleproduct"
        >
          Combos
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold text-sm sm:text-lg sm:hover:text-xl",
            isActive("/joggers") && "text-black font-bold text-sm sm:text-lg sm:text-xl"
          )}
          href="/joggers"
        >
          Joggers
        </Link>
      </ul>

      <div className="hidden sm:block"> {/* Hide search bar on smaller screens */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <div className="nav-icons flex gap-1 sm:gap-2 md:gap-4">
        <Link
          href="/wishlist"
          className={cn(
            "favorite-icon icon flex justify-center items-center h-6 sm:h-8 md:h-10 hover:bg-violet-700 bg-slate-100 rounded px-1 sm:px-2 md:px-3",
            isActive("/wishlist") && "bg-violet-700 text-white"
          )}
        >
          <Heart className="hover:fill-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
        <Link
          href="/profile"
          className={cn(
            "user-icon icon flex justify-center items-center h-6 sm:h-8 md:h-10 hover:bg-violet-700 bg-slate-100 rounded px-1 sm:px-2 md:px-3",
            isActive("/profile") && "bg-violet-700 text-white"
          )}
        >
          <User className="hover:fill-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
        <Link
          href="/addtocart"
          className={cn(
            "cart-icon icon flex justify-center items-center h-6 sm:h-8 md:h-10 bg-slate-100 hover:bg-violet-700 hover:fill-white rounded px-1 sm:px-2 md:px-3",
            isActive("/addtocart") && "bg-violet-700 text-white"
          )}
        >
          <ShoppingCart className="hover:fill-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
