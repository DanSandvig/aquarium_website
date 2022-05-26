const FishManipulator = ({fish, setFish, setFishBasket}) => {
    
    const setNewFish = (event) => {
        const {id, value} = event.target;

        setFish((currentFish) => ({
            ...currentFish,
            [id]: value,
        }));
    }
    
    const toggleCommunity = () => {
        setFish((currentFish) => ({
            ...currentFish,
            community: !currentFish.community,
        }));
    }

    const addToFishBasket = () => {
        setFishBasket((currentArray) => {
            return[...currentArray, fish];
        });
    }

    return (
        <div>
            <label htmlFor="species">Species: </label> 
            <input type="text" id="species" name="species" onChange={(event) => setNewFish(event)}/>
            <label htmlFor="diet"> Diet: </label>
            <input type="text" id="diet" name="diet" onChange={(event) => setNewFish(event)}/>
            <label htmlFor="lifespan"> Lifespan: </label>
            <input type="text" id="lifespan" name="lifespan" onChange={(event) => setNewFish(event)}/>
            <label htmlFor="community"> Community: </label>
            <input type="checkbox" id="community" name="community" onClick={toggleCommunity}/>
            <button id="submit" onClick={addToFishBasket}>Add to basket!</button>
        </div>    
    );
}
 
export default FishManipulator;