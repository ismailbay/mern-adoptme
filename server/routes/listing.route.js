import express from "express";
import {
  createListing,
  deleteListing,
  getListing,
  getListings,
  updateListing,
} from "../controllers/listing.controller.js";

const router = express.Router();

router.post("/", createListing);
router.get("/", getListings);
router.get("/:id", getListing);
router.put("/:id", updateListing);
router.delete("/:id", deleteListing);

export default router;
