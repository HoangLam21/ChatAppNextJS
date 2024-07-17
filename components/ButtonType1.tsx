import { ContentProps } from "@/types/auth-props"

const ButtonType1 = (props:ContentProps)=>{
    return(
        <button className="log-btn btn-1st-type">{props.content}</button>
    )

    
}
export default ButtonType1