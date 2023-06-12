interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  _id: string;
  asset: {
    _ref: string;
    _type: "reference";
    
  }
}

interface SanityImageAssetDocument {
  _id: string;
  _type: string;
}

interface Geopoint {
  _type: "geopoint";
  asset: {
    lat: string;
    lng: string;
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
  image: Image[]; // Changed from Image to Image[]
  photographer: PhotographerTyping;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  price: number;
  details: string;
  size: string;
  dimensions: string;
  tags: Array<any>; // Updated Array type, you may replace 'any' with the appropriate type for tags
}

export interface PhotographerTyping extends SanityBody {
  _id: string;
  _type: "Photographer";
  _ref: string;
  image: string[];
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  question1: string;
  answer1: string;
  question2: string;
  answer2: string;
  question3: string;
  answer3: string;
  location: string;
  favoriteCamera: string;
  instagram: string;
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
  image: string;
  title: string;
}

export interface AboutTyping extends SanityBody {
  _type: "About";
  mickImage: string;
  patImage: string;
  jimmyImage: string;
}

export interface MerchTyping extends SanityBody {
  _type: "Merch";
  image: Image[],
  name: string,
  description: string,
  slug: string,
  price: number,
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

export interface SubmissionsTyping {
  _type: string;
  firstName: string;
  lastName: string;
  email: string;
  instagramHandle: string;
  notes: string;
  image: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
}



export interface ContextTyping {
  showCart: boolean;
  cartItems: ProductTyping[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  toggleNavDrawer: boolean;
  toggleCartDrawer: boolean;
  setTotalPrice: (totalPrice: number) => void;
  setCartItems: (cartItems: ProductTyping[]) => void;
  setToggleNavDrawer: (toggleDrawer: boolean) => void;
  setToggleCartDrawer: (toggleDrawer: boolean) => void;
  setShowCart: (showCart: boolean) => void;
  onAdd: (product: ProductTyping, size: string, dimensions: string, price: number) => void;
  onRemove: (product: ProductTyping) => void;
}