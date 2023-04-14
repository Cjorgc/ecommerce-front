import { FC, useEffect, useState } from 'react'
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import {
    getItems,
    getItemsFromLocalStorage,
    getItemsFromQuery,
    ProductWithQuantity
} from "../../services/cart/cartService";


const CartPage: FC = () => {
    const [products, setProducts] = useState<ProductWithQuantity[]>([])
    const [ params, setParams ] = useSearchParams()

    const calculateTotalOf = (products: ProductWithQuantity[]) => {
        return products.reduce((acc, curr) => acc + curr.subtotal, 0)
    }

    const getItemsApiFromQuery = async() => {
        let items = await getItemsFromQuery(params.get('items')!!)
        setProducts(items)
    }

    const getItemsApiFromLocalStorage = async () => {
        let items = await getItemsFromLocalStorage();
        setProducts(items)
    }

    useEffect(() => {
        if (params.has("items")) getItemsApiFromQuery()
        else if (getItems().length > 0) getItemsApiFromLocalStorage()
    }, [])

    return (<Container>
        <Title>Cart Page!</Title>
        <DetailsContainer>
            <Detail>
                <Name>Plate</Name>
                <Subtotal>Subtotal</Subtotal>
            </Detail>
            <Divider />
            {
                products.map(p =>
                    <Detail key={ p.product.name }>
                        <Name>{ p.product.name } x { p.quantity } unidades</Name>
                        <Subtotal>${ p.subtotal }</Subtotal>
                    </Detail>
                )
            }
            <Divider />
            <Detail>
                <Name>Total</Name>
                <Subtotal>${calculateTotalOf(products)}</Subtotal>
            </Detail>
            <div className='cho-container'></div>
        </DetailsContainer>
    </Container>)
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  width: 100%;
`

const DetailsContainer = styled.div`
  background-color: #ecdddd;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`

const Detail = styled.div`
  display: flex;
  width: 90%;
  border-radius: 10px;
  margin: 5px;
  justify-content: space-between;
  padding: 10px 0;
`

const Title = styled.h1`
  text-align: center;
`

const Name = styled.div`
`

const Subtotal = styled.div`
    
`

const Divider = styled.div`
  border-bottom: 1px solid #000;
  width: 90%;
`

const Total = styled.div`
  
`

const ButtonContainer = styled(Link)`
  width: 90%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

const CartButton = styled.button`
  width: 100%;
`

const PayButtonContainer = styled.div`
`

export default CartPage;
