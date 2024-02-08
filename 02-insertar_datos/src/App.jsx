const persona = {
  nombre: 'Ismael Florencio Balbuena',
  edad: '22',
  fecha_nacimiento: '08/03/2001',
  lugar_nacimiento: 'Tuxtepec Oaxaca',
  signo: 'Piscis',
  profecion: 'alumno',
  pasatiempo: [
    'Leer',
    'Videojuegos',
    'Ver series',
    'Tocar el piano'
  ],

}

function App(){
return(
  <div>
    <h1>Información personal</h1>
    <hr />
    <ul>
      <li>Nombre: {persona.nombre}</li>
      <li>Edad: {persona.edad}</li>
      <li>Fecha de Nacimiento: {persona.fecha_nacimiento}</li>
      <li>Lugar de Nacimiento: {persona.lugar_nacimiento}</li>
      <li>Signo: {persona.signo}</li>
      <li>Profeción: {persona.profecion}</li>
      <li>Pasatiempo:</li>
      <ul>
        {
          persona.pasatiempo.map((pasatiempo) =>{
            return <li key={pasatiempo}>
              {pasatiempo}
            </li>


          })
        }
        {/*<li>{persona.pasatiempos}[0]}</li>
          /*<li>{persona.pasatiempos}[1]}</li>
          /*<li>{persona.pasatiempos}[2]}</li>
          /*<li>{persona.pasatiempos}[3]}</li>*/}

        
      
      </ul>
    </ul>
  </div>
)
}

export default App
