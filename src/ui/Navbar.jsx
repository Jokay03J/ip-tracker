import React from "react";

export default function Navbar({ title, items }) {
  return (
    <nav className="navbar--red text--white mb-4">
      <div className="container">
        <h2 className="site--title">{title}</h2>
        <ul className="items">
          {items.map((item) => (
            <li className="item" key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
