import { makeObservable , observable , action, computed} from "mobx";
import words from "../components/words";

export class game {
    players = [];
    isstarted=false
    letters=[];
    id = 0 ;

    constructor() {
        makeObservable(this, {
            players:observable,
            addtogame:action,
            removefromgame:action,

            isstarted:observable,
            word:computed,

            letters:observable,
          
        });
    }
  
    get word() {    
        if(this.isstarted){
            const randomIndex = Math.floor(Math.random() * words.length);
            
            return words[randomIndex];
        }
        return "";
      }

    addtogame(player) {
        const index = this.players.findIndex(p => p.id === player.id);
        if (index !== -1) {
            this.removefromgame(player.id);
        } else {
            this.players.push({...player,points:0});
        }
    }

    removefromgame(playerId) {
        const index = this.players.findIndex(p => p.id === playerId);
        if (index !== -1) {
            this.players.splice(index, 1);
        }
    }


}