import './Products.css'
import { Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { ProductsStore } from './stores/ProductsStore';
import { Button, Spin } from 'antd';

export const Products = observer(() => {

    const [store] = useState(()=> new ProductsStore())
    const {loadProducts, productsData, awaiting, loadCategories, allCategories} = store;

    const navigete = useNavigate();

    useEffect(()=>{
        loadCategories()
    },[])

    useEffect(()=>{
        if(allCategories){
            loadProducts()
        }
    },[allCategories])

    const hendleCategoryClick = (selectedCategory: string) => {
        loadProducts(selectedCategory)
    }

    return <>
                <div className='navigation'>
                    <Link to={'/'}>Главная</Link>
                </div>

                <div className="product__category">
                    {allCategories && allCategories.map((category) => 
                            <Button 
                                key={category}
                                onClick={()=>{hendleCategoryClick(category)}}>
                                {category}
                            </Button>
                        )
                    }
                </div>

                <Spin spinning={awaiting}>
                    <div className="product__items">
                        {productsData && productsData.map((product) => {
                            const hendleProductClick = () => {
                                navigete(`/catalog/${product.id}`)
                            }

                            return <div className='product__item'key={product.id}>
                                        <img src={product.thumbnail} onClick={hendleProductClick}  className='product__item__img'/>
                                        <div className="product__item__price"  ><span className='product__span'>Цена: </span>{product.price}</div>
                                        <h2 className="product__item__title"  onClick={hendleProductClick}  >{product.title}</h2>
                                        <div className="product__item__brand" ><span className='product__span'>Бренд: </span>{product.brand}</div>
                                        <div className="product__item__category"><span className='product__span'>Категория: </span>{product.category}</div>
                                        <div className="product__item__rating"><span className='product__span'>Рейтинг: </span>{product.rating}</div>
                                        <button className="product__item__btn add__btn">В корзину</button>
                                    </div> 
                        })}
                    </div>
                </Spin>
            </>
})