import { FC } from 'react';

interface Props {
    id: number
    name: string
    price: number
    detail: string
    thumbnail: string
}

const ItemCard: FC<Props> = (props) => {

    const handleOnBuy = (e) => {
        const cart = localStorage.getItem("cart")
        if (cart == null) {
            localStorage.setItem("cart", JSON.stringify([{ id: props.id, amount: 1 }]))
            return
        }
        const cartItems = JSON.parse(cart) as Array<{id: number, amount: number}>
        const targetIndex = cartItems.findIndex(i => i.id === props.id)
        if (targetIndex != -1) cartItems[targetIndex].amount++
        else cartItems.push({id: props.id, amount: 1})
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    return (<>
        <div style={ styles.container }>
            <div>
                <h2 style={ styles.name }>{ props.name }</h2>
                <p>detalle del plato</p>
                <p>${ props.price }</p>
                <button onClick={ handleOnBuy }>Add to Cart</button>
            </div>
            <div style={ styles.imageContainer }>
                <img src={ props.thumbnail } alt="plate image" style={ styles.img }/>
            </div>
        </div>
    </>);
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: '#DFF',
        padding: 10,
        marginTop: 10,
        borderRadius: 15
    },
    name: { margin: 0 },
    imageContainer: { alignSelf: "center" },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10
    }
}

export default ItemCard;
