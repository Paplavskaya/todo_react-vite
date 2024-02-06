import { ProductInCart } from "../../../../common/models/ProductInCart"
import { useNavigate } from "react-router-dom";
import { Button, Modal, notification } from 'antd';
import ButtonGroup from "antd/es/button/button-group";
import { MinusOutlined, PlusOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

type CartProductProps = {
    product: ProductInCart,
    deleteProduct: (productId: number) => void,
    increaseCount: (productId: number) => void,
    declineCount: (productId: number) => void,
}

const { confirm } = Modal;

export const CartProduct = ({product, deleteProduct, increaseCount, declineCount}:CartProductProps) => {
    const navigete = useNavigate();

    const increase = (id: number) => {
        increaseCount(id);
    };

    const decline = (id: number) => {
        declineCount(id);
    };

    const hendleProductClick = () => {
        navigete(`/catalog/${product.id}`)
    }

    const hendleDeleteProduct = (id: number) => {
        confirm({
            title: 'Вы действительно хотите удалить данный товар?',
            icon: <ExclamationCircleFilled />,
            content: 'Удаление ...',
            okText: 'Удалить',
            cancelText: 'Закрыть',
            onOk() {
                deleteProduct(id);
                notification.success({
                    message: `${product.title} удален из корзины`,
                    duration: 1
                })
            },
            onCancel() {},
        });
    }

    return <div className="cart__item">
                <div className="cart__item__info"  onClick={hendleProductClick}>
                    <img className="cart__item__img" src={product.thumbnail}/>
                    <h2 className="cart__item__title">{product.title}</h2>
                    <div className="cart__item__brand" >{product.brand}</div>
                </div>
                <ButtonGroup className="cart__item__btns">
                    <Button onClick={() => decline(product.id)} icon={<MinusOutlined />} />
                    <Button>{product.count}</Button>
                    <Button onClick={() => increase(product.id)} icon={<PlusOutlined />} />
                </ButtonGroup>
                <div className="cart__item__sum">{product.count*product.price} y.e</div>
                <Button icon={<DeleteOutlined />}
                    className="cart__item__delete"
                    onClick={() => hendleDeleteProduct(product.id)}
                    style={{
                        fontSize: '14px'
                    }}>
                        Удалить
                </Button>
            </div> 
}