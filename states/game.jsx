import { makeObservable , observable , action, computed} from "mobx";
import words from "../components/words";

export class game {
    players = [];
    isstarted=false
    letters=[];
    id = 0 ;
    word="";
    timeinterval=500
    constructor() {
        makeObservable(this, {
            players:observable,
            addtogame:action,
            removefromgame:action,
            timeinterval:observable,
            isstarted:observable,
            word:observable,

            letters:observable,
          
        });
    }
  
    newword() {    
        if(this.isstarted){
            const randomIndex = Math.floor(Math.random() * words.length);
            if(this.word == "")
                this.word=words[randomIndex];
            return this.word;
        }
        return "";
      }

    addtogame(player) {
        const index = this.players.findIndex(p => p.id === player.id);
        if (index != -1) {
            this.removefromgame(player.id);
        } else {
            this.players.push(player);
        }
    }

    removefromgame(playerId) {
        const index = this.players.findIndex(p => p.id === playerId);
        if (index !== -1) {
            this.players.splice(index, 1);
        }
    }


}