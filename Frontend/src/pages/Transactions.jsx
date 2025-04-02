import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Sidebar, { defaultMenuItems } from "../components/sidebar";


const BillTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar State

  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false); // State to track not found status

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return; // Do nothing if search is empty

    try {
      const res = await fetch(`http://localhost:5000/search?receipt_number=${search}`);

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
        setTransactions([]); // Clear transactions
        setNotFound(true); // Mark as not found
        console.error("Error fetching transaction:", errorData);
        return;
      }

      const data = await res.json();
      if (data.length === 0) {
        setTransactions([]); // Clear transactions
        setNotFound(true); // Mark as not found
      } else {
        setTransactions(data); // Update state with transactions
        setNotFound(false); // Reset not found state
      }
    } catch (error) {
      console.error("Error fetching transaction:", error);
      setTransactions([]);
      setNotFound(true);
    }
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:5000/transactionsdetails");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <>
       {/* Sidebar */}
       <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        menuItems={defaultMenuItems}
        toggleMenuItem={() => {}} 
        handleMenuItemClick={() => {}} 
      />
        <Navbar setSidebarOpen={setSidebarOpen} />
        <div className="p-6 ">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search by Receipt Number"
            className="border p-2 w-full max-w-md rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSearch}>
            Search
          </button>
        </div>

        {notFound ? (
          <p className="text-red-500 text-center">Receipt number not found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead className="bg-blue-500 text-white">
                <tr>
                  {[
                    "S.No",
                    "Receipt Number",
                    "Patient Name",
                    "Client Name",
                    "Visit Date",
                    "Visit ID",
                    "Gross Amount",
                    "Discount",
                    "Net Amount",
                    "Paid Amount",
                    "Due Amount",
                    "Mode of Payment",
                  ].map((header, index) => (
                    <th key={index} className="p-2 border">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={txn._id} className="border">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{txn.receipt_number}</td>
                    <td className="p-2 border">{txn.patient_name}</td>
                    <td className="p-2 border">{txn.client_name}</td>
                    <td className="p-2 border">
                      {new Date(txn.visit_date).toLocaleDateString()}
                    </td>
                    <td className="p-2 border">{txn.visit_id}</td>
                    <td className="p-2 border">{txn.gross_amount}</td>
                    <td className="p-2 border">{txn.discount}</td>
                    <td className="p-2 border">{txn.net_amount}</td>
                    <td className="p-2 border">{txn.paid_amount}</td>
                    <td className="p-2 border">{txn.due_amount}</td>
                    <td className="p-2 border capitalize">{txn.mode_of_payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default BillTransactions;
