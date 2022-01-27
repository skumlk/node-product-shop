import * as express from "express";
import ProductController from "../controllers/ProductController";

const router = express.Router();

router.get("/", ProductController.listProducts)
router.get("/:id", ProductController.getProduct)
router.delete("/:id", ProductController.deleteProduct)
router.post("/upload", ProductController.importProducts)

export default router