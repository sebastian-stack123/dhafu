import { Product, Collection } from './types';

export const newCollection: Product[] = [
  {
    id: '1',
    name: 'Oversized Premium Tee',
    description: 'Camiseta de algodón pesado con corte oversized.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    category: 'Camisetas',
    isNew: true,
  },
  {
    id: '2',
    name: 'Essential Street Hoodie',
    description: 'Hoodie estructurado con interior afelpado.',
    price: 85.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    category: 'Hoodies',
    isNew: true,
  },
  {
    id: '3',
    name: 'Distressed Cargo Jeans',
    description: 'Jeans cargo con detalles desgastados a mano.',
    price: 110.00,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    category: 'Jeans',
    isNew: true,
  },
  {
    id: '4',
    name: 'Tactical Vest Jacket',
    description: 'Chaqueta tipo chaleco táctico con múltiples bolsillos.',
    price: 130.00,
    image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800',
    category: 'Chaquetas',
    isNew: true,
  },
];

export const categories: Collection[] = [
  { id: 'c1', name: 'Camisetas', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
  { id: 'c2', name: 'Hoodies', image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800' },
  { id: 'c3', name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800' },
  { id: 'c4', name: 'Chaquetas', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800' },
  { id: 'c5', name: 'Conjuntos', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800' },
  { id: 'c6', name: 'Accesorios', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=800' },
];

export const lookbookImages = [
  'https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1492288991661-058aa541ff43?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1550614000-4b95d466f288?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=800',
];
