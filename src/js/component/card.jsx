import React from "react";
import imgRigo from "../../img/rigo-baby.jpg"

export const CardComp = () => {
    return (
        <div className="card m-2" style = {{width: "18rem"}}>
            <img src={imgRigo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta.</h5>
                <p className="card-text">¡Un poco de texto en castellano para que no desentone con lo demás! :D</p>
                <a href="#" className="btn btn-primary">¡Vámonos!</a>
            </div>
        </div>
    )
}