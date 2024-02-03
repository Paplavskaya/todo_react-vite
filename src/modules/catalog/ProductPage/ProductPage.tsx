import { useEffect, useState } from 'react'
import './ProductPage.css'
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ProductPageStores } from './stores/ProductPageStores';
import { Button, Image, Rate } from 'antd';
import cartStore from '../../../common/stores/CartStore';
import { ProductItem } from '../../../common/models/ProductItem';
import { DeleteOutlined } from '@ant-design/icons';

export const ProductPage = observer(() => {    
    const [store] = useState(()=> new ProductPageStores());
    const {loadProduct, productDataState} = store;
    const {productId} = useParams();
    const {addToCart} = cartStore

    useEffect(()=>{
        if(productId){
            loadProduct(productId)
        }
    }, [productId]);

    const heandleProductCartClick = (product: ProductItem) => {
        addToCart(product)
    }

    return <>
                <div className='navigation'>
                    <Link to={'/'}>Главная / </Link>
                    <Link to={'/catalog'}>Каталог</Link>
                </div>
                {productDataState && <div className='product'>
                                <h2 className="product__title">{productDataState.title} 
                                    <sup className="rating">
                                        <Rate disabled defaultValue={productDataState.rating} />
                                    </sup>
                                </h2>
                                <div className='product__images'>
                                    <Image.PreviewGroup>
                                        {productDataState.images.map((img)=> <Image className='product__img' key={img} src={img} />)}
                                    </Image.PreviewGroup>
                                </div>
                                <img className='product__img__thumbnail' src={productDataState.thumbnail} alt="" />
                                <div className='product__info'>
                                    <div className="product__price"><span className='product__span'>Цена: </span>{productDataState.price} y.e</div>
                                    <div className="product__brand"><span className='product__span'>Бренд: </span>{productDataState.brand}</div>
                                    <div className="product__description">{productDataState.description}</div>
                                    <div className="product__category"><span className='product__span'>Категория: </span>{productDataState.category}</div>
                                </div>
                                <Button 
                                    onClick={()=>{heandleProductCartClick(productDataState)}} 
                                    className="product__add__btn add__btn"
                                    icon={<DeleteOutlined />}>
                                        В корзину
                                </Button>
                            </div>
                }
            </>
})