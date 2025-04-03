import React from "react";
import './Aside.css';



function Aside(props) {
    

    return (
        <div className='aside'>
            <h1>FOOTER</h1>
            <div>
                <p>Prop 1: {props.prop1}</p>
                <p>Prop 2: {props.prop2}</p>
            </div>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger">Perigo</button>
                <button type="button" class="btn btn-warning">Atenção</button>
                <button type="button" class="btn btn-success">Sucesso</button>
            </div>
        </div>
    );
}

export default Aside;