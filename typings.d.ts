interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference"
  }
}

export interface ProductTyping extends SanityBody {
  _type: "Product";
  image: Image;
  name: string;
  slug: string;
  price: number;
  details: string;
  quantity: number;
}

export interface CartTyping {
  cartItems: {_type: "Product",
  image: Image,
  name: string,
  slug: string,
  price: number,
  details: string,
  quantity: number}[]
}

export interface BannerDataTyping extends SanityBody {
  _type: "BannerData";
  buttonText: string;
  desc: string;
  details: string;
  discount: string;
  image: string;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
}

export interface ContextTyping {
  showCart: boolean;
  cartItems: ProductTyping[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  decQty: (qty: number) => void;
  incQty: (qty: number) => void;
  onAdd: (product: ProductTyping, quantity: number) => void

}