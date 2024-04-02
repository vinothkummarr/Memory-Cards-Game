import {createClient} from 'pexels'
import { useCallback, useEffect, useState } from 'react'
import Cards from './Cards'
import ScoreBoard from './ScoreBoard'
function CardContainer(){
    const [image, setImage]= useState([])
    const [score, SetScore] = useState(0)
    const [status, SetStatus] =useState('')
    const [best, SetBest]= useState(0)
    const [imageCount, SetImageCount] = useState(4)
    const client =createClient("ppPmVqAxif9xj1rlh5CdkzRjE0a6h5yYlAgO6tZPYBU6pyXMAZ5Xrazu")
    const query = 'animals'


    const shuffle = (array) =>{
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
          } 
          return array; 
    }

    useEffect(()=> {
        client.photos.search({query, per_page:imageCount}).then(photos =>{
           // setImage(photos.photos[count].src.original)})
            
            const shuffledImage =shuffle(photos.photos)
            setImage(shuffledImage)
    })
    },[score,imageCount]);
    console.log(image)
    
    return(
        <div className='mainPage'>
           <img src="src\video2.gif" id='obg' alt="" />
            <Cards cards ={image} SetScore ={SetScore} score={score} SetStatus={SetStatus} best={best} SetBest ={SetBest} SetImageCount={SetImageCount}></Cards>
            <ScoreBoard score ={score} status={status} best ={best} imageCount={imageCount} SetImageCount={SetImageCount}></ScoreBoard>
        </div>
    )
}
export default CardContainer