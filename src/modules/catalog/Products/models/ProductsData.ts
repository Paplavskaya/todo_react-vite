import { ProductItem } from "../../../../common/models/ProductItem"

export type ProductsData = {
    total: number,
    skip: number,
    limit: number,
    products: ProductItem[],
}