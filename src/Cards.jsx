import { useState } from "react"

function Cards(props){
    const [counter, SetCounter] = useState([])
    const [flip,SetFlip]=useState(false)
    function getId(e){
        props.SetStatus('')
        const found = counter.find((ele => ele === e.target.id))
        if(found){
            console.log('thothutey irukiye daw')
            props.SetStatus('You Lose')
            if(props.best < props.score){
                props.SetBest(props.score)
            }
            props.SetScore(0)
            SetCounter([])
            props.SetImageCount(4)
            
        } else{
            SetCounter([
                ...counter,
                e.target.id
            ]),
            props.SetScore(props.score+1)
            
        }
    }
    console.log(counter)
    console.log(flip)
    const listItems = props.cards.map(card =>
        
        <div className={`card ${flip ? "flip" : ""}`}>
        <div id="fff" className="front" onClick={()=> SetFlip(!flip)}>

        <img className="cardImage" id= {card.id} src= {card.src.medium} alt=""  onClick={getId} />
        </div>
        <div className="back"  onClick={()=> SetFlip(!flip)}></div>
        </div>
        
        )
        return(
            <div>
                <img id="title" src="src\title.png" alt="" width="500px"/>
            <div className="page">
                <ul className="listItems">{listItems}</ul>
            </div>
            <h3 id="stss">{props.status}</h3>
            </div>
        )
}
export default Cards

