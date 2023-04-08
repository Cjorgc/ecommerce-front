import CartItem from "../../models/Cart/CartItem";
import { get } from "../../api/AxiosClient";
import Product from "../../models/Product/Product";

export type ProductWithQuantity = {
    product: Product
    quantity: number
    subtotal: number
}
export const addOrUpdateItem = (id: number) => {
    const cartItems = getItems()
    updateCartItems(cartItems, id)
    PersistCartWith(cartItems)
}

export const getItemsFromApi = async () => {
    const items = getItems()
    const path = items.map(item => `${item.id}-${item.quantity}`).join(",")
    try {
        return await get<ProductWithQuantity[]>(`/products/${ path }`)
    } catch (e) {
        console.log(e)
        return []
    }
}

const getItems = (): CartItem[] => {
    const cart = localStorage.getItem("cart")
    return cart ? JSON.parse(cart) as CartItem[] : initializeCart()
}

const initializeCart = (): CartItem[] => {
    localStorage.setItem("cart", JSON.stringify([]))
    return []
}

const updateCartItems = (cartItems: CartItem[], id: number) => {
    const item = cartItems.find(i => i.id === id)
    item ? item.quantity++ : cartItems.push({ id, quantity: 1 })
}

const PersistCartWith = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items))
}
