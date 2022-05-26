const FishDisplayer = ({eachFish}) => {
    
    const {species, diet, lifespan, community} = eachFish;
    
    return (
        <div> 
            <h4>Species: {species}</h4>
            <h4>Diet: {diet}</h4>
            <h4>Lifespan: {lifespan}</h4>
            <h4>Community friendly: {community.toString()}</h4>
        </div>
     );
}
 
export default FishDisplayer;