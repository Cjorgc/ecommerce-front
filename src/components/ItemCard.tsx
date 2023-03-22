import { FC } from 'react';
import styled from "styled-components";
import { addOrUpdateItem } from "../services/cart/cartService";

interface Props {
    id: number
    name: string
    price: number
    detail: string
    thumbnail: string
}

const ItemCard: FC<Props> = (props) => {

    const handleOnBuy = () => {
        addOrUpdateItem(props.id)
    }

    return (<>
        <div style={ styles.container }>
            <div>
                <h2 style={ styles.name }>{ props.name }</h2>
                <p>{ props.detail }</p>
                <p>${ props.price }</p>
                <Button onClick={ handleOnBuy }>Add to Cart</Button>
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
        backgroundColor: '#e5c7ce',
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

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #3e8e41
  }
  
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(1px);
  }
`

export default ItemCard;
