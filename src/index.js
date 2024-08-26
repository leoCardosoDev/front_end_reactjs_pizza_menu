import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Pão com azeite italiano e alecrim',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomate e mussarela',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomate, mussarela, espinafre e queijo ricota',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomate, mussarela, cogumelos e cebola',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomate, mussarela e pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomate, mussarela, presunto, rúcula e queijo burrata',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Nosso Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredient={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const message = isOpen
    ? 'No momento estamos abertos!'
    : 'Desculpas! No momento estamos fechados!';

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}
      {' - '}
      {message}
    </footer>
  );
  //return React.createElement('footer', null, 'No momento estamos abertos!');
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>R$ {props.price},00</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
