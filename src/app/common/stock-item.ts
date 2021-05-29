import { Stock } from "../services/commodity.service";
import { Commodity } from "./commodity";

export class StockItem implements Stock {
    amount: number;
    commodity: Commodity;
    id: number;

    constructor(amout, commodity){
        this.amount = amout;
        this.commodity = {
            id: commodity.id,
            name: commodity.name,
            code: commodity.code,
            price: null,
            unit: null}
    }
}
