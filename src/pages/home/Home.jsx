import React from "react";

const Home = ({nome, idade}) => {

    return(<>
    <h1>
        Está é minha página inicial!
        <p>Meu nome é {nome} e minha idade é {idade}</p>
    </h1>
    
    </>);
}

export default Home;