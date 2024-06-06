import Image from "next/image";
import productImage from "@/assets/HomeImages/Limelight1.png"

function ProductDescription() {
    return (
      <div className="p-6 max-w-3xl mx-auto mt-6">
        <div className="flex">
          <div className="w-1/2">
            <h2 className="text-xl font-bold">Product Description</h2>
            <p className="mt-2 text-gray-700">100% Bio-washed Cotton - makes the fabric extra soft & airy. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provides 3x more comfort. Durable, prevents irritations of rough/harsh tag-less.</p>
            <table className="mt-4 w-full text-left">
              <tbody>
                <tr>
                  <th className="border px-4 py-2">Fabric</th>
                  <td className="border px-4 py-2">Bio-washed Cotton</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Pattern</th>
                  <td className="border px-4 py-2">Printed</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Fit</th>
                  <td className="border px-4 py-2">Regular Fit</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Neck</th>
                  <td className="border px-4 py-2">Round Neck</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Sleeves</th>
                  <td className="border px-4 py-2">Half Sleeves</td>
                </tr>
                <tr>
                  <th className="border px-4 py-2">Style</th>
                  <td className="border px-4 py-2">Casual Wear</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Image src={productImage} alt="Raven Hoodie" className="w-3/4 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    );
  }
export default ProductDescription  