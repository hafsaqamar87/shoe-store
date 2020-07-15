import React from "react";
import {
  BrowserRouter as Router,Routes, Route,Link,Outlet, useParams} from "react-router-dom";


export default function App() {
  return <Router>
    <nav>
        <Link to="/">HOME</Link>
        <Link to="Items">Items</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Items" element={<Items />}>
          <Route path="/" element={<ItemIndex />} />
          <Route path=":slug" element={<ShoeItem />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
}
function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
function Home(){
  return (
      <div>
      <div>
      <h1 className="ladies-shoe">Welcome To Ladies Shoe Store!</h1>
      <img src="https://images.unsplash.com/photo-1570425387687-d2a34c7304a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" height={800} width={1350} alt="shoe" />
      </div>
    </div>
  )
}
function Items(){
  return (
    <div>
      <h1>Latest Collection Of Women and Girls Shoes</h1>
      <Outlet /> 
    </div>
  )
}

function ItemIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img}]) => (
        <li key={slug}>
          <Link to={`/Items/${slug}`}>
          <h2>{name}</h2>
            <img src={img} alt={name} />
            </Link>
        </li>
      ))}
    </ul>
  );
}
function ShoeItem() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img, price, color,size} = shoe;

  return (
    <div>
       <img src={img} alt={name} height={400} />
       
      <h2>{name}</h2>
      <p>Price:{price}<br />
       color Availability:{color}<br />
       size:{size}</p>
</div>
  );
}

const shoes = {
  "white stylish girl shoes": {
    name: "Lovely white lace-up denim flat shoes sneakers",
    price: " Rs 2000",
    color: " White,blue,grey",
    size:  " 6, 7, 8, 9",
    img:
      "https://contestimg.wish.com/api/webimage/5924f7806b1abf28430bbebb-large.jpg?cache_buster=45c9a202881b9f3fb6b31f7a8675b7e9"
    },
  "Blue women flat sneakers": {
    name: "White Shoes Carton Cat Women Flats Sneakers Casual Shoes",
    price: " Rs 2500",
    color: " White,blue,yellow",
    size:  " 6, 7, 8, 9",
    img:
      "https://ae01.alicdn.com/kf/HTB1Tg0rXIfrK1Rjy1Xdq6yemFXa2/White-Shoes-Carton-Cat-Women-Flats-Sneakers-Casual-Shoes-Girls-Boys-Leather-Shoes-Cute-Creepers-Fashion.jpg"
    },
  "Lovely Sport Pink shoes": {
    name: "Perfect Stylish Girls Casual Shoes Sneakers For Women",
    price: " Rs 2000",
    color: " Pink,White,blue,grey",
    size:  " 6, 7, 8, 9",
    img:
      "https://rukminim1.flixcart.com/image/714/857/k4rcmfk0/shoe/y/k/f/sigma-hand-8-creattoes-black-pink-original-imafgtav3pdeskwt.jpeg?q=50"
    
    },
  "hand painted canvas shoes": {
    name: "new hand-painted canvas shoes girls",
    price: " Rs 2200",
    color: " Pink,White,blue,grey",
    size:  " 6, 7, 8, 9, 10",
    img:
      "https://www.dhresource.com/0x0/f2/albu/g6/M00/1E/B9/rBVaSFtTPteAFxAHAAFAb-rvlT4645.jpg"
  },
 
  "velvet high-top shoes": {
    name: "Blue velvet High-Top shoes for Girls",
    price: " Rs 3000",
    color: " Pink,White,blue,grey",
    size:  " 6, 7, 8, 9, 10",
    img:
      "https://i.pinimg.com/originals/0d/e6/7c/0de67cb4b9c6ef277d7a352f6f3d4fcb.jpg"
  },
  "purple-shoes for women": {
    name: "stylish purple women's walking shoes sock sneakers",
    price: " Rs 2200",
    color: " Pink,White,purple",
    size:  " 7, 8, 9,10",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/511-Lz3UTOL._AC_.jpg"
      

      },
      
      "White star shoes": {
        name: "Comfortable and fashionable sneaker shoes for women and girls",
        price: " Rs 1800",
        color: " White,blue,grey",
        size:  " 6, 7, 8, 9",
        img:
              "https://images-na.ssl-images-amazon.com/images/I/617LKKeOZKL._UY500_.jpg",
          },
       "stylish shoes": {
        name: "lovely and fashionable sneaker shoes for women and girls",
        price: " Rs 2200",
        color: " Sea-green,Pink,White,blue",
        size:  " 6, 7, 8, 9,10",
        img:
            "https://rukminim1.flixcart.com/image/714/857/jur9nrk0/kids-shoe/h/2/g/13-19p8snea1102i-united-colors-of-benetton-original-imafftqr4fhrn44g.jpeg?q=50",
              }
    };

