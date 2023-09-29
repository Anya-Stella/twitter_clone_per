import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox--input'>
            <Avatar />
            <input placeholder='What is happening?!' type='text'></input>
        </div>
        <input className='tweetBox--imageInput' placeholder='please input imageURL' type='text'></input>
        <Button className='tweetBox--tweetButton' type='submit'>Post</Button>
      </form>
    </div>
  )
}

export default TweetBox
