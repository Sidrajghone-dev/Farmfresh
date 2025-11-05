import React from 'react'
import  {useCart}  from '../Components/Cardcontext.js';





const Main = () => {

  const {dispatch} = useCart();

  
const products = [
  { id: 1, name: "Strawberry", price: 40, img: "/strawberry.jpg" },
  { id: 2, name: "Fruits", price: 30, img: "/fruits.jpeg" },
  { id: 3, name: "Millets", price: 50, img: "/Millets.avif" },
  { id: 4, name: "Mushrooms", price: 250, img: "/mushrooms.jpeg" },
  { id: 5, name: "Kesar", price: 1000, img: "/kesar.jpeg" },
  { id: 6, name: "Vegetables", price: 20, img: "/vegetables.jpeg" },
];

const addtocart = (product)=>
{
  dispatch({type:'ADD_ITEM',payload:product});
}
 
  return (
    <div id="main">
      <div className="hero">
        <h2>Welcome to Local Farm Market</h2>
        <p>Fresh veggies directly from farmers to you!</p>
      </div>

      <div id="featured-products">
        <h2 style={{ paddingLeft: "10px" }}>Featured Products</h2>
        {products.map(product => (
          <div className="product"  key={product.id}  product={product} addtocart={addtocart}>
            <img src={product.img} alt={product.name} width="150" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={()=>addtocart(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
