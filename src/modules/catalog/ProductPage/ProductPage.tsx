import { useEffect, useState } from 'react'
import './ProductPage.css'
import { ProductItem } from '../models/ProductItem'
import { Link, useParams } from 'react-router-dom';

export const ProductPage = () => {    
    const [product, setProduct] = useState<ProductItem>();
    const {productId} = useParams();

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json())
        .then((data: ProductItem)=> {
            setProduct(data)
        })
    }, [productId])

    return <div className='conteiner'>
                <div className='navigation'>
                    <Link to={'/'}>Главная / </Link>
                    <Link to={'/catalog'}>Каталог / </Link>
                </div>
                {product && <div className='product__info'>
                                <h2 className="product__title">{product.title} <sup className="rating">Рейтинг: {product.rating}</sup></h2>
                                <img className="product__img" src={product.thumbnail}/>
                                <div className="product__price"><span className='product__span'>Цена: </span>{product.price}</div>
                                <div className="product__brand"><span className='product__span'>Бренд: </span>{product.brand}</div>
                                <div className="product__description">{product.description}</div>
                                <div className="product__category"><span className='product__span'>Категория: </span>{product.category}</div>
                                <button className="product__add__btn add__btn">В корзину</button>
                            </div>
                }
            </div>
}