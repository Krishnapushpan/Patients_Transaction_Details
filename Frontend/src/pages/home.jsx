import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import List from '../assets/images/list.png'
import Logo from '../assets/images/logo.jpg'
export default function HomePage() {
  const navigate = useNavigate();
  const [selectedRider, setSelectedRider] = useState("");
  const riders = ["John Doe", "Jane Smith", "Alice Johnson"];

  return (
    <div className="h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-blue-900 text-white flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
            <img src={List} className='w-[30px] h-[30px]' alt="" />
            <img src={Logo} className='w-[100px] h-[50px] rounded' alt="" />
          <span className="font-bold text-lg">Oncolab Diagnostics LLC</span>
        </div>
        <div className="flex items-center space-x-6">
          <span>THOMAS</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex bg-blue-800 text-white p-3 justify-center items-center w-full">
  {/* Buttons Container */}
  <div>
  <button 
            className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700"
            onClick={() => navigate("/billing")} // Navigate to billing page
          >
            Create
          </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Save
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Print
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Email
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Clear
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Dispatch
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Fetch
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Issues
  </button>
  <button className="px-4 py-2 bg-transparent border-l border-r border-white hover:bg-blue-700 group-hover:opacity-50 hover:!opacity-100">
    Close
  </button>
  
</div>


  {/* Message Container */}
  <div className="ml-4 text-yellow-400 w-[500px] text-sm overflow-hidden">
  <p className="whitespace-nowrap" style={{ animation: 'marquee 15s linear infinite' }}>
    ****Dear Customer, Please note that there is an outstanding Payment and the last due is 23-3-2025. Kindly make the Payment to be available for our support service****
  </p>
</div>

</div>



      {/* Rider Selection */}
      <div className="p-6 bg-gray-200">
        <label className="text-gray-700 font-semibold">Rider Name:</label>
        <select
          className="ml-2 p-2 border rounded"
          value={selectedRider}
          onChange={(e) => setSelectedRider(e.target.value)}
        >
          <option value="">Select Rider</option>
          {riders.map((rider) => (
            <option key={rider} value={rider}>{rider}</option>
          ))}
        </select>
        <button className="ml-4 px-4 py-2 border rounded hover:bg-gray-300">Refresh</button>
      </div>

      {/* Content Area */}
      <div className="p-6 bg-gray-300 h-80 flex items-center justify-center">
        <p className="text-gray-600">No Data Available</p>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center p-3 text-sm">
        Copyright &copy; 2024. All rights reserved to <span className="font-bold">Caredata Informatics</span>
      </div>
    </div>
  );
}