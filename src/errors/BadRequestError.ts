export default class BadRequestError extends Error{
    constructor(public message: string){
        super(message)
    }
}