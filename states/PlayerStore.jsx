import { makeObservable , observable , action, computed} from "mobx";
import {getRandomBighead} from "../components/bigHeadDataRandomizer";

export class PlayerStore {
    players = [];
    id = 0 ;

    constructor() {
        makeObservable(this, {
            players:observable,
            addPlayer:action,
            remove:action,
            changename:action,
            changepic:action,
        });
    }
  
    addPlayer() {
        let name= prompt("please enter player name");
        this.players.push({ id: this.id++,   name:name, bighead: getRandomBighead()  });
    }

    remove(id) {
        const index = this.players.findIndex(player => player.id == id);
        if (index != -1) {
            this.players.splice(index, 1);
        }
    }

    changename(id,newname) {
        const index = this.players.findIndex(player => player.id == id);
        if (index != -1) {
            this.players[index].name = newname;
        }
    }

    changepic(id) {
        const index = this.players.findIndex(player => player.id == id);
        if (index != -1) {
            this.players[index].bighead = getRandomBighead();
        }
    }
}