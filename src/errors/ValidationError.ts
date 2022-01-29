export default class ValidationError {

    public readonly message: string;

    constructor(error: string){
        this.message = error;
    }
}