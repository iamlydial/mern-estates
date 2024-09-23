import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requires: true,
    },
    description: {
      type: String,
      requires: true,
    },
    address: {
      type: String,
      requires: true,
    },
    regularPrice: {
      type: Number,
      requires: true,
    },
    discountedPrice: {
      type: Number,
      requires: true,
    },
    bathrooms: {
      type: Number,
      requires: true,
    },
    bedrooms: {
      type: Number,
      requires: true,
    },
    furnished: {
      type: Boolean,
      requires: true,
    },
    parking: {
      type: Boolean,
      requires: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
