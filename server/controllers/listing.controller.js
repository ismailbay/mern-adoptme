import Listing from "../models/listing.model.js";

export const createListing = async (req, res, next) => {
  try {
    // TODO: add validations
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const listings = await Listing.find();
    return res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    return res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  try {
    // TODO: add validations
    const updated = await Listing.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  // TODO: add validations
  try {
    await Listing.findByIdAndDelete(req.params.id);
    return res.status(200).json(`Listing ${req.params.id} has been deleted.`);
  } catch (error) {
    next(error);
  }
};
