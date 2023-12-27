import PlayersList from "../components/PlayersList";
import BoardG from "../components/boardplayers";
import {PlayerStore} from  "../states/PlayerStore";
import { game } from "../states/game";

export default function App() {

    const players= new PlayerStore();
    const managegame= new game();


    return (
      <>
        <div style={{display: 'flex' , width: '100%'}}>

          <div style={{flex: '1',padding: '10px' , border: '5px solid black'}}>

            <div style={{display:"flex" , justifyContent:"space-between"}}>
                <h1>Players</h1>
                <button style={{width:"100px", height:"90px"}} onClick={()=>players.addPlayer()}>Add</button>
            </div>



            <PlayersList players={players} managegame={managegame}/>
          
          </div>
          <div style={{flex: '3',padding: '10px' , border: '5px solid black'}}>
            <h1>game</h1>
            <BoardG managegame={managegame}></BoardG>
          </div>
        </div>
      </>
    );
  }
  