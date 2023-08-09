import gin from '../images/gin.jpg';
import vodka from '../images/vodka.jpg';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    {
      imageSrc: gin,
      title: 'Mystic Gin',
      description:'This luxurious gin has a light citrus and juniper approach, a lush palette of vapor distilled botanicals, and a clean finish. Unbelievably smooth despite its formidable Navy strength of 114 proof, our gin took more than a year of development. Mystic 57 is handcrafted in small batches and proofed down to 57% Alc./Vol. with Triassic Basin water drawn directly from the aquifer below the distillery. We invite you to experience your new favorite gin.',
      price: 29.99,
    },
    {
      imageSrc: vodka,
      description:'Made with 100% corn and our Triassic Basin water. Has a slight sweet corn aroma and clean creamy mouthfeel. Mystic Vision Vodka from Grain 40% Alc./Vol. Distilled by Barrister & Brewer Distilling Co. Durham, NC',
      title: 'Mystic Vodka',
      price: 19.99,
    },
    
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product.imageSrc}
          description={product.description}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  );
};

export default ProductList;
