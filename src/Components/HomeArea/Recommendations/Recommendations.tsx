import { SyntheticEvent } from "react";
import "./Recommendations.css";

export function Recommendations(): JSX.Element {

    const item1 = "Irish Coffee"
    const item2 = "Blueberry"
   
    

    function Recommend1(): void {

        alert(`We recommend ${item1}`)
        alert(item1)
         
     }
     function Recommend2(args : SyntheticEvent): void {

         console.log(args.target);//The element raising the event
         alert(`We recommend ${item2}`)
       
         
     }
    
    
     function Recommend3(item:string): void {

       alert(item)
      
        
    }
    return (
        <div className="Recommendations Box">

            <p>
                <button onClick={Recommend1}>Recommend1</button>
                <button onClick={Recommend2}>Recommend2</button>
                <button onClick={()=>Recommend3("CHocolate")}>Recommend3</button>
            </p>
			
        </div>
    );
}
