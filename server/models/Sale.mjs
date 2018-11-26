import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// Declare Schema
const SaleSchema = new Schema(
  {
    // _id: ObjectId,
    dateTime: { type: String },
    rate: { type: String },
    value: { type: String },
  },
  { timestamps: true },
);

// Declare Model to mongoose with Schema
// Export Model to be used in Node
export default mongoose.model('Sale', SaleSchema);
