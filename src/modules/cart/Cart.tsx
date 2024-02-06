import { observer } from "mobx-react-lite"
import cartStore from "../../common/stores/CartStore"
import { CartProduct } from "./components/CartProduct";
import './Cart.css'

export const Cart = observer(() => {
    const {cartState, deleteProduct, increaseCount, declineCount} = cartStore;
    
    const totalCount = cartState.reduce((acc, productInCart) => {
        return acc + productInCart.count
    }, 0)

    const totalSum = cartState.reduce((acc, productInCart) => {
        return acc + productInCart.count*productInCart.price
    }, 0)

    return <div className="cart__wrapper">
                {cartState.length > 0 && cartState.map((cartProduct) => 
                    <CartProduct
                        key={cartProduct.id}
                        product={cartProduct}
                        deleteProduct={deleteProduct}
                        increaseCount={increaseCount}
                        declineCount={declineCount}
                    />
                )}
                <div className="cart__product__total">
                    <div className="total__count">Товары - {totalCount} шт.</div>
                    <div className="total__sum">Итого - {totalSum} y.e</div>
                </div>
            </div>
})