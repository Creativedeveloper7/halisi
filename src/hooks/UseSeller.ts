import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export function useSeller() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [sellerData, setSellerData] = useState<any>(null);

  useEffect(() => {
    if (!user) return;

    async function fetchSellerData() {
      try {
        const { data, error } = await supabase
          .from('sellers')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        setIsSeller(!!data);
        setSellerData(data);
      } catch (error) {
        console.error('Error fetching seller data:', error);
        setIsSeller(false);
        setSellerData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchSellerData();
  }, [user]);

  return { loading, isSeller, sellerData };
}