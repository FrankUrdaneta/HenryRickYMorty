export default function SearchBar(props) {
   console.log(props)
   return (
      <div>
         <input type='search' />
      <button onClick={() => alert("Id Encontrado")}>Agregar</button>
      </div>
   );
}
