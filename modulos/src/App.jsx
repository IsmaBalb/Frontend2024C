import Listitem from "./Listitem"

const links = [
  {
  name: 'Google',
  url: 'https://www.google.com.mx'
},

{
  name: 'Facebook',
url: 'https://www.facebook.com'

},
{
  name: 'Twitter',
url: 'https://www.twitter.com' 
}
]

function App(){
  return(
    <div>
      <h1>Links</h1>
      <hr />
      <ul>
        {
          links.map((link) => (
            <Listitem
            key={link.name}
            name={link.name}
            url={link.url}
            ></Listitem>
          ))
        }
        {/*{links.map((link) => )<li key={link.name}><a href={link.url}></a></li>))}*/}
      </ul>
    </div>

    )
}

export default App
