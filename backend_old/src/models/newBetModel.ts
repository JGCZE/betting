import mongoose from "mongoose";

const newBetSchema = new mongoose.Schema({
  challanger_name: { type: String, required: true },
  challanger_email: { type: String, required: true },
  rival_name: { type: String, required: true },
  rival_email: { type: String },
  betTitle: { type: String },
  betUrl: { type: String, required: true, unique: true },
  stack: { type: String, required: true },
  deadline: { type: String, required: true },
  visibility: { type: String, enum: ['public', 'private'], required: true },
}, { timestamps: true });

const BetModel = mongoose.model("Bet", newBetSchema);

export default BetModel;
