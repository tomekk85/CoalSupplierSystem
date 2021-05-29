import { Stock } from "../services/commodity.service";
import { Commodity } from "./commodity";

export class CommodityStock extends Commodity {
    amount: number;

    constructor(stock: Stock){
        super();
        this.amount = stock.amount;
        this.code = stock.commodity.code;
        this.id = stock.commodity.id;
        this.name = stock.commodity.name;
        this.price = stock.commodity.price;
        this.unit = stock.commodity.unit;
    }
}
