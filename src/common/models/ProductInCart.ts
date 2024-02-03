import { ProductItem } from "./ProductItem";

export type ProductInCart = ProductItem & {
    count: number
}