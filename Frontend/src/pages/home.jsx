import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar, { defaultMenuItems } from "../components/sidebar";

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedRider, setSelectedRider] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar State
  const riders = ["John Doe", "Jane Smith", "Alice Johnson"];

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        menuItems={defaultMenuItems}
        toggleMenuItem={() => {}} 
        handleMenuItemClick={() => {}} 
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} />

        {/* Actions */}
        <div className="flex bg-blue-800 text-white p-3 justify-center items-center w-full">
          {/* Buttons Container */}
          <div className="flex space-x-2">
            <button 
              className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700"
              onClick={() => navigate("/billing")}
            >
              Create
            </button>
            <button onClick={() => navigate("/Transaction")} className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Transaction Details
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Print
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Email
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Clear
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Dispatch
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Fetch
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Issues
            </button>
            <button className="px-4 py-2 bg-transparent border border-white hover:bg-blue-700">
              Close
            </button>
          </div>

          {/* Message Container */}
          <div className="ml-4 text-yellow-400 w-[500px] text-sm overflow-hidden">
            <p className="whitespace-nowrap animate-marquee">
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

      </div>
    </div>
  );
}
