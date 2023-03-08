import { useState, useEffect } from "react"
import Library from "./Components/Library"
import data from '../public/data/songs.json'
import Detail from "./Components/Detail";

function App() {
  //all data
  const [Songs, setSongs] = useState([]);
  //id album 
  const [music, setMusic] = useState(1);
  //open 
  const [toogle, setToggle] = useState(true)

  useEffect(() => {
    setSongs(data)
  }, [music, toogle])
 
  return (
    <>
      <div className="app">
        {
          toogle ?
            <section className="library-section">
              {Songs.map((item, i) => <Library setMusic={setMusic} key={i} {...item} />)}
            </section>
            : ''
        }


        <section className={`right-home ${toogle ? 'initial' : ''}`}>
          <Detail music={music} setMusic={setMusic} setToggle={setToggle} toogle={toogle} />
        </section>
      </div>
    </>
  )
}
export default App
