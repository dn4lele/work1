import PlayersList from "../components/PlayersList";
import {PlayerStore} from  "../states/PlayerStore";

export default function App() {

    const players= new PlayerStore();
    return (
      <>
        <div style={{display: 'flex' , width: '100%'}}>

          <div style={{flex: '1',padding: '10px' , border: '1px solid black'}}>

            <div style={{display:"flex"}}>
                <h1>Players</h1>
                <button style={{width:"100px", height:"90px"}} onClick={()=>players.addPlayer()}>Add</button>
            </div>



            <PlayersList players={players} />
          
          </div>
          <div style={{flex: '3',padding: '10px' , border: '1px solid black'}}>
            <h1>game</h1>
          </div>
        </div>
      </>
    );
  }
  