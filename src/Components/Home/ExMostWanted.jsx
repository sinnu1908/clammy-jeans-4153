import style from "./ExMostWanted.module.css";
import { Navigate } from "react-router-dom";

// Images=[
//     {image:"https://ii1.pepperfry.com/assets/7ea09846-ebd7-45e1-b86b-f0426cc88988.jpg",
//      name:"Dining Sets",
//      info:"2, 4, 6 & 8 Seater Dining Sets"},

//      {image:"https://ii2.pepperfry.com/assets/5fb2c9fb-6b94-4fa4-b237-9ab800b75fc0.jpg",
//      name:"Nature Print Cushion Covers",
//      info:"Floral & Colourful Cushion Covers"},

//      {image:"https://ii1.pepperfry.com/assets/304deeec-4f8b-48d5-b687-6877b8035892.jpg",
//      name:"Floral Queen Bedsheets",
//      info:"Cotton & Microfibre Bedsheets"},

//      {image:"https://ii1.pepperfry.com/assets/3e327cc9-3fb0-41b8-a7a3-432e2750394c.jpg",
//      name:"Wardrobes",
//      info:"2, 3,4 Door, Sliding Door"},

//      {image:"https://ii2.pepperfry.com/assets/1f365eaa-524f-46e7-97e8-96f6abece927.jpg",
//      name:"Study Tables",
//      info:"Writing,Office and Computer Tables"},

//      {image:"https://ii2.pepperfry.com/assets/a8057d31-e6a3-4055-8fb9-c2acb241fd0c.jpg",
//      name:"3 Seater Sofas",
//      info:"Modern, Contemporary, Chesterfield Sofas"},
// ]

const ExMostWanted = () => {

  return (<div>



    <div className={style.heading}>
    <h2>Explore Most Wanted</h2>
  </div>


    <div className={style.pDiv}>

       <div>
        <img src="https://ii1.pepperfry.com/assets/7ea09846-ebd7-45e1-b86b-f0426cc88988.jpg"
        alt="Dining Sets"/>
        <h4>Dining Sets</h4>
        <p>2, 4, 6 & 8 Seater Dining Sets</p>
       </div>

       <div>
        <img src="https://ii2.pepperfry.com/assets/5fb2c9fb-6b94-4fa4-b237-9ab800b75fc0.jpg"
        alt="Nature Print Cushion Covers"/>
        <h4>Nature Print Cushion Covers</h4>
        <p>Floral & Colourful Cushion Covers</p>
       </div>

       <div>
        <img src="https://ii1.pepperfry.com/assets/304deeec-4f8b-48d5-b687-6877b8035892.jpg"
        alt="Nature Print Cushion Covers"/>
        <h4>Floral Queen Bedsheets</h4>
        <p>Cotton & Microfibre Bedsheets</p>
       </div>

       <div>
        <img src="https://ii1.pepperfry.com/assets/3e327cc9-3fb0-41b8-a7a3-432e2750394c.jpg"
        alt="Wardrobes"/>
        <h4>Wardrobes</h4>
        <p>2, 3,4 Door, Sliding Door</p>
       </div>

       <div>
        <img src="https://ii2.pepperfry.com/assets/1f365eaa-524f-46e7-97e8-96f6abece927.jpg"
        alt="Nature Print Cushion Covers"/>
        <h4>Study Tables</h4>
        <p>Writing,Office and Computer Tables</p>
       </div>

       <div >
        <img src="https://ii2.pepperfry.com/assets/a8057d31-e6a3-4055-8fb9-c2acb241fd0c.jpg"
        alt="Nature Print Cushion Covers"/>
        <h4>Floral Queen Bedsheets</h4>
        <p>3 Seater Sofas</p>
       </div>

    </div>


</div>
  )
}

export default ExMostWanted;