import { BigHead } from "@bigheads/core";
import { observer } from "mobx-react-lite";

 const Player = observer( ({bighead , name , id , wins , remove ,changename=()=>{} , changepic=()=>{} , addtogame ,isonboard , points , platters , word}) => {

    return(<>
        <div style={{border: '1px solid black'}} >

            <div style={{display:"flex" , alignItems:"center" , justifyContent: "space-between"}}> 
                <div style={{width:"100px" , height:"100px"}}  onDoubleClick={()=>changepic(id)}>
                    <BigHead {...bighead} /> 
                </div>

                <h2 onDoubleClick={()=>changename(id)}>{name}</h2>
                {!isonboard && <>
                    <input type="checkbox"  onClick={()=>addtogame(id)} />
                    <button style={{ color: "red" }} onClick={() =>remove(id)}>X</button>
                    <h3>wins:{wins}</h3>
                </>
                }

                {isonboard &&
                <>
{
  wins == null ? 
  (
    <p>
      <br/><br/><br/>
      <h3>points: {points}</h3>
      <br/><br/>    
      <div style={{display:"flex"}}>
      {platters.map((letter, index) => (
        <>
        <h3 key={index} style={{ color: word.includes(letter) ? "green" : "red" }}>
            {letter} 
        </h3>
        <h3>,</h3>
        </>
        
        
        ))}
      </div>
      
    
        
      
    </p>
  ) 
  : 
  (
    <h3>wins: {wins}</h3>
  )
}                </>

                }
                
            </div>
            
            
        </div>
    </>);


});


export default Player;