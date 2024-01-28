import { useEffect, useState } from 'react'
import './ProductPage.css'
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ProductPageStores } from './stores/ProductPageStores';
import { Image } from 'antd';

export const ProductPage = observer(() => {    
    const [store] = useState(()=> new ProductPageStores());
    const {loadProduct, productDataState} = store;
    const {productId} = useParams();

    useEffect(()=>{
        if(productId){
            loadProduct(productId)
        }
    }, [productId])

    return <div className='conteiner'>
                <div className='navigation'>
                    <Link to={'/'}>Главная / </Link>
                    <Link to={'/catalog'}>Каталог</Link>
                </div>
                {productDataState && <div className='product'>
                                <h2 className="product__title">{productDataState.title} <sup className="rating">Рейтинг: {productDataState.rating}</sup></h2>
                                <div className='product__images'>
                                    <Image.PreviewGroup>
                                        {productDataState.images.map((img)=> <Image className='product__img' key={img} src={img} />)}
                                    </Image.PreviewGroup>
                                </div>
                                <img className='product__img__thumbnail' src={productDataState.thumbnail} alt="" />
                                <div className='product__info'>
                                    <div className="product__price"><span className='product__span'>Цена: </span>{productDataState.price}</div>
                                    <div className="product__brand"><span className='product__span'>Бренд: </span>{productDataState.brand}</div>
                                    <div className="product__description">{productDataState.description}</div>
                                    <div className="product__category"><span className='product__span'>Категория: </span>{productDataState.category}</div>
                                </div>
                                <button className="product__add__btn add__btn">В корзину</button>
                            </div>
                }
            </div>
})