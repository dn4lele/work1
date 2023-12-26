import { makeObservable , observable , action, computed} from "mobx";
import {getRandomBighead} from "../components/bigHeadDataRandomizer";

export class PlayerStore {
    players = [];
    id = 0 ;

    constructor() {
        makeObservable(this, {
            players:observable,
            addPlayer:action,
            remove:action
        });
    }
  
    addPlayer() {
        let name= prompt("please enter player name");
        this.players.push({ id: this.id++,   name:name, bighead: getRandomBighead() });
        {console.log(this.players)}

    }

    remove(id) {
        

        const index = this.players.findIndex(player => player.id == id);
        if (index != -1) {
            this.players.splice(index, 1);
        }
    }
}