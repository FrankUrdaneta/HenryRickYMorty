export default function Card(props) {
   return (
      <div>
         <button className="btn btn-primary" onClick={props.onclose}>X</button>
         <h2>Nombre: {props.name}</h2>
         <h2>Especie: {props.species}</h2>
         <h2>Genero: {props.gender}</h2>
         <img  src={props.image} alt="" />
      </div>
   );
}
