import { FC } from 'react';

interface Props {}

const Catalog: FC<Props> = (props) => {
    const items = [
        {
            id: 1,
            name: "Cheeseburger",
            price: 9.99,
            category: 'Hamburguers'
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            price: 12.99,
            category: 'Pizzas'
        },
        {
            id: 3,
            name: "Ribeye Steak",
            price: 25.99,
            category: 'Loins'
        },
        {
            id: 4,
            name: "Schnneider Beer",
            price: 5.99,
            category: 'Beers'
        }
    ];
    return (<>
        <h1>Catalog page!</h1>
        <ul>
            {
                items.map(i => <li>
                    <div>
                        <h3>name: {i.name}</h3>
                        <p>price: {i.price}</p>
                        <p>category: {i.category}</p>
                    </div>
                </li>)
            }
        </ul>
    </>);
};

export default Catalog;
