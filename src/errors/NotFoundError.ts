export default class NotFoundError extends Error{
    constructor(public message: string){
        super(message)
    }
}