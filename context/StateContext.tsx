import React, {
	ReactNode,
	createContext,
	useContext,
	useState,
	useEffect,
} from "react";
import { ContextTyping, ProductTyping, CartTyping, MerchTyping } from "../typings";
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
	increaseQuantity: () => {},
	decreaseQuantity: () => {},
	setTotalPrice: () => {},
	setCartItems: () => {},
  setToggleNavDrawer: () => {},
	setToggleCartDrawer: () => {},
	increaseMerchQuantity: () => {},
	decreaseMerchQuantity: () => {},
  setShowCart: () => {},
  onAdd: () => {},
	onAddMerch: () => {},
	onRemoveMerch: () => {},
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
// deploying to dev!
	const onRemove = (product:ProductTyping) => {
		console.log('this is the item were removing', product)
		foundProduct = cartItems.find((item: { _id: string; size: string; }) => item._id === product._id && item.size === product.size);
		console.log('found product', foundProduct)
		let currentCartItemsNotToggled = cartItems.filter((item: { _id: string; }, i: any) => item._id !== product._id)
		let newCartItems = cartItems.filter((item: { _id: string; size: string; }) => item._id !== product._id || (item._id === product._id && item.size !== product.size))
		console.log('new cart items', newCartItems)
			setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
			console.log('total quantities', totalQuantities)
			setCartItems(newCartItems)

	}

	const onAdd = (product:ProductTyping, size: string, dimensions: string, price: number) => {
		console.log('on Add fired', product, size, dimensions)
	
		// Find the item in the cart
		const existingProductIndex = cartItems.findIndex((item: ProductTyping) => item._id === product._id && item.size === size);
		
		// If the item exists, update its quantity
		if (existingProductIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingProductIndex] = {
				...updatedCartItems[existingProductIndex],
				quantity: updatedCartItems[existingProductIndex].quantity + qty
			};
			setCartItems(updatedCartItems);
		} else {
			// If the item does not exist, add it to the cart
			let updatedCartItem = {
				...product,
				size: size,
				dimensions: dimensions,
				quantity: qty,
				price: price
			}
	
			setCartItems([...cartItems, {...updatedCartItem}])
		}
	
		setTotalPrice((prevTotalPrice) => prevTotalPrice + price);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
	
		console.log('toast about to fire', qty, product.name)
		toast.success(`${qty} ${product.name} added to the cartItems.`);
	};
	

	const onAddMerch = (merch:MerchTyping) => {

		// const checkProductInCart = cartItems?.find((item:ProductTyping) => item._id === product._id && item.size === product.size);
		setTotalPrice((prevTotalPrice) => prevTotalPrice + merch.price);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

		
		const existingMerchIndex = cartItems.findIndex((item: MerchTyping) => item._id === merch._id);
		
		// If the item exists, update its quantity
		if (existingMerchIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingMerchIndex] = {
				...updatedCartItems[existingMerchIndex],
				quantity: updatedCartItems[existingMerchIndex].quantity + qty
			};
			setCartItems(updatedCartItems);
		} else {
			// If the item does not exist, add it to the cart
			let updatedCartItem = {
				...merch,
				size: "One size fits all",
				quantity: qty,
				price: merch.price
			}
	
			setCartItems([...cartItems, {...updatedCartItem}])
		}
		
    
    toast.success(`${qty} ${merch.name} added to the cart.`);
	};

	const onRemoveMerch = (merch: MerchTyping) => {
		const foundMerch = cartItems.find((item: MerchTyping) => item._id === merch._id);
		
		const newCartItems = cartItems.filter((item: MerchTyping) => item._id !== merch._id || item._id === merch._id )
	
		setTotalPrice((prevTotalPrice) => prevTotalPrice - foundMerch.price * foundMerch.quantity)
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundMerch.quantity)
		setCartItems(newCartItems)
	}
	
	const increaseMerchQuantity = (merch: MerchTyping) => {
		const merchIndex = cartItems.findIndex((item: MerchTyping) => item._id === merch._id );
		
		if (merchIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[merchIndex].quantity += 1;
			setCartItems(updatedCartItems);
		}
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		setTotalPrice((prevTotalPrice) => prevTotalPrice + merch.price);
	};
	
	const decreaseMerchQuantity = (merch: MerchTyping) => {
		const merchIndex = cartItems.findIndex((item: MerchTyping) => item._id === merch._id);
		
		if (merchIndex !== -1 && cartItems[merchIndex].quantity > 1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[merchIndex].quantity -= 1;
			setCartItems(updatedCartItems);
		}
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
		setTotalPrice((prevTotalPrice) => prevTotalPrice - merch.price);
	};

	const increaseQuantity = (product:ProductTyping) => {
		const productIndex = cartItems.findIndex((item: ProductTyping) => item._id === product._id && item.size === product.size);
		
		if (productIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[productIndex].quantity += 1;
			setCartItems(updatedCartItems);
		}
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
	};
	
	const decreaseQuantity = (product:ProductTyping) => {
		const productIndex = cartItems.findIndex((item: ProductTyping) => item._id === product._id && item.size === product.size);
		
		if (productIndex !== -1 && cartItems[productIndex].quantity > 1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[productIndex].quantity -= 1;
			setCartItems(updatedCartItems);
		}
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
		setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
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
				increaseQuantity,
				decreaseQuantity,
				qty,
        onAdd,
				onAddMerch,
				onRemoveMerch,
				increaseMerchQuantity,
				decreaseMerchQuantity,
				onRemove,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
