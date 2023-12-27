import { BigHead } from "@bigheads/core";
import { observer } from "mobx-react-lite";

 const Player = observer( ({bighead , name , id , remove ,changename=()=>{} , changepic=()=>{} , addtogame ,isonboard , points}) => {

    return(<>
        <div style={{border: '1px solid black'}} >

            <div style={{display:"flex" , alignItems:"center" , justifyContent: "space-between"}}> 
                <div style={{width:"100px" , height:"100px"}}  onDoubleClick={()=>changepic(id)}>
                    <BigHead {...bighead} /> 
                </div>

                <h2 onDoubleClick={()=>changename(id)}>{name}</h2>
                {!isonboard && <>
                    <input type="checkbox" onClick={()=>addtogame(id)} />
                    <button style={{ color: "red" }} onClick={() =>remove(id)}>X</button>
                </>
                }
               
                
            </div>
            {isonboard && <>
                    <h3>points:{points}</h3>
                </>
            }
        </div>
    </>);


});


export default Player;