// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  description: string;
  price: number;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, description, price }) => {
  return (
    <div className="product-card" style={{width:'100%', justifyContent:'space-between', display:'flex', height:'300px'}}>
      <div className="product-image" style={{ width: '150px'}}>
        <img src={imageSrc} alt="Product" />
      </div>
      <div className="product-description" style={{ width: '55%' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
