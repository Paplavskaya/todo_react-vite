import { makeAutoObservable, runInAction } from "mobx";
import { ProductsData } from "../../modules/catalog/Products/models/ProductsData";

class ProductsStore {

    productsDataState: ProductsData | undefined = undefined;
    categoriesState: string[] | undefined = undefined;
    awaiting: boolean = false;

    get productsData () {
        return this.productsDataState?.products;
    }

    get allCategories () {
        return this.categoriesState && ['all', ...this.categoriesState]
    }

    get allCategoriesLayout () {
        return this.categoriesState && ['all categories', ...this.categoriesState]
    }

    constructor() {
        makeAutoObservable(this)
    }

    loadCategories = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products/categories');
            if(response.status === 200) {
                const data: string[] = await response.json();
                runInAction(() => {this.categoriesState = data})
            }
        } catch(error) {
            console.log(error)
        }
    }

    loadProducts = async (category?: string) => {
        const url = category && category !== 'all' && category !== 'all categories'? 
                    `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products'

        try{
            runInAction(()=>{this.awaiting = true});
            const response = await fetch(url);
            if(response.status === 200) {
                const data: ProductsData = await response.json();
                runInAction(() => {this.productsDataState = data})
            }

        }catch(error){
            console.log(error)

        }finally {
            runInAction(()=>{this.awaiting = false})
        }
    }
}

const productsStore = new ProductsStore()
export default productsStore