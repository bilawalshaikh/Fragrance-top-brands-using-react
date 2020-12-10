import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [meaning, set] = useState(
    <ul>
      <li>
        TOM FORD NOIR:<br></br>5/5
      </li>
      <li>
        PENHALIGON'S JUNIPER SLING:<br></br>4.5/5
      </li>
      <li>
        JO MALONE LONDON HUNTSMAN:<br></br>4.2/5
      </li>
      <li>
        DIOR SAUVAGE:<br></br>4/5
      </li>
    </ul>
  );

  function fu(list) {
    set(list);
  }

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Fragrance Top Brands</h1>
      <p style={{ fontSize: "25px", color: "white" }}>
        “The beauty of fragrance is that it speaks to your heart…and hopefully
        someone else’s” – Elizabeth Taylor
      </p>
      <button
        onClick={() =>
          fu(
            <ul>
              <li>
                TOM FORD NOIR:<br></br>5/5
              </li>
              <li>
                PENHALIGON'S JUNIPER SLING:<br></br>4.5/5
              </li>
              <li>
                JO MALONE LONDON HUNTSMAN:<br></br>4.2/5
              </li>
              <li>
                DIOR SAUVAGE:<br></br>4/5
              </li>
            </ul>
          )
        }
      >
        For Men
      </button>

      <button
        onClick={() =>
          fu(
            <ul>
              <li>
                Jimmy Choo Signature:<br></br>5/5
              </li>
              <li>
                Oud Cologne Intense:<br></br>4.5/5
              </li>
              <li>
                Yves Saint Laurent Black Opium:<br></br>4.2/5{" "}
              </li>
              <li>
                Tom Ford Vanille Fatale:<br></br>4.1/5
              </li>
            </ul>
          )
        }
      >
        For Women
      </button>

      <button
        onClick={() =>
          fu(
            <ul>
              <li>
                Aerin Hibiscus Palm:<br></br>5/5
              </li>
              <li>
                Chanel Coco Mademoiselle:<br></br>4.5/5
              </li>
              <li>
                Giorgio Armani Acqua Di Gioia:<br></br>4.3/5
              </li>
              <li>
                Dolce & Gabbana Shine:<br></br>4.1/5
              </li>
            </ul>
          )
        }
      >
        For Everyone
      </button>

      <hr></hr>

      <h3 style={{ fontSize: "25px", color: "white" }}>
        {" "}
        'Perfume puts the finishing touch to elegance'
      </h3>

      <h3>{meaning}</h3>
    </div>
  );
}
