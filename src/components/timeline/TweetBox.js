import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from "../../firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  // firebaseのデータベースにデータを追加する関数
  const sendTweet = (e) => {
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName : "Tsubasa_Ishihara",
      username : "Tsubasa_philo",
      verified : true,
      text : tweetMessage,
      avatar : "https://shincode.info/wp-content/uploads/2021/12/icon.png",
      image : tweetImage,
      timestamp : serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };




  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            <Avatar />
            <input value={tweetMessage} placeholder='What is happening?!' type='text' onChange={(e) => setTweetMessage(e.target.value)}></input>
        </div>
        <input value={tweetImage} className='tweetBox--imageInput' placeholder='please input imageURL' type='text' onChange={(e) => setTweetImage(e.target.value)}></input>
        <Button className='tweetBox--tweetButton' type='submit' onClick={sendTweet}>Post</Button>
      </form>
    </div>
  )
}

export default TweetBox
