

import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const icons={
    fontSize:"16px",
     color:"orange",
     marginRight:"3px",
     
    
}


const Stars = ({stars,reviews}) => {
    const NumStar=Number(stars);
    const NumReviews=Number(reviews);



    const ratings=Array.from({length:5},(elem,index)=>{
     

     return (
        <span key={index}>
            {NumStar>=index+1?(<FaStar style={icons}/>)
            :NumStar>=index+0.5?(<FaStarHalfAlt style={icons}/>)
            :<AiOutlineStar style={icons}/>}
        </span>
     )

    })


  return (

    <div>

    {ratings}

    <span style={{color:"teal", fontSize:"14px"}}>({NumReviews} customers reviewes)</span>

    </div>
  )
}

export default Stars