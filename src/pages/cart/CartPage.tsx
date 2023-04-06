import { FC, useEffect, useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Product {
    name: string
    price: number
    amount: number
}

const CartPage: FC<Product> = () => {

    const [products, setProducts] = useState<Product[]>([])

    const calculateTotalOf = (products: Product[]) => {
        return products.reduce((accumulator, current) => accumulator + (current.price * current.amount), 0)
    }

    const calculateSubtotalOf = (product: Product) => { return product.price * product.amount }

    useEffect(() => {
        setProducts([
            {name: "hamburguesa", price: 10, amount: 2},
            {name: "pizza", price: 15, amount: 1},
            {name: "empanada", price: 2, amount: 10}
        ])
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
                products.map(p => <Detail key={p.name}>
                    <Name>{p.name} x {p.amount} unidades</Name>
                    <Subtotal>${calculateSubtotalOf(p)}</Subtotal>
                </Detail>)
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
