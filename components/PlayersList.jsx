import { observer } from "mobx-react-lite";
import Player from "./Player";

 const PlayersList = observer(({players}) => {
    
    function removeplayer(id){
        players.remove(id);
    }

    return (<>
            {players.players.map(p => <Player name={p.name} bighead={p.bighead} id={p.id} remove={removeplayer} />)}
    </>)
});

export default PlayersList ;