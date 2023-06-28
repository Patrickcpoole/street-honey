import React from "react";

const SizeTable = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2 border-b border-gray-300 font-medium text-left">
            <u>Size</u>
          </th>
          <th className="py-2 border-b border-gray-300 font-medium text-center bg-gray-200">
            <u>CANVAS SIZE</u>
          </th>
          <th className="py-2 border-b border-gray-300 font-medium text-center">
            3:2 sizing (35mm)
          </th>
          <th className="py-2 border-b border-gray-300 font-medium text-center">
            4:3 sizing (645)
          </th>
          <th className="py-2 border-b border-gray-300 font-medium  text-center">
            4:5 sizing (6x7)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 border-b border-gray-300 ">Small</td>
          <td className="py-2 border-b border-gray-300 bg-gray-200 text-center">8&quot; x 10&quot;</td>
          <td className="py-2 border-b border-gray-300 text-center">6 x 9</td>
          <td className="py-2 border-b border-gray-300 text-center">6.75 x 9</td>
          <td className="py-2 border-b border-gray-300 text-center">7.2 x 9</td>
        </tr>
        <tr>
          <td className="py-2 border-b border-gray-300 ">Medium</td>
          <td className="py-2 border-b border-gray-300 bg-gray-200 text-center">12&quot; x 15&quot;</td>
          <td className="py-2 border-b border-gray-300 text-center">9.33 x 14</td>
          <td className="py-2 border-b border-gray-300 text-center">10.5 x 14</td>
          <td className="py-2 border-b border-gray-300 text-center">11.2 x 14</td>
        </tr>
        <tr>
          <td className="py-2 border-b border-gray-300">Large</td>
          <td className="py-2 border-b border-gray-300 bg-gray-200 text-center">16&quot; x 20&quot;</td>
          <td className="py-2 border-b border-gray-300 text-center">12.67 x 19</td>
          <td className="py-2 border-b border-gray-300 text-center">14.25 x 19</td>
          <td className="py-2 border-b border-gray-300 text-center">15.2 x 19</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className="py-2 border-b border-gray-300 font-medium text-left">
            <u>Size</u>
          </th>
          <th className="py-2 border-b border-gray-300 font-medium bg-gray-200 text-center">
            <u>CANVAS SIZE</u>
          </th>
          <th className="py-2 border-b border-gray-300 font-medium text-center ">
            1:1 sizing (6x6)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 border-b border-gray-300">Small</td>
          <td className="py-2 border-b border-gray-300 bg-gray-200 text-center">8&quot; x 8&quot;</td>
          <td className="py-2 border-b border-gray-300 text-center">7 x 7</td>
        </tr>
        <tr>
          <td className="py-2 border-b border-gray-300">Medium</td>
          <td className="py-2 border-b border-gray-300 bg-gray-200 text-center">12&quot; x 12&quot;</td>
          <td className="py-2 border-b border-gray-300 text-center">11 x 11</td>
        </tr>
        <tr>
          <td className="py-2 border-b border-gray-300">Large</td>
          <td className="py-2 border-b border-gray-300 bg-gray-200 text-center">16&quot; x 16&quot;</td>
          <td className="py-2 border-b border-gray-300 text-center">15 x 15</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SizeTable;
