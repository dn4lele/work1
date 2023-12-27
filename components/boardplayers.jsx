import { observer } from "mobx-react-lite";
import Player from "./Player";
import { useEffect, useState } from "react";

const BoardG = observer(({managegame}) => {

    



    return (<>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            {managegame == null ? null : managegame.players.map(p => <Player name={p.name} bighead={p.bighead} id={p.id} points={p.points} isonboard={true}/>)}
        </div>

    <button onClick={()=>{managegame.isstarted=true}} style={{width:"150px" ,height:"100px"}} disabled={!(managegame != null && managegame.players.length >= 2 && managegame.players.length <= 5 && managegame.isstarted==false )}>Start</button>
    </div>

    <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{textSizeAdjust:"50px" , alignItems:"center"}}>{managegame.word.split("").map((letter)=> managegame.letters.includes(letter)? letter : "*" )}</h1>
    </div>
    
    </>);
});

export default BoardG;