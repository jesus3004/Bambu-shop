export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  sku: string;
  minimumOrderQuantity: number;
  availabilityStatus: string;
  returnPolicy: string;
  warrantyInformation: string;
  shippingInformation: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  images: string[];
  thumbnail: string;
  tags: string[];
  meta: {
    createdAt: string;
    updatedAt: string; 
    barcode: string;
    qrCode: string;
  };
  reviews: Review[];
  favorite?: boolean;
}

export interface Review {
  // Ejemplo de campos para un review; ajusta según tu modelo real
  reviewerName?: string;
  comment?: string;
  rating?: number;
  date?: string; 
  reviewerEmail:string;
}