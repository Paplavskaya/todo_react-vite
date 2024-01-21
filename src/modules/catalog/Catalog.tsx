import { Route, Routes } from "react-router-dom"
import { Products } from "./Products"
import { ProductPage } from "./ProductPage"
import './Catalog.css'
import { Category } from "./Category"
import { useEffect, useState } from "react"
import { ProductItem } from "./models/ProductItem"
import { ProductsData } from "./Products/models/ProductsData"

export const Catalog = () => {
    const [products, setProducts] = useState<ProductItem[]>([]);
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then((data: ProductsData)=> {
            setProducts(data.products)
        })
    }, [])

    // const onChangeProducts = (newProducts: ProductItem[]) => {
    //     setProducts(newProducts)
    // }

    return <>
        <Routes>
            <Route index element={<Products products={products}/>} />
            <Route path="/:productId" element={<ProductPage />} />
            <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
    </>
        
        
}
