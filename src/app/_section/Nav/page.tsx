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
    <div className="flex justify-between items-center gap-10 w-full bg-white px-8 underline-offset-1 py-3 text-gray-600">
      <div
        className={cn(
          "logo flex flex-col justify-center items-center text-black font-lobster"
        )}
      >
        <span className="underline text-3xl">Euphoria</span>
        <span className="pl-6">keep it classy</span>
      </div>

      <ul className="flex justify-center items-center gap-4">
        <Link
          className={cn(
            "hover:text-black hover:font-bold hover:text-xl",
            isActive("/") && "text-black font-bold text-xl"
          )}
          href="/"
        >
          Shop
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold hover:text-xl",
            isActive("/menswear") && "text-black font-bold text-xl"
          )}
          href="/menswear"
        >
          Men
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold hover:text-xl",
            isActive("/womenswear") && "text-black font-bold text-xl"
          )}
          href="/womenswear"
        >
          Women
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold hover:text-xl",
            isActive("/singleproduct") && "text-black font-bold text-xl"
          )}
          href="/singleproduct"
        >
          Combos
        </Link>
        <Link
          className={cn(
            "hover:text-black hover:font-bold hover:text-xl",
            isActive("/joggers") && "text-black font-bold text-xl"
          )}
          href="/joggers"
        >
          Joggers
        </Link>
      </ul>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="nav-icons flex gap-2">
        <Link
          href="/wishlist"
          className={cn(
            "favorite-icon icon flex justify-center items-center h-10 hover:bg-violet-700 bg-slate-100 rounded px-3",
            isActive("/wishlist") && "bg-violet-700 text-white"
          )}
        >
          <Heart className="hover:fill-white" />
        </Link>
        <Link
          href="/profile"
          className={cn(
            "user-icon icon flex justify-center items-center h-10 hover:bg-violet-700 bg-slate-100 rounded px-3",
            isActive("/profile") && "bg-violet-700 text-white"
          )}
        >
          <User className="hover:fill-white" />
        </Link>
        <Link
          href="/addtocart"
          className={cn(
            "cart-icon icon flex justify-center items-center h-10 bg-slate-100 hover:bg-violet-700 hover:fill-white rounded px-3",
            isActive("/addtocart") && "bg-violet-700 text-white"
          )}
        >
          <ShoppingCart className="hover:fill-white" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
