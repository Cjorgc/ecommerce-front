import CartItem from "../../models/Cart/CartItem";

export const addOrUpdateItem = (id: number) => {
    const cartItems = getItems()
    updateCartItems(cartItems, id)
    PersistCartWith(cartItems)
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
    item ? item.amount++ : cartItems.push({ id, amount: 1 })
}

const PersistCartWith = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items))
}
