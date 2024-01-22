import './Products.css'
import { ProductItem } from '../models/ProductItem'
import { Link, useNavigate } from 'react-router-dom'

type ProductProps = {
    products: ProductItem[];
}

export const Products = ({products,}: ProductProps) => {
    const navigete = useNavigate();
    const navigeteCategory = useNavigate();

    const categoryMapper = products.map((product: ProductItem) => {
        const {category} = product
        return category
    })

    const categoryFilter = categoryMapper.filter((item, index) => categoryMapper.indexOf(item) === index)

    return <div className='conteiner'>
                
                <div className='navigation'>
                    <Link to={'/'}>Главная / </Link>
                </div>

                <div className="product__category">
                    {categoryFilter.length !== 0 && categoryFilter.map((category) => {

                        const hendleCategoryClick = () => {
                                navigeteCategory(`/catalog/category/${category}`)
                        }
                       
                        return <div className="category__item" key={category} onClick={hendleCategoryClick}>
                                      {category}
                                    </div>
                        })
                    }
                </div>

                <div className="product__items">
                    {products.length !== 0 && products.map((product) => {
                   
                        const hendleProductClick = () => {
                            navigete(`/catalog/${product.id}`)
                        }

                        return <div className='product__item'key={product.id}>

                                    <img src={product.thumbnail} className='product__item__img'/>
                                    <div className="product__item__price"  onClick={hendleProductClick}  ><span className='product__span'>Цена: </span>{product.price}</div>
                                    <h2 className="product__item__title"  onClick={hendleProductClick}  >{product.title}</h2>
                                    <div className="product__item__brand" onClick={hendleProductClick}  ><span className='product__span'>Бренд: </span>{product.brand}</div>
                                    <div className="product__item__category"><span className='product__span'>Категория: </span>{product.category}</div>
                                    <div className="product__item__rating"><span className='product__span'>Рейтинг: </span>{product.rating}</div>
                                    <button className="product__item__btn add__btn">В корзину</button>

                                </div> 
                    })}
                </div>

            </div>
}