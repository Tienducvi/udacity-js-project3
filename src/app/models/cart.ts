import productModel from "./product";

export default interface cartModel {
    id: number,
    fullName: string,
    address: string,
    creditNumber: string,
    total: number
    products: productModel[]
}