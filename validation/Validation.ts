import Joi from "joi";
import ValidationError from "../errors/ValidationError";

export default class Validation {

    validate(schema: Joi.ObjectSchema, data: any) {

        const { error } = schema.validate(data);
        if (error)
            throw new ValidationError(error.message)

        return true
    }
}