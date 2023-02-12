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

interface Geopoint {
  _type: "geopoint";
  asset: {
    lat: string;
    lng: string
  }
}

export interface EventTyping extends SanityBody {
  _type: "Event";
  image: Image;
  title: string;
  shortDesc: string;
  longDesc: string;
  geopoint: Geopoint;
  dateTime: Date;
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

export interface SideBannerDataTyping extends SanityBody {
  _type: "SideBannerData";
  image: Image;
}

export interface AboutTyping extends SanityBody {
  _type: "About";
  bannerImage: Image,
  mickDesc: string;
  mickImage: Image;
  patDesc: string;
  patImage: Image;
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



export interface ContextTyping {
  showCart: boolean;
  cartItems: ProductTyping[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  decQty: (qty: number) => void;
  incQty: (qty: number) => void;
  setShowCart: (showCart: boolean) => void;
  onAdd: (product: ProductTyping, quantity: number) => void;
  toggleCartItemQuantity: (id: number, value: string) => void;
}