import { FC } from 'react';
import ItemCard from "../../components/ItemCard";


const Catalog: FC = () => {
    const items = [
        {
            id: 1,
            name: "Cheeseburger",
            price: 9.99,
            category: 'Hamburguers',
            thumbnail: 'https://drive.google.com/uc?export=view&id=13AwPIxzScv8GEI-vePs8dkcgQPf4ttiL'
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            price: 12.99,
            category: 'Pizzas',
            thumbnail: 'https://drive.google.com/uc?export=view&id=1T580a3bGR_gD4qRHfmPSEiBIn36jpA92'
        },
        {
            id: 3,
            name: "Ribeye Steak",
            price: 25.99,
            category: 'Loins',
            thumbnail: 'https://drive.google.com/uc?export=view&id=1kKuoWedm0GDCto8zLTZW3TTJ6jDUjtZv'
        },
        {
            id: 4,
            name: "Schnneider Beer",
            price: 5.99,
            category: 'Beers',
            thumbnail: 'https://drive.google.com/uc?export=view&id=18oZPtIOSl9wEEdiXsxVVNB6ciU4J2sc_'
        }
    ];

    return (<>
        <div style={{display: 'flex', flexDirection: "column"}}>
            <h1 style={{textAlign: "center"}}>Catalog page!</h1>
            <div style={{margin: '0 30%'}}>
                {
                    items.map(i => <ItemCard
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        price={i.price}
                        detail={"detalle del plato"}
                        thumbnail={i.thumbnail}
                    />)
                }
            </div>
        </div>
    </>);
};

export default Catalog;
