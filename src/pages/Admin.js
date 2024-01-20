import Elem from "../view/Elem";
import {lista} from "../model/adatok";

export default function Admin(props){


   
    return(
        <div className="admin">
            <h2>Admin</h2>
            
            <div className="tabla">
            <table>
                <tbody>
                    {
                        lista.map(
                            (elem, index)=>{
                                return <Elem obj={elem} key={index} />
                            }
                        )
                        
                    }
                </tbody>
            </table>
           

            </div>
        </div>
    )
}