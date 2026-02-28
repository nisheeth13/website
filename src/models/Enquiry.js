import mongoose from "mongoose";

const { Schema } = mongoose;

const enquirySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);
