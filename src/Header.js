import React from "react";

function Header(props) {
    if(props.menu === "não"){
        return (

            <p> Sem menu</p>
        )
            
    }else{
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="./">Home</a>
                        <a class="nav-link" href=".">Novidades</a>
                        <a class="nav-link" href="./index.html">Preço</a>
                        <a class="nav-link disabled" href="./" aria-disabled="true">Desabilitado</a>
                    </div>
                </div>
            </div>
        </nav>
   );
    }
}

export default Header;