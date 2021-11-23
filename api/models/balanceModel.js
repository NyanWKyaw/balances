module.exports = class Balance{
    constructor(id,amount){
        this.id = id;
        this.amount = amount;
    }

    toDisplayString(){
        var ds = this.id + " --- " + this.amount;
        console.log(ds);
        return ds;
    }
}