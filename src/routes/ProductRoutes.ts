import * as express from "express";
import ProductControllerHttpWrapper from "../controllers/ProductControllerHttpWrapper";

const router = express.Router();

router.get("/", ProductControllerHttpWrapper.listProducts)
router.get("/:id", ProductControllerHttpWrapper.getProduct)
router.delete("/:id", ProductControllerHttpWrapper.deleteProduct)
router.post("/upload", ProductControllerHttpWrapper.importProducts)

export default router