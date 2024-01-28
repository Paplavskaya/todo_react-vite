import { makeAutoObservable, runInAction } from "mobx";
import { ProductItem } from "../../models/ProductItem";

export class ProductPageStores {

    productDataState: ProductItem | undefined = undefined;
    
    constructor() {
        makeAutoObservable(this)
    }

    loadProduct = async (productId: string) => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${productId}`);
            if(response.status === 200) {
                const data: ProductItem = await response.json();
                runInAction(() => {this.productDataState = data})
            }

        } catch (error) {
            console.log(error)
        }
    }
}