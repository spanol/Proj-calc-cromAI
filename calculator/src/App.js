import React, {useState} from 'react';
import "./App.css"

const App = () =>{
  var [Hipotenusa,Cateto_1,Cateto_2] = useState("");

  function Pitagorar() {
    Cateto_1 = document.getElementById('Cateto_1');
    Cateto_2 = document.getElementById('Cateto_2');
    var Hipotenusa = Math.sqrt(Math.pow(Cateto_1,2)+Math.pow(Cateto_2,2))
   document.getElementById('Hipotenusa').write(Hipotenusa)
  }


 

  return (
     <>
     <main>
         <div className='entradas'>
           <form>
             <input name='Cateto_1' type='number' placeholder='Valor do cateto oposto'></input>
             <input name='Cateto_2' type='number' placeholder='Valor do cateto adjacente'></input>
             <input name='Hipotenusa' type='number' placeholder='Valor da hipotenusa' value={Hipotenusa}></input>
           </form>
         </div>
         <div className='Botões de ação'>
           <button>Limpar</button>
           <button onClick={Pitagorar} >Calcular</button>
         </div>
      </main>
     </>
  );
}


export default App;