import Validation from "./Validation";
import Joi from "joi";
import { Service } from "typedi";
import { FileArray } from "express-fileupload";
import ValidationError from "../errors/ValidationError";

@Service()
export default class ProductValidationService extends Validation {

    getProduct(data: { id: string }) {

        const schema = Joi.object({
            id: Joi.string().required()
        })

        this.validate(schema, data)
        return { id: Number(data.id) }
    }

    deleteProduct(data: { id: string }) {

        const schema = Joi.object({
            id: Joi.string().required()
        })

        this.validate(schema, data)
        return { id: Number(data.id) }
    }

    importProducts(data: { files: FileArray | undefined }) {

        if (!data.files || !data.files.csv)
            throw new ValidationError("CSV File is missing")

        if (data.files.csv instanceof Array)
            throw new ValidationError("Single file is expecting")

        return { file: data.files.csv }
    }
}