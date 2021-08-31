
import "./App.css"

const App = () =>{

  function Calcular_Hipotenusa() {
   var Cateto_1 = parseInt(document.getElementById('Cateto_1'));
   var Cateto_2 = parseInt(document.getElementById('Cateto_2'));
   var Hipotenusa = Math.sqrt(Math.pow(Cateto_1,2)+Math.pow(Cateto_2,2))
   document.getElementById('Hipotenusa').innerHTML="The Length of hypotenuse is= "+Hipotenusa;
  }

  

  return (
     <>
     <nav><ul>Boas vindas, caro Pitagoras!</ul></nav>
     <aside id="left">Neste pergaminho, vou mostrar-lhe todo o poder do fruto de vosso esforço...</aside>
     <header>Calculadora do teorema de pitagoras:</header>
     <section id="Calculadora">
       <article>Digite o valor de vossos catetos e retornarei-te vossa hipotenusa.</article>
       <div id="Entradas">
       <form>
       <input id='Cateto_1' type='number' placeholder='Valor do cateto oposto'></input>
       <input id='Cateto_2' type='number' placeholder='Valor do cateto adjacente'></input>
       <p id='Hipotenusa'></p>
       </form>
       </div>
       <div id="Botões de ação">
       <button type="reset">Limpar</button>
       <button type="submit" onClick={Calcular_Hipotenusa} >Calcular</button>
       </div>
     </section>
     <footer></footer>
     </>
  );
}


export default App;