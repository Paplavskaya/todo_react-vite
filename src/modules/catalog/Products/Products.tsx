import './Products.css'
import { Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { useEffect} from 'react';
import productsStore from '../../../common/stores/ProductsStore';
import { Button, Rate, Spin } from 'antd';
import cartStore from '../../../common/stores/CartStore';
import { ProductItem } from '../../../common/models/ProductItem';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Products = observer(() => {
    const {loadProducts, productsData, awaiting, loadCategories, allCategories} = productsStore;
    const {addToCart} = cartStore

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

    const heandleProductCartClick = (product: ProductItem) => {
        addToCart(product)
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
                                        <img src={product.thumbnail}
                                            onClick={hendleProductClick} 
                                            className='product__item__img'/>
                                        <div className="product__rating">
                                                <Rate disabled defaultValue={product.rating} />
                                            </div>
                                        <div className="product__item__price">
                                            <span className='product__span'>Цена: </span>
                                            {product.price} y.e
                                        </div>
                                        <h2 className="product__item__title"  onClick={hendleProductClick}>
                                            {product.title}
                                        </h2>
                                        <div className="product__item__brand" >
                                            <span className='product__span'>Бренд: </span>
                                            {product.brand}
                                        </div>
                                        <div className="product__item__category">
                                            <span className='product__span'>Категория: </span>
                                            {product.category}
                                        </div>
                                        <Button onClick={()=>{heandleProductCartClick(product)}} 
                                                className="product__item__btn add__btn"
                                                shape="circle"
                                                icon={<ShoppingCartOutlined/>}
                                        />
                                    </div> 
                        })}
                    </div>
                </Spin>
            </>
})