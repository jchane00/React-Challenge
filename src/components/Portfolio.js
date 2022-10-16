import Project from "./Project"
import muscleHustle from "../img/muscleHustle.png"
import Cars2Go from "../img/Cars2Go.png"
import freshly from "../img/fresh.ly.png"

export default function Portfolio(){
    const items = [
        {
            title: "Cars2Go",
            image: Cars2Go,
            liveLink:"https://safe-river-61972.herokuapp.com/" ,
            repoLink:"https://github.com/ashwinilh/Cars2Go/tree/ashwini"
        },
        {
            title: "fresh.ly",
            image: freshly,
            liveLink:"https://garcia2697.github.io/fresh.ly/" ,
            repoLink:"https://github.com/garcia2697/fresh.ly"
        },
        {
            title: "Muscle Hustle",
            image: muscleHustle,
            liveLink:"https://musclehustle.herokuapp.com//" ,
            repoLink:"https://github.com/jchane00/Fitness-App"
        },
   
    ]
    return <div>
        {items.map((item)=>{
            return <Project {...item}/>
        })}
    </div>
}