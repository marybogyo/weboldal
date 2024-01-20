export default function Elem(props){
    function kattintas(){
        console.log("ezaz", props.index)
        props.kattintasfv(props.index)
    }
    return(

        <tr className="elem" onClick={kattintas}> 
        {

            Object.keys(props.obj).map((kulcs)=>{
                if(kulcs==="img"){
                   return <td><img className="img-thumbnail" src={props.obj.img} alt="" /></td>
                }else{
                    return <td>{props.obj[kulcs]}</td>
                }
                
            })
        }

             
        </tr>
    )
}