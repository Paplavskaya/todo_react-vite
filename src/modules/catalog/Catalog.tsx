import { Route, Routes } from "react-router-dom"
import { Products } from "./Products"
import { ProductPage } from "./ProductPage"
import './Catalog.css'

export const Catalog = () => {
    return <>
        <Routes>
            <Route index element={<Products/>} />
            <Route path="/:productId" element={<ProductPage />} />
        </Routes>
    </>
}
