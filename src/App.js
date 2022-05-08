import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import users from './users.js'
import comments from './comments.js';
import videos from './videos.js';
import IframeResizer from 'iframe-resizer-react';




function App() {

  const [currentVideoNumber, setCurrentVideoNumber] = useState(0)

  

  // let currId, currDesc, currTitle, currDate;
  // ({currId, currDesc, currTitle, currDate} = videos[currentVideoNumber])

  return (
    <div className="App">
      <div id="pageHeader">
        <header>
            <div class="header__logo">
                <a href="#">
                    <img src="images/header/hamburger.png" alt="navigation button" class="header__hamburger-logo"/>
                </a>
                <a href="#">
                    <img src="images/header/yt-logo.png" alt="YouTube logo" class="header__yt-logo"/>
                </a>
            </div>
            <div class="search">
                <form>
                    <input name="search" id="search__input" placeholder="huiyi"/>
                    <a href="#">
                        <img src="images/header/search.png" alt="Search Icon" class="search__icon"/>
                    </a>
                </form>
            </div>
            <div class="header__icons header__logo">
                <a href="#">
                    <img src="images/header/grid.png" alt="grid icon" class="header__icons--grid"/>
                </a>
                <a href="#">
                    <img src="images/header/upload.png" alt="grid icon" class="header__icons--upload"/>
                </a>
                <a href="#">
                    <img src="images/header/bell.png" alt="grid icon" class="header__icons--bell"/>
                </a>
                <a href="#">
                    <img src="images/header/profile-placeholder.png" alt="grid icon" class="header__icons--profile"/>
                </a>
            </div>
        </header>
      </div>
      
      <div id="mainBody">
        <div id="leftHalf">
          
          <div id="mainVideo">
            <div id="videoPlayer">
              <VideoEmbed videos={videos} currentVideoNumber={currentVideoNumber}/>
            </div>
            <div id="videoDescription">
              <VideoDescription videos={videos} currentVideoNumber={currentVideoNumber}/>
            </div>
          </div>

          <div id="commentsSection">
            <CommentsFeed comments={comments} currentVideoNumber={currentVideoNumber}/>
          </div>
        </div>

        <div id="playlistSection">
          <PlaylistLayout videos={videos} currentVideoNumber={currentVideoNumber} setCurrentVideoNumber={setCurrentVideoNumber}/>
        </div>
      </div>
     
    </div>
    
  );
}

function SingleComment(props) {
  // props contain the user, date, text, 

  const commentClass = props.reply ? 'reply' : 'comment'

  return (
    <div class={commentClass}>
      <div id="commentPfp">
        <img src={props.user.pfp}/>
      </div>
      <div id="commentBody">
        <div id="commentMetadata">
          <span id="commentUsername">{props.user.username}</span> <span id='commentDate'>{props.date}</span>
        </div>
        <div id="commentText">
          {props.text}
        </div>
      </div>
    </div>
  )

  

}


function CommentDisplay(props) {

  const [showReplies, setShowReplies] = useState(false)
  // props contains a Comment Class Object with:
  // a user, date, text, and LIST[Comment Class Objects] 
  // commentDisplay renders a bunch of SingleComments + a ReplyOnclick
  // the Reply OnClick, when turned "on", renders al of the replies as SingleComments too, but with a slight offset

  const currentComment = props.comment;
  console.log(currentComment)

  if (showReplies) {
    let replyComments = []
    for (let i = 0; i < currentComment.replies.length; i++) {
      let reply = currentComment.replies[i];
      replyComments.push(
        <SingleComment user={reply.user} date={reply.date} text={reply.text} reply={true}/>
      )
    }


    return (
      <div>
        <SingleComment user={currentComment.user} date={currentComment.date} text={currentComment.text} reply={false}/>
        <button class="replyButton" onClick={() => setShowReplies(false)}>▲ Hide replies</button>
        {replyComments}
        
      </div>
    )

  } else {
    return (
      <div>
        <SingleComment user={currentComment.user} date={currentComment.date} text={currentComment.text}/>
        <button class="replyButton" onClick={() => setShowReplies(true)}>▼ Show replies</button>
      </div>
    )
  }

  



}


function CommentsFeed(props) {
  const currComments = props.comments[props.currentVideoNumber]
  // iterate through currComments and generate CommentDisplays for all of them

  const toDisplay = []
  for (let i = 0; i < currComments.length; i++) {
    toDisplay.push(
      <CommentDisplay comment={currComments[i]}/>
    );
    
  }

  return (
    <div>
      {toDisplay}
    </div>
  )

  

}

function VideoEmbed(props) {

  const videoEmbedID = props.videos[props.currentVideoNumber].id
  console.log(videoEmbedID)
  return (
    <div>
      <IframeResizer
        log
        src={`https://www.youtube.com/embed/${videoEmbedID}`}
        style={{ width: '100%', height: '500px', frameBorder: '0', }}
        // style={{ width: "100%", height: "auto", minWidth: "500px", minHeight: "300px", frameBorder: '0', }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      {/* <iframe id="videoPlayerIFrame"
      // width="1000px" height="800px"
      src={`https://www.youtube.com/embed/${videoEmbedID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      /> */}
  </div>
  )
}

function VideoDescription(props) {



  let id, description, title, date, thumbnail, user, viewcount, subscribers;
  ({id, description, title, date, thumbnail, user, viewcount, subscribers} = props.videos[props.currentVideoNumber])



  return (
    <div>
      <div id='titleBar'>
        <div id="title">{title}</div>
        <div id="viewcountAndDate">{viewcount + ' views • ' + date}</div>
        {/* <div id="viewcount">{viewcount}</div> */}
      </div>
      <div id='descSection'>
        <div id='userDescSection'>
          <img id="pfpDesc" src={user.pfp}/>
          <div id="userDesc">
            <div id="usernameDesc">{user.username}</div>
            <div id="subscriberDesc">{subscribers}</div>
          </div>
          
        </div>
        <div id="descText">{description}</div>
      </div>
    </div>
  )
}

function PlaylistLayout(props) {
  // creates a "playlist" showing the thumbnail, title, and user for each video
  // "highlights" the one that is being selected

  const playlistElems = []
  for (let i = 0; i < videos.length; i++) {
    let highlighted = (i == props.currentVideoNumber) ? "highlighted" : "";
    let thumbnailUrl = "https://img.youtube.com/vi/" + videos[i].id + "/mqdefault.jpg";
    let num = i;
    
    playlistElems.push(
      <div onClick={(e) => {console.log(num);props.setCurrentVideoNumber(num)}} class="playlistElem" id={highlighted}>
        <div class="playlistElemThumbnail"><img src={thumbnailUrl}/></div>
        <div class="playlistElemTitle">
          <div id="title">{videos[i].title}</div>
          <div id="username">{videos[i].user.username}</div>
        </div>
      </div>
    )
  }

  return (
    <div id="playlistContainer">
      <div id="playlistTitle">
        <div id="playlistName">
          <div>huiyi - a playlist</div>
          <div id="playlistCreator">Keming Gao - {props.currentVideoNumber+1}/5</div>
        </div>
        <div id="playlistVisualElements">
          <span id="shuffleButton" onClick={(e) => {props.setCurrentVideoNumber(Math.floor(Math.random() * (5)))}} ><img src="images/assets/shuffle.jpg"/></span>
          <span id="likeButton"><img src="images/assets/thumb.jpg"/></span>
        </div>
      </div>
      {playlistElems}
    </div>
  )

}

export default App;
