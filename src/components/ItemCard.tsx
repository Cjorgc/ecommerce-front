import { FC } from 'react';

interface Props {
    name: string
    price: number
    detail: string
    thumbnail: string
}

const ItemCard: FC<Props> = (props) => {

    const handleOnBuy = (e) => {
        console.log(e)
    }

    return (<>
        <div style={ {display: "flex", justifyContent: "space-between", backgroundColor: '#DFF', padding: 10, marginTop: 10} }>
            <div>
                <h2 style={{margin: 0}}>{ props.name }</h2>
                <p>detalle del plato</p>
                <p>${ props.price }</p>
                <button onClick={handleOnBuy}>Add to Cart</button>
            </div>
            <div style={{alignSelf: "center"}}>
                <img src={ props.thumbnail } alt="plate image" style={ {width: 100, height: 100} }/>
            </div>
        </div>
    </>);
};

export default ItemCard;
