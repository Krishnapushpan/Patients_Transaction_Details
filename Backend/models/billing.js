import mongoose from "mongoose";

const BillTransactionSchema = new mongoose.Schema({
    receipt_number: { type: String, required: true, unique: true },
    patient_name: { type: String, required: true },
    client_name: { type: String, required: true },
    visit_date: { type: Date, required: true },
    visit_id: { type: String, required: true },
    gross_amount: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    net_amount: { type: Number, required: true },
    paid_amount: { type: Number, required: true },
    due_amount: { type: Number, default: 0 },
    mode_of_payment: { type: String, enum: ["cash", "card", "online"], default: "cash" },
}, { timestamps: true });

export default mongoose.model("BillTransaction", BillTransactionSchema);
