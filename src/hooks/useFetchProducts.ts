import { useState, useEffect } from 'react';
import { API_BASE_URL, API_LISTINGS } from '../api/constants';

interface Media {
  url: string;
  alt: string;
}

interface Seller {
  name: string;
  email: string;
  bio: string;
  avatar: Media;
  banner: Media;
  wins: string[];
}

interface Bids {
  id: string;
  amount: number;
  bidder: {
    name: string;
    email: string;
    bio: string; 
    avatar: Media[];
    banner: {
      url: string; 
      alt: string; 
    }
  };
  created: string;
}

interface Result {
  id: string;
  title: string;
  description: string;
  tags: string[];
  media: Media[];
  created: string;
  updated: string;
  endsAt: string;
  seller: Seller;
  bids: Bids[];
  _count: {
    bids: number;
  };
}

export default function useFetchProducts(): { products: Result[], loading: boolean, error: string | null } {
  const [products, setProducts] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_BASE_URL}${API_LISTINGS}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: { data: Result[] } = await response.json();
        setProducts(result.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { products, loading, error };
}
