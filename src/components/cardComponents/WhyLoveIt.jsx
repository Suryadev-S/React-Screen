import { FaRegCircleCheck } from "react-icons/fa6";

const WLI = ({list}) => {
    return ( 
        <>
        <div className="card-body-highlight-3">
            <div>Why we love it</div>
            {list.map((item)=>{
                return(
                    <div>
                        <span><FaRegCircleCheck /></span>
                        <span>{item}</span>
                    </div>
                )
            })}
        </div>
        </>
     );
}
 
export default WLI;