
export interface Coords {
  lat: number;
  lng: number;
}

export interface StoreItem {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  appliedCoupon?: string;
  emoji: string;
  description?: string;
  category?: string;
}

export interface Coupon {
  name: string;
  discount: number;
}

export interface Store {
  id: number;
  name: string;
  distance: string;
  status: 'available' | 'few' | 'full';
  image: string;
  features: string[];
  atmosphere: string;
  menu: StoreItem[];
  coords: Coords;
  coupons?: Coupon[];
}

export interface Area {
  id: number;
  name: string;
  icon?: string;
  coords?: Coords;
}

export interface TicketData {
  area: Area;
  store: Store;
  item: StoreItem;
  message: string;
  ticketId: string;
  timestamp: string;
}