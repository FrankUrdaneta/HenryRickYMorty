import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   console.log(characters)
   let person=characters.map((element)=>
  <div className='container '>
   <div className='row flex-row justify-content-center my-4 border-primary flex-wrap'>
      <div className='col col-12 '>
   <button className="btn btn-primary" onClick={props.onclose}>X</button>
   <h2>Nombre: {element.name}</h2>
   <h2>Especie: {element.species}</h2>
   <h2>Genero: {element.gender}</h2>
   </div>
   
   <img  src={element.image} alt="" />
   </div>
   </div>
   
   )
   return <div className='container'>
      <div className=''>

      </div>
      {person}
      </div>;
}
