import React, { useContext , useEffect, useState} from "react";
import { LoginContext } from "../contexts/LoginContext";
const api_key = process.env.API_KEY;
function Home() {
  const { username } = useContext(LoginContext);
  const [post,setPost] = useState([]);
   useEffect(()=>{
    const dataFetch = async () => {
      console.log(api_key,"*******")
      const data = await (
        await fetch(
          `https://newsapi.org/v2/everything?q=tesla&from=2022-11-22&sortBy=publishedAt&apiKey=213d55c353f142e48e4d928be44bc538`
        )
      ).json();
      console.log(data['articles']);
      setPost(data['articles']);
        }
        dataFetch()
},[])
  return (
    <div className="HomePage">
        <div className="ContainerClass">
                <h1>Welcome!{username}</h1>
                <p>List Of Articles Available </p>
                {post.length!=0?post.map((val,key)=>{
                 return(
                 <div className="Post">
                     <h2>Title:{val.title}</h2>
                     <p>Author:{val.author}</p>
                     <p>Description:{val.description}</p>
                </div>
                );
            }):<p>Loading</p>}
                
        </div>
    </div>
  );
}

export default Home;
