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

const Context = React.createContext<ContextTyping | null>(null);

export const StateContext = ({ children }: Props) => {
	const [showCart, setShowCart] = useState<boolean>(false);
	const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
	const [cartItems, setCartItems] = useState <any>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalQuantities, setTotalQuantities] = useState<number>(0);

	const [qty, setQty] = useState<number>(1);

  let foundProduct;
  let index;

	const onRemove = (product:ProductTyping) => {
		console.log('this is the item were removing', product)
		foundProduct = cartItems.find((item) => item._id === product._id && item.size === product.size);
		console.log('found product', foundProduct)
		let currentCartItemsNotToggled = cartItems.filter((item, i) => item._id !== product._id)
		let newCartItems = cartItems.filter((item) => item._id !== product._id || (item._id === product._id && item.size !== product.size))
		console.log('new cart items', newCartItems)
			setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
			setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity)
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

	

  // const toggleCartItemQuantity = (id, value) => {
  //   foundProduct = cartItems.find((item) => item._id === id);
  //   index = cartItems.findIndex((product) => product._id === id);
    
	// 	console.log('found product', foundProduct);
	// 	console.log('index', index)

  //   let currentCartItemsNotToggled = cartItems.filter((item, i) => item._id !== id)

	

  //   if(value === 'inc') {
	// 		let newCartItems = [{...foundProduct, 
  //       quantity: foundProduct.quantity + 1
  //       }, ...currentCartItemsNotToggled]
	// 		let sortedNewCartItems = newCartItems.sort(function(a, b) {
	// 			const textA = a.name.toUpperCase();
	// 			const textB = b.name.toUpperCase();
	// 			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	// 	});
  //     setCartItems(sortedNewCartItems)
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
  //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
  //   } else if(value === 'dec') {
  //     if(foundProduct.quantity > 1){
  //     let newCartItems = [{...foundProduct, 
  //       quantity: foundProduct.quantity - 1
  //       }, ...currentCartItemsNotToggled]
	// 			console.log('These are new cart items', newCartItems)
	// 			let sortedNewCartItems = newCartItems.sort(function(a, b) {
	// 				const textA = a.name.toUpperCase();
	// 				const textB = b.name.toUpperCase();
	// 				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	// 		});
  //       setCartItems(sortedNewCartItems)
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
  //       setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
  //     }
  //   }
  // }

	// const incQty = () => setQty((prevQty) => prevQty + 1);

	// const decQty = () => {
	// 	setQty((prevQty) => {
	// 		if (prevQty - 1 < 1) return 1;

	// 		return prevQty - 1;
	// 	});
	// };

	return (
		<Context.Provider
			value={{
				toggleDrawer,
				setToggleDrawer,
				showCart,
        setShowCart,
				cartItems,
				totalPrice,
				totalQuantities,
				qty,
				// incQty,
				// decQty,
        onAdd,
				onRemove,
        // toggleCartItemQuantity
      
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
