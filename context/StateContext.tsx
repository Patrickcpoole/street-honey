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

	

	const onAdd = (product:ProductTyping, quantity:number) => {
    console.log('on Add fired', product, quantity)
		const checkProductInCart = cartItems?.find((item:ProductTyping) => item._id === product._id
		);
		setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
		setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

		if (checkProductInCart) {
			const updatedCartItems = cartItems?.map((cartProduct:ProductTyping) => {
				if (cartProduct._id === product._id)
					return {
						...cartProduct,
						quantity: cartProduct.quantity + quantity,
					};
			});
			setCartItems(updatedCartItems);
			
		} else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}])
		}
    console.log('toast about to fire', qty, product.name)
    toast.success(`${qty} ${product.name} added to the cartItems.`);
	};

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    
		console.log('found product', foundProduct);
		console.log('index', index)

    let currentCartItemsNotToggled = cartItems.filter((item, i) => item._id !== id)

	

    if(value === 'inc') {
			let newCartItems = [{...foundProduct, 
        quantity: foundProduct.quantity + 1
        }, ...currentCartItemsNotToggled]
			let sortedNewCartItems = newCartItems.sort(function(a, b) {
				const textA = a.name.toUpperCase();
				const textB = b.name.toUpperCase();
				return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
      setCartItems(sortedNewCartItems)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if(foundProduct.quantity > 1){
      let newCartItems = [{...foundProduct, 
        quantity: foundProduct.quantity - 1
        }, ...currentCartItemsNotToggled]
				console.log('These are new cart items', newCartItems)
				let sortedNewCartItems = newCartItems.sort(function(a, b) {
					const textA = a.name.toUpperCase();
					const textB = b.name.toUpperCase();
					return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
			});
        setCartItems(sortedNewCartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

	const incQty = () => setQty((prevQty) => prevQty + 1);

	const decQty = () => {
		setQty((prevQty) => {
			if (prevQty - 1 < 1) return 1;

			return prevQty - 1;
		});
	};

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
				incQty,
				decQty,
        onAdd,
        toggleCartItemQuantity
      
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
