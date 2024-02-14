import mongoose from "mongoose";

const Species = {
  Cat: Symbol("cat"),
  Dog: Symbol("dog"),
};

const Sex = {
  M: Symbol("male"),
  F: Symbol("female"),
};

const CatBreed = {
  Siamese: Symbol("Siamese"),
  Persian: Symbol("Persian"),
  MaineCoon: Symbol("Maine Coon"),
  Bengal: Symbol("Bengal"),
  Sphynx: Symbol("Sphynx"),
  Ragdoll: Symbol("Ragdoll"),
  BritishShorthair: Symbol("British Shorthair"),
  ScottishFold: Symbol("Scottish Fold"),
  RussianBlue: Symbol("Russian Blue"),
  AmericanShorthair: Symbol("American Shorthair"),
  Domestic: Symbol("Domestic"),
  Mix: Symbol("Mix"),
};

const DogBreed = {
  LabradorRetriever: Symbol("Labrador Retriever"),
  GermanShepherd: Symbol("German Shepherd"),
  GoldenRetriever: Symbol("Golden Retriever"),
  Bulldog: Symbol("Bulldog"),
  Beagle: Symbol("Beagle"),
  Poodle: Symbol("Poodle"),
  Rottweiler: Symbol("Rottweiler"),
  Boxer: Symbol("Boxer"),
  Dachshund: Symbol("Dachshund"),
  SiberianHusky: Symbol("Siberian Husky"),
  Mix: Symbol("Mix"),
};

const listingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    species: {
      type: String,
      enum: Object.keys(Species),
      required: true,
    },
    sex: { type: String, enum: Object.keys(Sex), required: true },
    breed: {
      type: String,
      enum: Object.keys(CatBreed).concat(Object.keys(DogBreed)),
      required: true,
    },
    birthdate: { type: Date, required: true },
    imagesPaths: { type: Array },
    description: { type: String },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
