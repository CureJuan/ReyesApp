import "./App.css";
import Reyes from "./components/Reyes";
import { useState } from "react";

function App() {
  const reyes = [
    {
      id: "1",
      rey: "Atanagildo",
      imge: require("./image/rey_atanagildo.png"),
      aficion: "comer platos exoticos",
      reynado: "desde el año 1204 al 1219",
      años: 15,
      vacas: 5,
      precio: 169,
      color: "darkmagenta",
    },
    {
      id: "2",
      rey: "Ataulfo",
      imge: require("./image/rey_ataulfo.png"),
      aficion: "comer toros sin pelar",
      reynado: "desde el año 1108 al 1113",
      años: 5,
      vacas: 10,
      precio: 19,
      color: "cyan",
    },
    {
      id: "3",
      rey: "Ervigio",
      imge: require("./image/rey_ervigio.png"),
      aficion: "tener a sus subditos siempre al lado",
      reynado: "desde el año 1009 al 1016",
      años: 7,
      vacas: 15,
      precio: 279,
      color: "royalblue",
    },
    {
      id: "4",
      rey: "Incognito",
      imge: require("./image/rey_incognito.png"),
      aficion: "nadie la sabe",
      reynado: "nunca",
      años: "XX",
      vacas: "XXXX",
      precio: 999,
      color: "darkolivegreen",
    },
    {
      id: "5",
      rey: "Leogivildo",
      imge: require("./image/rey_leogivildo.png"),
      aficion: "cazar patos salvajes",
      reynado: "desde el año 1330 al 1348",
      años: 18,
      vacas: 19,
      precio: 599,
      color: "crimson",
    },
    {
      id: "6",
      rey: "Sisebuto",
      imge: require("./image/rey_sisebuto.png"),
      aficion: "la carne podrida",
      reynado: "desde el año 1081 al 1090",
      años: 9,
      vacas: 39,
      precio: 769,
      color: "hotpink",
    },
    {
      id: "7",
      rey: "Recesvinto",
      imge: require("./image/rey_recesvinto.png"),
      aficion: "leer a Hegel en arameo",
      reynado: "desde el año 1401 al 1420",
      años: 19,
      vacas: 29,
      precio: 109,
      color: "teal",
    },
    {
      id: "8",
      rey: "Teodorico",
      imge: require("./image/rey_teodorico.png"),
      aficion: "la cría del escarabajo en almíbar",
      reynado: "desde el año 1510 al 1543",
      años: 33,
      vacas: 38,
      precio: 29,
      color: "palegreen",
    },
  ];

  const [total, setTotal] = useState(0);
  const reload = () => {
    window.location.reload(true);
}


  return (
    <>
      <div className="fondo">
        <h1 className="title">Los Reyes de Monarkiland</h1>
        <h4 className="total">
          <b>Precio Total: $ {total}</b>
        </h4>
        <button className="recargar" onClick={reload}>Recargar</button>
        <Reyes reyes={reyes} setTotal={setTotal} total={total} />
      </div>
    </>
  );
}

export default App;
