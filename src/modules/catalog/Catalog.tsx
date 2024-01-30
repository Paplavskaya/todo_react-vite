import { Route, Routes } from "react-router-dom"
import { Products } from "./Products"
import { ProductPage } from "./ProductPage"
import './Catalog.css'
import { Category } from "./Category"

export const Catalog = () => {
    return <>
        <Routes>
            <Route index element={<Products/>} />
            <Route path="/:productId" element={<ProductPage />} />
            <Route path="/category/:categoryName" element={<Category />} />
        </Routes>
    </>
}
