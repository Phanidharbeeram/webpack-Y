import React, { useEffect } from "react";
import "./App.css";
import transfor from "jump.js";
export default function Scroll() {
  return (
    <div>
      <div id="first" className="c">
        <div className="sect">
          <h2>Welcome to Profile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nemo aspernatur magni dolorem unde illum iste molestiae, obcaecati
            accusamus aliquid corrupti vitae sed saepe. Voluptate maxime fuga
            voluptatem illo ea!
          </p>
        </div>
        <button
          id="top"
          onClick={() => {
            transfor("#five");
          }}
        >
          Scroll to bottom
        </button>
        <button
          onClick={() => {
            transfor("#second");
          }}
        >
          Next
        </button>
      </div>
      <div id="second" className="c">
        <div className="sect">
          {" "}
          <h2>Welcome to Profile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nemo aspernatur magni dolorem unde illum iste molestiae, obcaecati
            accusamus aliquid corrupti vitae sed saepe. Voluptate maxime fuga
            voluptatem illo ea!
          </p>
        </div>{" "}
        <button
          onClick={() => {
            transfor("#third");
          }}
        >
          Next
        </button>
      </div>
      <div id="third" className="c">
        <div className="sect">
          <h2>Welcome to Profile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nemo aspernatur magni dolorem unde illum iste molestiae, obcaecati
            accusamus aliquid corrupti vitae sed saepe. Voluptate maxime fuga
            voluptatem illo ea!
          </p>{" "}
        </div>
        <button
          onClick={() => {
            transfor("#four");
          }}
        >
          Next
        </button>
      </div>
      <div id="four" className="c">
        <div className="sect">
          <h2>Welcome to Profile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nemo aspernatur magni dolorem unde illum iste molestiae, obcaecati
            accusamus aliquid corrupti vitae sed saepe. Voluptate maxime fuga
            voluptatem illo ea!
          </p>{" "}
        </div>{" "}
        <button
          onClick={() => {
            transfor("#five");
          }}
        >
          Next
        </button>
      </div>
      <div id="five" className="c">
        <div className="sect">
          <h2>Welcome to Profile</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nemo aspernatur magni dolorem unde illum iste molestiae, obcaecati
            accusamus aliquid corrupti vitae sed saepe. Voluptate maxime fuga
            voluptatem illo ea!
          </p>{" "}
        </div>
        <button
          onClick={() => {
            transfor("#first");
          }}
        >
          Scroll to Top
        </button>
      </div>
    </div>
  );
}
