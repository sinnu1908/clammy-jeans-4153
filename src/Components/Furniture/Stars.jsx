

import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const icons={
    fontSize:"1rem",
     color:"orange",
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


    // const Wrapper=styled.section`
    // .icon-style{
    //     display:flex;
    //     gap:0.2rem;
    //     align-items:center;
    //     justify-content:flex-start;

    // .icon{
    //     font-size:2rem;
    //     color:orange;
    // }

    // .empty-icon{
    //     font-size:2.6rem;
    // }
    // p{
    //     margin:0;
    //     padding-left:1.2rem;
    // }
    
    // }`


  return (

    <div>

    {ratings}
    <p>({NumReviews} customers reviewes)</p>

    </div>
  )
}

export default Stars