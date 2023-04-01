import style from "./FryDeals.module.css"

const ImageDiv=[
    {image:"https://ii2.pepperfry.com/media/catalog/product/g/r/494x544/green-artificial-grass-solid-12x18-inches-anti-skid--doormat-by-status-green-artificial-grass-solid--drkll9.jpg",
    name:"Green Artificial Grass Solid...",
    price:79,
    mrp:399,
    discount:80},

    {image:"https://ii1.pepperfry.com/media/catalog/product/p/h/494x544/philodendron-oxycardium-green-natural-plant-in-white-self-watering-plastic-pot-by-ugaoo-philodendron-2aij6d.jpg",
    name:"Philodendron Oxycardium Gr...",
    price:149,
    mrp:569,
    discount:74},

    {image:"https://ii1.pepperfry.com/media/catalog/product/m/u/494x544/multicolor-floral-280-tc-cotton-blend-double-queen-size-bedsheet-with-2-pillow-covers-by-hosta-homes-7p2zmo.jpg",
    name:"Blue Floral 280 TC Cotton Ble...",
    price:329,
    mrp:999,
    discount:67},

    {image:"https://ii1.pepperfry.com/media/catalog/product/f/a/494x544/fashionable-beige-jute-shade-table-lamp-with-black-base-by-new-era-fashionable-beige-jute-shade-tabl-amwn49.jpg",
    name:"Carolle Beige Jute Shad...",
    price:369,
    mrp:999,
    discount:63},

    {image:"https://ii3.pepperfry.com/media/catalog/product/c/r/494x544/cream-abstract-machine-made-nylon-carpet-2-5x2-5-feet-by-status-cream-abstract-machine-made-nylon-ca-afvfjo.jpg",
    name:"Cream Abstract Polyest...",
    price:229,
    mrp:599,
    discount:62},

    {image:"https://ii2.pepperfry.com/media/catalog/product/b/l/494x544/black---metal-and-glass-hexagonal-vanity-tray-by-lamjum-black---metal-and-glass-hexagonal-vanity-tra-m1rrxk.jpg",
    name:"Hexagon Mirror Base Bla...",
    price:499,
    mrp:1575,
    discount:68},
]

const FryDeals = () => {
  return (
    <div>
        <div className={style.heading}>
            <h2>Shop What the Fry Deals</h2>
        </div>

        <div className={style.pDiv}>
{ImageDiv.map((item)=>{
    const {image,name,price,mrp,discount}=item;
    return  <div key={image} className={style.cDiv}>
            <img src={image} alt="image"/>
            <p>{name}</p>
            <div className={style.cPriceDiv}>
                <p>₹ {price}</p>
                <p>₹ {mrp}</p>
                <p>{discount}%</p>
            </div>
            </div>
})}

    </div>
    </div>
  )
}

export default FryDeals;