// interfaces/order.ts
export interface User {
    _id: string;
    name: string;
    // thêm các thuộc tính khác nếu cần
  }
  
  export interface CartItem {
    product: string; // Đây là ObjectId dưới dạng string
    quantity: number;
    size: string;
  }
  
  export interface Order {
    _id?: string;
    user: User;
    products: CartItem[];
    totalPrice: number;
    paymentMethod: string;
    orderStatus: 'Chờ xử lý' | 'Đang xử lý' | 'Đã gửi hàng' | 'Đã giao hàng';
    createdAt: Date;
  }