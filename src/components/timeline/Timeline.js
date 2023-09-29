import React from 'react'
import "./Timeline.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from "../../firebase"

function Timeline() {
  return (
    <div className='timeline'>
      {/* Header */}
      <div className='timeline--header'>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox/>
      


      {/* Post */}
      <Post 
        displayName = "Tsubasa_Ishihara"
        username = "Tsubasa_philo"
        verified={true}
        text="テストツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
      {/* Post */}
      {/* Post */}
      {/* Post */}
    
      


    </div>
  )
}

export default Timeline
