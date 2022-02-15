const errorDataResult = class {
    constructor(data,message) {
        this.data = data
        this.message = message
        this.success = false
    };
}
module.exports=errorDataResult