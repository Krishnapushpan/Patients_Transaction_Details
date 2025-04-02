import React, { useState } from "react";
import Navbar from '../components/navbar'
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar, { defaultMenuItems } from "../components/sidebar";


const BillTransactionForm = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar State
    const [formData, setFormData] = useState({
        receipt_number: "",
        patient_name: "",
        client_name: "",
        visit_date: "",
        visit_id: "",
        gross_amount: "",
        discount: "",
        net_amount: "",
        paid_amount: "",
        due_amount: "",
        mode_of_payment: "cash"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/billtransaction`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Transaction added successfully!");
                navigate("/");
                setFormData({
                    receipt_number: "",
                    patient_name: "",
                    client_name: "",
                    visit_date: "",
                    visit_id: "",
                    gross_amount: "",
                    discount: "",
                    net_amount: "",
                    paid_amount: "",
                    due_amount: "",
                    mode_of_payment: "cash"
                });
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (<>
        {/* Navbar */}  
           {/* Sidebar */}
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
        menuItems={defaultMenuItems}
        toggleMenuItem={() => {}} 
        handleMenuItemClick={() => {}} 
      />
        <Navbar setSidebarOpen={setSidebarOpen} />
        <form onSubmit={handleSubmit} className="w-[800px] mx-auto p-6 mt-16 mb-24 border border-gray-300 rounded-lg shadow-lg bg-white">
            <p className="text-2xl font-bold">Billing Transaction Form</p>
            <div className="flex ">
                <div className="m-[50px]">
                    <label className="block text-gray-700 font-medium">Receipt Number</label>
                    <input type="text" name="receipt_number" value={formData.receipt_number} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Patient Name</label>
                    <input type="text" name="patient_name" value={formData.patient_name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Client Name</label>
                    <input type="text" name="client_name" value={formData.client_name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Visit Date</label>
                    <input type="date" name="visit_date" value={formData.visit_date} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Visit ID</label>
                    <input type="text" name="visit_id" value={formData.visit_id} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Gross Amount</label>
                    <input type="number" name="gross_amount" value={formData.gross_amount} onChange={handleChange} step="0.01" required className="w-full p-2 border border-gray-300 rounded mb-3" />
                </div>
                <div className="m-[50px]">
                    <label className="block text-gray-700 font-medium">Discount</label>
                    <input type="number" name="discount" value={formData.discount} onChange={handleChange} step="0.01" className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Net Amount</label>
                    <input type="number" name="net_amount" value={formData.net_amount} onChange={handleChange} step="0.01" required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Paid Amount</label>
                    <input type="number" name="paid_amount" value={formData.paid_amount} onChange={handleChange} step="0.01" required className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Due Amount</label>
                    <input type="number" name="due_amount" value={formData.due_amount} onChange={handleChange} step="0.01" className="w-full p-2 border border-gray-300 rounded mb-3" />
                    
                    <label className="block text-gray-700 font-medium">Mode of Payment</label>
                    <select name="mode_of_payment" value={formData.mode_of_payment} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-3">
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="online">Online</option>
                    </select>
                    
                    <button type="submit" className="w-full mt-3 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </form>
        </>
    );
};

export default BillTransactionForm;
