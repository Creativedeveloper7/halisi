import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { ProductOrder } from '../types/product';

export function useOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<ProductOrder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    async function fetchOrders() {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select(`
            *,
            products (*)
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrders();
  }, [user]);

  const createOrder = async (productId: string) => {
    if (!user) return null;
    
    try {
      const { data, error } = await supabase
        .from('orders')
        .insert({ user_id: user.id, product_id: productId })
        .select()
        .single();
        
      if (error) throw error;
      setOrders(prev => [data, ...prev]);
      return data;
    } catch (error) {
      console.error('Error creating order:', error);
      return null;
    }
  };

  const cancelOrder = async (orderId: string) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: 'cancelled' })
        .eq('id', orderId);
        
      if (error) throw error;
      
      setOrders(prev => 
        prev.map(order => 
          order.id === orderId 
            ? { ...order, status: 'cancelled' } 
            : order
        )
      );
    } catch (error) {
      console.error('Error cancelling order:', error);
    }
  };

  return { orders, loading, createOrder, cancelOrder };
}