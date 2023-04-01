

import {Routes,Route} from "react-router-dom";

import Home from "../Components/Home/Home"
import Furniture from "../Components/Furniture/Furniture";
import Mattresses from "../Components/Mattresses/Mattresses";
import HomeDecor from "../Components/HomeDecor/HomeDecor"
import Furnishing from "../Components/Furnishing/Furnishing"
import KitchendAndDining from "../Components/KitchenAndDining/KitchendAndDining"
import SingleProdPage from "../Components/Furniture/SingleProdPage";
import PageNotFound from "../Components/PageNotFound/PageNotFound";



function AllRoutes(){


    return (<>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/furniture" element={<Furniture/>}/>
    <Route path="/mattresses" element={<Mattresses/>}/>
    <Route path="/homeDecor" element={<HomeDecor/>}/>
    <Route path="/furnishing" element={<Furnishing/>}/>
    <Route path="/kitchenAndDining" element={<KitchendAndDining/>}/>
    <Route path="/furniture/:id" element={<SingleProdPage />}/>
    <Route path="*" element={<PageNotFound />} />
  </Routes>
    
    </>)
}

export default AllRoutes;


