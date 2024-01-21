import { ProductItem } from "../../models/ProductItem"

export type ProductsData = {
    total: number,
    skip: number,
    limit: number,
    products: ProductItem[],
}