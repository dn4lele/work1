import { BigHead } from "@bigheads/core";
import { observer } from "mobx-react-lite";

 const Player = observer( ({bighead , name , id , remove}) => {

    return(<>
        <div style={{display:"flex" , alignItems:"center" , justifyContent: "space-between"}}> 
            <div style={{width:"100px" , height:"100px"}}>
                 <BigHead {...bighead} /> 
            </div>

            <h2 onDoubleClick={()=>changename(id)}>{name}</h2>
            <button style={{ color: "red" }} onClick={() =>remove(id)}>X</button>
        </div>

    </>);


});


export default Player;