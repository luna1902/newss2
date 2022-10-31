import {useState,useEffect} from'react';
import axios from 'axios';

function Apps(){
const [myData, setMyData ] = useState([]);
useEffect(() => {
    axios
    .get("https://biztoc.com/p/aexsimj7?ref=rss")
    .then((res) => setMyData(res.data))

},[]);
return(
 myData.map((podt) => {
    const{id,title,body}=post;
    return <div className='card' key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
 })

);   

}
export default Apps   