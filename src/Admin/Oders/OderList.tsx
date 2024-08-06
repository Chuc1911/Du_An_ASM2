// components/OrderList.tsx
import React, { useEffect, useState } from 'react';

import { Order } from '../../interface/Oder';
import Instance from '../../api';

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await Instance.get("/oders");
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId: string) => {
    try {
      await Instance.delete(`/oders/${orderId}`);
      setOrders(orders.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>User: {order.user.name}</p>
            <p>Total Price: {order.totalPrice}</p>
            <p>Order Status: {order.orderStatus}</p>
            <button onClick={() => handleDelete(order._id!)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
