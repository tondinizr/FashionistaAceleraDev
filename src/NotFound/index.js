import React from "react";

import "./notfound.scss";

const NotFound = () => (
  <div className="pagenotfound">
    <h1>
      <span>ERRO</span> Esta página não está disponível
    </h1>
    <p>Pedimos desculpa, mas o endereço que inseriu não está disponível!</p>
    <div className="buttons">
      <a className="btn btn-default btn-md" href="/" title="Início">
        <span>Página Inicial</span>
      </a>
    </div>
  </div>
);

export default NotFound;
