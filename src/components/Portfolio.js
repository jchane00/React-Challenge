import Project from "./Project"

export default function Portfolio(){
    const items = [
        {
            title: "Cars2Go",
            image:"https://drive.google.com/file/d/1kSvEkgb-367NinD1F7_B07ekpJv8QR9_/view?usp=sharing",
            liveLink:"https://safe-river-61972.herokuapp.com/" ,
            repoLink:"https://github.com/ashwinilh/Cars2Go/tree/ashwini"
        },
        {
            title: "fresh.ly",
            image:"https://drive.google.com/file/d/1VU2odcrJUEFIKnISkFhRX_yRoUHwrLex/view?usp=sharing",
            liveLink:"https://garcia2697.github.io/fresh.ly/" ,
            repoLink:"https://github.com/garcia2697/fresh.ly"
        },
   
    ]
    return <div>
        {items.map((item)=>{
            return <Project {...item}/>
        })}
    </div>
}