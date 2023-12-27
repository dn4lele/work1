import { observer } from "mobx-react-lite";
import Player from "./Player";

 const PlayersList = observer(({players , managegame}) => {
    
    function removeplayer(id){
        players.remove(id);
        managegame.removefromgame(id);
    }

    function changename(id){
        let playerArray = players.players.filter(x => x.id === id);
    
        if (playerArray.length > 0) {
            
            let playerName = prompt("change name", playerArray[0].name);    
            if(playerName==null){
                playerName="none"
            }
            else if(playerName.trim() == "" )
            {
                playerName="none"
            }
            
            players.changename(id, playerName);
        } else {
            console.error(`Player with ID ${id} not found.`);
        }
    }
    function changepic(id){
        players.changepic(id);
    }

    function addtogame(id){
        let playerArray = players.players.filter(x => x.id === id);
        managegame.addtogame(playerArray[0]);
    }

    return (<>
                {players.players.map(p => <Player name={p.name} bighead={p.bighead} id={p.id} wins={p.wins} remove={removeplayer}  changename={changename} changepic={changepic} addtogame={addtogame} isonboard={managegame.isstarted}/>)}
    </>)
});

export default PlayersList ;