import { json, Router } from "express";
import billing from "../models/billing";
const route=Router();
import BillTransaction from "../models/BillTransaction";  // Import the model

route.post('/billtransaction', async (req, res) => {
  try {
    const data = req.body;
    const { receipt_number, patient_name, client_name, visit_date, visit_id, gross_amount, discount, net_amount, paid_amount, due_amount, mode_of_payment } = data;

    // Check if the receipt number already exists in the database
    const existingTransaction = await BillTransaction.findOne({ receipt_number: receipt_number });

    if (existingTransaction) {
      return res.status(400).json({ message: "Transaction with this receipt number already exists" });
    }

    // Calculate the net amount if not provided (optional)
    const calculatedNetAmount = gross_amount - discount;

    // Create a new bill transaction
    const newTransaction = new BillTransaction({
      receipt_number,
      patient_name,
      client_name,
      visit_date,
      visit_id,
      gross_amount,
      discount,
      net_amount: net_amount || calculatedNetAmount,  // If net_amount is provided, use it, else calculate
      paid_amount,
      due_amount,
      mode_of_payment
    });

    // Save the new transaction to the database
    await newTransaction.save();
    console.log("Transaction added successfully");

    // Respond with a success message
    return res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });

  } catch (error) {
    // Handle any errors
    console.error("Error processing bill transaction:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
