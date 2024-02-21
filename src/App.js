import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import MenuCart from './components/MenuCart';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const header = {
  title: "Taste of Japan",
  logo: "logo.jpg",
  slogan: "Savory snacks and meals from the heart of Japan!",
  description: "Quick and Tasty Japanese cuisine!!"
}

function App() {

  let i = menuItems.map((item) => ({...item, count:0}));
  const [items, setItems] = useState(i);

  const setItemCounts = (currId, newCount) => {
    setItems((prevItems) => (
      prevItems.map((item) => {
        if (item.id === currId) {
          return {...item, count: newCount}
        } else {
          return {...item}
        }
      })
    ))
  }

  const clearTotal = () => {
    setItems((prevItems) => (
      prevItems.map((item) => {
        if (item.count !== 0) {
          return {...item, count:0}
        } else {
          return {...item}
        }
      })
    ))
  }

  const getTotal = () => {
    let total = 0.00;
    items.forEach((item) => {total += (item.count * item.price)});
    return total.toFixed(2);
  }

  const orderFood = () => {
    let retStr = "";
    items.forEach((item) => {
      if (item.count !== 0) {
        retStr = retStr.concat(item.count, " ", item.title, "\n")
      }
    })
    if (retStr.length === 0) {
      // console.log("No items in cart");
      return "No items in cart";
    } else {
      // console.log("Order Placed!\n".concat(retStr).slice(0,-2));
      return "----------------\nOrder Placed!\n----------------\n".concat(retStr).slice(0,-2);
    }
  }

  return (
    <div className="container-fluid">
      <div className="header"> 
        <MenuHeader title={header.title} logo={header.logo} slogan={header.slogan} desc={header.description}/>
      </div>
      <div className="menu">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id} 
            title={item.title} 
            imgPath={item.imageName}
            desc={item.description}
            price={item.price}
            count={item.count}
            setCounts={setItemCounts}
          />
          ))}
      </div>
      <div className="cart">
          <MenuCart subTotal={getTotal()} clear={clearTotal} order={orderFood}/>
      </div>
    </div>
  );
}

export default App;
