import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    image: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    image: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    image: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    image: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    image: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    image: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello React!! Its Dripta!!</h1>
      {/* {pizzaData.map((pizza, index) => (
        <Pizza key={index} pizza={pizza} />
      ))} */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const stl = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const stl = {};
  return (
    <header className="header">
      <h1 style={stl}>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>~Our Menu~</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authenticate Italian cuisine. 6 createive dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              // <Pizza name={pizza.name} />
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later !!</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        image="pizzas/spinaci.jpg"
        price={100}
      />
      <Pizza
        image="pizzas/funghi.jpg"
        name="Pizza funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        price={125}
      />
      <Pizza
        image="pizzas/focaccia.jpg"
        name="Pizza focacci"
        ingredient="Bread with italian olive oil and rosemary"
        price={150}
      />
      <Pizza
        image="pizzas/margherita.jpg"
        name="Pizza margherita"
        ingredient="Tomato and mozarella"
        price={130}
      />
      <Pizza
        image="pizzas/prosciutto.jpg"
        name="Pizza prosciutto"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={140}
      />
      <Pizza
        image="pizzas/salamino.jpg"
        name="Pizza Salamino"
        ingredient="Tomato, mozarella, and pepperoni"
        price={180}
      /> */}

      {/* <Pizza />
      <Pizza />
      <Pizza /> */}
    </main>
  );
}

function Pizza({ pizzaobj }) {
  // if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      {/* <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" /> */}
      <img src={pizzaobj.image} alt={pizzaobj.name} />
      <h1>{pizzaobj.name}</h1>
      <p>{pizzaobj.ingredients}</p>
      <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price + 3}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour; //This is like a true or false value.
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We're currently open!");
  // } else {
  //   alert("Sorry we're closed!");
  // }

  // return React.createElement("footer", null, "We're currently open !!");
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We're currently open! */}
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We are Open until {closeHours}:00 to {openHours}:00 . Come visit us or
        order online!!
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
