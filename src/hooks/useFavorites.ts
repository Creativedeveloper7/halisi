import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    async function fetchFavorites() {
      try {
        const { data, error } = await supabase
          .from('favorites')
          .select('product_id')
          .eq('user_id', user.id);
          
        if (error) throw error;
        setFavorites(data.map(f => f.product_id));
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, [user]);

  const toggleFavorite = async (productId: string) => {
    if (!user) return;

    const isFavorite = favorites.includes(productId);
    
    try {
      if (isFavorite) {
        await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('product_id', productId);
          
        setFavorites(prev => prev.filter(id => id !== productId));
      } else {
        await supabase
          .from('favorites')
          .insert({ user_id: user.id, product_id: productId });
          
        setFavorites(prev => [...prev, productId]);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return { favorites, loading, toggleFavorite };
}