import { lista } from "../model/adatok";
import Kartya from "../view/Kartya";

export default function Public(props){
    return(
        <div className="public">
            <h2>Public</h2>
            <article className="row">
                {lista.map((elem, index)=>{
                    return <Kartya obj={elem} key={index}/>
                })

                }
            </article>
        </div>
    )
}