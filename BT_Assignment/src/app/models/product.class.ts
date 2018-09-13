export class Product {
    id: number;
    name: string;
    price: number;
    status: boolean;

    constructor (id: number, name: string, price: number, status: boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = status;
    }
}
