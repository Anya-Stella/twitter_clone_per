import {TwitterTimelineEmbed,
        TwitterShareButton,
        TwitterTweetEmbed,
        } from 'react-twitter-embed';
import { Search } from '@mui/icons-material'
import React from 'react'
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets--input'>
        <Search className='widgets--searchIcon'/>
        <input placeholder='Search' type="text"/>
      </div>
      <div className='widgets--widgetContainer'>
        <h2>What's happening</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed tweetId='1706967591758213335'/>

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='Tsubasa_philo_'
          options={{ height: 400 }}
        />

        <TwitterShareButton
            url={'https://twitter.com/yurukyan_goods/status/1707320113228353939'}
            options={{ text: 'ゆるキャン△三期楽しみだよん', via: 'Tsubasa_philo_' }}
          />



      </div>
    </div>
  )
}

export default Widgets
