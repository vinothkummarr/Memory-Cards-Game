function ScoreBoard(props){
    if(props.score == props.imageCount){
        //const half = props.imageCount/2;
       props.SetImageCount(props.imageCount*2)
    }
    return(
        <div >
            <div className="scoreCard">
                <img id="bubble" src="src\bubble.png" alt="" />
            <h3 id="scr">Score :{props.score}</h3>
            <h3 id="scr">Best Score: {props.best}</h3>
            </div>
            <h3>Status :{props.status}</h3>
        </div>
    )
}
export default ScoreBoard