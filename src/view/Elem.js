import './Elem.css';
export default function Elem(props){
    function kattintas(){
 
    }
    return(

        <tr className="elem" > 
        {

            Object.keys(props.obj).map((kulcs)=>{
                if(kulcs==="img"){
                   return <td><img className="img-thumbnail" src={props.obj.img} alt="" /></td>
                }else{
                    return <td className='txt'>{props.obj[kulcs]}</td>
                }
                
            })
        }

             
        </tr>
    )
}