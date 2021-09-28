
import Personajes from "./Personajes de videojuegos.json";

export function personajes() {

  return (
  <ul>

    {personajes.map((personajes) => (
   
       <li key={personajes.name}>{personajes.descripcion}</li>

    ))}
    
    </ul>
    );
    
}
