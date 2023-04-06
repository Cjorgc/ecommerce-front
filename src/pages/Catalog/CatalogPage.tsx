import { FC } from 'react';
import ItemCard from "../../components/ItemCard";
import styled from "styled-components";
import { Link } from "react-router-dom";


const CatalogPage: FC = () => {
    const items = [
        {
            id: 1,
            name: "Cheeseburger",
            price: 9.99,
            category: 'Hamburguers',
            detail: 'some detail',
            thumbnail: 'https://drive.google.com/uc?export=view&id=13AwPIxzScv8GEI-vePs8dkcgQPf4ttiL'
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            price: 12.99,
            category: 'Pizzas',
            detail: 'some detail',
            thumbnail: 'https://drive.google.com/uc?export=view&id=1T580a3bGR_gD4qRHfmPSEiBIn36jpA92'
        },
        {
            id: 3,
            name: "Ribeye Steak",
            price: 25.99,
            category: 'Loins',
            detail: 'some detail',
            thumbnail: 'https://drive.google.com/uc?export=view&id=1kKuoWedm0GDCto8zLTZW3TTJ6jDUjtZv'
        },
        {
            id: 4,
            name: "Schnneider Beer",
            price: 5.99,
            category: 'Beers',
            detail: 'some detail',
            thumbnail: 'https://drive.google.com/uc?export=view&id=18oZPtIOSl9wEEdiXsxVVNB6ciU4J2sc_'
        }
    ];

    return (<>
        <Container>
            <Title>Catalog page!</Title>
            <ItemsContainer>
                {
                    items.map(i => <ItemCard
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        price={i.price}
                        detail={i.detail}
                        thumbnail={i.thumbnail}
                    />)
                }
                <ButtonContainer to={'/cart'}>
                    <CartButton>See Cart</CartButton>
                </ButtonContainer>
            </ItemsContainer>
            <div className="cho-container"></div>
        </Container>
    </>);
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ItemsContainer = styled.div`
  margin: 0 3%;
`

const Title = styled.h1`
  text-align: center;
`

const ButtonContainer = styled(Link)`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
`

const CartButton = styled.button`
  width: 100%;
`

export default CatalogPage;
