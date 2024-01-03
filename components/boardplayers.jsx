import { observer } from "mobx-react-lite";
import Player from "./Player";
import { useEffect, useRef } from "react";



const BoardG = observer(({managegame,players}) => {

    let guessinterval = useRef(null);

    function finishgame() {
        addwin();
        //reset the filds
        //everyone now have 0 points
        players.players.forEach(player => {
            player.points=0;
        });

        managegame.isstarted=false;
        managegame.word="";
        managegame.letters.clear();
        managegame.players.clear();
        
        players.players.forEach((player)=>{
            player.pletters=[,];
        });
    }
    function addwin(){
        let maxPoints = -1;
        let winner = null;
        let isTie = false;
        
        managegame.players.forEach(player => {
            if (player.points > maxPoints) {
                maxPoints = player.points;
                winner = player.id;
                isTie = false;
            }
            else if (player.points === maxPoints && player.id !== winner) {
                isTie = true;
            }
        });

        if (isTie) {
            alert("It's a tie!");
        } else if (winner!=null) {
            const index = players.players.findIndex(player => player.id === winner);
            alert(players.players[index].name + " has won!");
            players.players[index].wins++;
        }
        else{
            alert("something wrong");

        }
    }

    function guessletter(randomplayerindex) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let randomIndex = Math.floor(Math.random() * alphabet.length);
        
        while (managegame.letters.includes(alphabet[randomIndex])) {
            //if all the the wordletters are in the managegame.letters i want it also to stop
            const wordLetters = managegame.word.split("");
            if (wordLetters.every(letter => managegame.letters.includes(letter))) {
                clearInterval(guessinterval.current);
                finishgame();
                return;
            }

            randomIndex = Math.floor(Math.random() * alphabet.length);
        }
        //good came here to add
        managegame.letters.push(alphabet[randomIndex]);
        //console.log(managegame.players[randomplayerindex].name+"letters "+managegame.players[randomplayerindex].pletters)
        managegame.players[randomplayerindex].pletters.push(alphabet[randomIndex]);

        if(managegame.word.includes(alphabet[randomIndex])){
            managegame.players[randomplayerindex].points++;
        }

    }

    useEffect(() => {
        if (managegame.isstarted) {
            guessinterval.current = setInterval(() => {
                let randomplayerindex = Math.floor(Math.random() * managegame.players.length);
                guessletter(randomplayerindex);
            }, managegame.timeinterval);
        }

        return () => {
            clearInterval(guessinterval.current);
        };
    
    }, [managegame.isstarted, managegame.timeinterval]);


    return (<>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
            {managegame == null ? null : managegame.players.map(p => <Player name={p.name} bighead={p.bighead} id={p.id} points={p.points} isonboard={true} platters={p.pletters} word={managegame.word}/>)}
        </div>

    <button onClick={()=>{managegame.isstarted=true; managegame.newword(); }} style={{width:"150px" ,height:"100px"}} disabled={!(managegame != null && managegame.players.length >= 2 && managegame.players.length <= 5 && managegame.isstarted==false )}>Start</button>
    <input type="range" min="80" max="1000" step="10" defaultValue={managegame.timeinterval} onChange={(e) => {
        managegame.timeinterval = e.target.value;
        //change interval time to managegame.timeinterval
        
        
    }}></input>
    <text>{managegame.timeinterval}</text>
    </div>

    <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{textSizeAdjust:"50px" , alignItems:"center"}}>{managegame.word.split("").map((letter)=> managegame.letters.includes(letter)? letter : "*" )}</h1>
    </div>

    <div style={{ justifyContent:"end" , border: '1px solid black'}}>
        <h2>the used letters</h2>
        <h3>{managegame.letters.join(", ")}</h3>
    </div>
    
    </>);
});

export default BoardG;