export default class KutyaModel{
    #list=[];
    constructor(){
        this.#list=[];
    }
    getList(){
        return[...this.#list];
    }
}