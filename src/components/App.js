
import React, {Fragment, useEffect,useState} from 'react';
import '../Styles/App.css';
import { Menu, Dropdown, Button, Space, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



function App() {

  const [AlAD, SetAlAD] = useState()
  const [IdAD, SetIdAD] = useState()
  const [Dato, SetDato] = useState(["Cualquier categoria","animal","career","celebrity","dev","explicit","fashion","food","history","money","movie","music","political","religion","science","sport","travel"])
  const [BusqD, SetBusqD] = useState([]);
  const [Cons, SetCons] = useState("Cualquier categoria")
  
  const Elmenu= async () => {
    const url = await fetch('https://api.chucknorris.io/jokes/categories')
    const alet= await url.json()
    const aleto=alet
    //console.log(Dato)
  }
  const menu=() =>(
  Dato.map(elemento=>(
    <Button class="boton1" icon={<SearchOutlined/>} onClick={()=>insertar(elemento)} >{elemento}</Button>
    ))
  );
  
  const handleInputChange = (event) => {
    const hola= event.target.value
    console.log(hola)
    SetIdAD(hola)
    
  }
  

  const AdviAL= async (text) => {
 
    const url = await fetch('https://api.chucknorris.io/jokes/search?query='+IdAD)
    const alet= await url.json()
    const aleto= alet.result
  
    SetBusqD(aleto)
    console.log(BusqD)

    //SetAlAD(aleto.advice)
    //SetAlID(aleto.id)
    //console.log();
  }
  const insertar =async (texto)=>{
    console.log(texto)
    const url = await fetch('https://api.chucknorris.io/jokes/random')
    const alet= await url.json()
    const aleto=alet.value
    SetAlAD(aleto)

    switch (texto){
      case "Cualquier categoria":
        break;
      default:
        const url1 = await fetch('https://api.chucknorris.io/jokes/random?category='+texto)
        const alet= await url1.json()
        const aleto=alet.value
        SetCons(texto)
        SetAlAD(aleto)
    }
    
  }

  useEffect(() => {
    insertar("Cualquier categoria");
    AdviAL();
    Elmenu();
  },[])
  
  return (
    <>
    <div id="cab">
      <div id="mitad">
        <div id="cab">
          <p class="titulo">Chuck Norrys Jokes</p><tr/>
           </div>
           <div id="mitad1">*categorias 
           <Button class="boton1" onClick={()=>menu()} >Categorias</Button>
              {Dato.map(elemento=>(
           <Button class="boton1" onClick={()=>insertar(elemento)} >{elemento}</Button>
    ))}
          </div>
           
           <div id="mitad1"> <Button class="boton1" icon={<SearchOutlined/>} onClick={()=>insertar(Cons)} >Siguiente Broma</Button></div>
        <p>{AlAD}</p><tr/>
      </div>

    </div>




    <div id="cab">
    <p class="titulo">Buscador de Jokes</p><tr />

    
    </div>
    
    
    <div id="cab">
    <p> *Palabra clave: </p>
    <input 
            type="text" 
            placeholder="Ingrese el texto" 
            className="form-control" 
            onChange={handleInputChange} 
            name="nombre" />
          
      <tr/>
    <button class="boton1" onClick={()=>AdviAL({IdAD})}>Buscar</button><tr/>
    </div>
    
    
    
    <div id="cab">
      <p class="titulo">Resultados de la busqueda</p><tr />
      </div>
      <div id="cab">
      <div id="mitad2">
      <table>
            <thead>
              <tr>
                <th>Texto</th>
                <th>Categorias</th>
              </tr>
            </thead>
            {BusqD.map(elemento =>(
              <tr>
              <td>{elemento.value}</td>
              <td>{elemento.categories}</td>
            </tr>))}
            
            <tbody>
              
            </tbody>
          </table>
        
      </div>
      </div>
      
      
      


    </>
    
    
  )  
}




export default App;
