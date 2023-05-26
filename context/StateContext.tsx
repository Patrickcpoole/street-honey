import React, {
	ReactNode,
	createContext,
	useContext,
	useState,
	useEffect,
} from "react";
import { ContextTyping, ProductTyping, CartTyping } from "../typings";
import { toast } from "react-hot-toast";
import product from "../sanity-street-honey/schemas/product";

interface Props {
	children?: ReactNode;
	// any props that come into the component
}

const Context = React.createContext<ContextTyping>({
	showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
  toggleNavDrawer: false,
	toggleCartDrawer: false,
	setTotalPrice: () => {},
	setCartItems: () => {},
  setToggleNavDrawer: () => {},
	setToggleCartDrawer: () => {},
  setShowCart: () => {},
  onAdd: () => {},
	onRemove: () => {},
});

export const StateContext = ({ children }: Props) => {
	const [showCart, setShowCart] = useState<boolean>(false);
	const [toggleCartDrawer, setToggleCartDrawer] = useState<boolean>(false);
	const [toggleNavDrawer, setToggleNavDrawer] = useState<boolean>(false);
	const [cartItems, setCartItems] = useState <any>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalQuantities, setTotalQuantities] = useState<number>(0);

	const [qty, setQty] = useState<number>(1);

  let foundProduct: { price: number; quantity: number; };
  let index;

	const onRemove = (product:ProductTyping) => {
		console.log('this is the item were removing', product)
		foundProduct = cartItems.find((item: { _id: string; size: string; }) => item._id === product._id && item.size === product.size);
		console.log('found product', foundProduct)
		let currentCartItemsNotToggled = cartItems.filter((item: { _id: string; }, i: any) => item._id !== product._id)
		let newCartItems = cartItems.filter((item: { _id: string; size: string; }) => item._id !== product._id || (item._id === product._id && item.size !== product.size))
		console.log('new cart items', newCartItems)
			setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
			console.log('total quantities', totalQuantities)
			setCartItems(newCartItems)

	}

	const onAdd = (product:ProductTyping, size: string, dimensions: string) => {
    console.log('on Add fired', product, size, dimensions)
		// const checkProductInCart = cartItems?.find((item:ProductTyping) => item._id === product._id && item.size === product.size);
		
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

		
			let updatedCartItem = {
				...product,
				size: size,
				dimensions: dimensions,
				quantity: qty
			}
      
      setCartItems([...cartItems, {...updatedCartItem}])
		
    console.log('toast about to fire', qty, product.name)
    toast.success(`${qty} ${product.name} added to the cartItems.`);
	};


	return (
		<Context.Provider
			value={{
				toggleNavDrawer,
				setToggleNavDrawer,
				toggleCartDrawer,
				setToggleCartDrawer,
				showCart,
        setShowCart,
				setCartItems,
				setTotalPrice,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
        onAdd,
				onRemove,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
