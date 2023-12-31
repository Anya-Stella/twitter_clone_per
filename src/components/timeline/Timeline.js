import React, { useEffect, useState } from 'react'
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "../../firebase"
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Timeline() {
  const [posts, setPosts] = useState([]);

  // マウント時に1度だけpostDataを取得
  useEffect(() => {
    const postData = collection(db, "posts")
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(postData).then(querySnapshot => {
    //   setPosts(querySnapshot.docs.map( doc => doc.data() ));
    // })

    // リアルタイムでデータを取得
    onSnapshot(q, querySnapshot => {
      setPosts(querySnapshot.docs.map( doc => doc.data() ));
    })
  }, []);



  return (
    <div className='timeline'>
      {/* Header */}
      <div className='timeline--header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox/>
      


      {/* Post */}
      <FlipMove>
        {posts.map( post => (

          <Post 
          key = {post.text}// 固有IDが好ましい
          displayName = {post.displayName}
          username = {post.username}
          verified = {post.verified}
          text = {post.text}
          avatar = {post.avatar}
          image = {post.image}
          />

        ) )}
      </FlipMove>

    </div>
  )
}

export default Timeline
