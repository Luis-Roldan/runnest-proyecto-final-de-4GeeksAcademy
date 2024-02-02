import React, { useContext } from "react";
import { Link,  } from "react-router-dom";

export const Puntuacion = () => {
    <div className="container">
        <div className="raiting">
            <input type="radio" name="clr1" style="--c:#ff9933"></input>
            <input type="radio" name="clr1" style="--c:#ff9933"></input>
            <input type="radio" name="clr1" style="--c:#ff9933"></input>
            <input type="radio" name="clr1" style="--c:#ff9933"></input>
            <input type="radio" name="clr1" style="--c:#ff9933"></input>
        </div>
            <div className="raiting">
            <input type="radio" name="clrl2" style="--c:#ffffff"></input>
            <input type="radio" name="clrl2" style="--c:#ffffff"></input>
            <input type="radio" name="clrl2" style="--c:#ffffff"></input>
            <input type="radio" name="clrl2" style="--c:#ffffff"></input>
            <input type="radio" name="clrl2" style="--c:#ffffff"></input>
        </div>
        <div className="raiting">
            <input type="radio" name="clrl3" style="--c:#2ae418"></input>
            <input type="radio" name="clrl3" style="--c:#2ae418"></input>
            <input type="radio" name="clrl3" style="--c:#2ae418"></input>
            <input type="radio" name="clrl3" style="--c:#2ae418"></input>
            <input type="radio" name="clrl3" style="--c:#2ae418"></input>
        </div>

        <Link to="/">
          <p>Home</p>  
          </Link>
    </div>
}