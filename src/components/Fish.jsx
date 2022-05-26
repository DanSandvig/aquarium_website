import { useState } from "react";

import FishDisplayer from "./FishDisplayer";
import FishManipulator from "./FishManipulator";

const Fish = () => {

    const fishObj = {
        "species" : "Guppy",
        "diet" : "Omnivorous",
        "lifespan" : "2",
        "community" : false
    }
    
    const [fish, setFish] = useState(fishObj);
    const [fishBasket, setFishBasket] = useState([]);

    return ( 
        <div>
            <FishManipulator fish={fish} setFish={setFish} setFishBasket={setFishBasket}/>

            {
                fishBasket.map((eachFish) => {
                    return <FishDisplayer key={eachFish.species} eachFish={eachFish}/>
                })
            }
        </div>    
    );
}
 
export default Fish;