import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-6 sm:p-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-3">Need Help</h5>
            <ul>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Track Order
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Returns & Refunds
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  FAQ's
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-3">Company</h5>
            <ul>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Euphoria Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Euphoriastan
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Collaboration
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-3">More Info</h5>
            <ul>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h5 className="text-lg font-bold mb-3">Location</h5>
            <ul>
              <li className="mb-2">
                <Link
                  href="mailto:support@euphoria.in"
                  className="text-gray-400 hover:text-white"
                >
                  support@euphoria.in
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Eklingpura Chouraha, Ahmedabad Main Road
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-gray-400 hover:text-white">
                  (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Linkedin />
            </Link>
          </div>

          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
              >
                <path
                  d="M0.670654 33.3127V0.336426L30.3224 16.3528L0.670654 33.3127Z"
                  fill="#5CA9B3"
                />
                <path
                  d="M0.670654 0.336426L21.6515 21.3172L30.3224 16.3528L0.670654 0.336426Z"
                  fill="#C8DB9B"
                />
                <path
                  d="M21.4718 11.5679L0.670654 33.3125L30.3224 16.3526L21.4718 11.5679Z"
                  fill="#AC5067"
                />
                <path
                  d="M21.6517 21.317L30.3225 16.3526L21.4719 11.5679L16.7996 16.4649L21.6517 21.317Z"
                  fill="#F4A676"
                />
              </svg>
              <p className="text-gray-400 text-sm">
                Android app on <br />
                Google Play
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="33"
                viewBox="0 0 22 33"
                fill="none"
              >
                <path
                  d="M18.9334 0.931152H3.02932C1.72644 0.931152 0.670654 1.9869 0.670654 3.28978V30.2009C0.670654 31.5038 1.72644 32.5596 3.02932 32.5596H18.9334C20.2363 32.5596 21.2921 31.5038 21.2921 30.2009V3.28978C21.2921 2.00937 20.2138 0.931152 18.9334 0.931152Z"
                  fill="white"
                />
                <path
                  d="M20.1466 4.72754H1.79395V26.9214H20.1466V4.72754Z"
                  fill="#404040"
                />
                <path
                  d="M14.7328 2.34619H7.20758C6.91556 2.34619 6.646 2.59329 6.646 2.90778C6.646 3.22226 6.89309 3.46936 7.20758 3.46936H14.7328C15.0249 3.46936 15.2944 3.22226 15.2944 2.90778C15.2944 2.61575 15.0473 2.34619 14.7328 2.34619Z"
                  fill="#6639A6"
                />
                <path
                  d="M9.18457 29.5944C9.18457 28.606 9.99326 27.7749 10.9816 27.7749C11.97 27.7749 12.8012 28.5836 12.8012 29.5944C12.8012 30.5828 11.9925 31.3915 10.9816 31.3915C9.99326 31.4139 9.18457 30.6053 9.18457 29.5944Z"
                  fill="#6639A6"
                />
              </svg>
              <p className="text-gray-400 text-sm">
                Download on the <br />
                App Store
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between border-t border-gray-700 mt-6 pt-6">
          <h5 className="text-lg font-bold mb-3 sm:mb-0">Popular Categories</h5>

          <span className="text-gray-400 cursor-pointer">▼</span>
        </div>

        <div className="text-center text-gray-400 border-t border-gray-700 mt-6 pt-6">
          © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
