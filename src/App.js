import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import comments from './comments.js';




function App() {

  const [currentVideoNumber, setCurrentVideoNumber] = useState(0)

  

  // let currId, currDesc, currTitle, currDate;
  // ({currId, currDesc, currTitle, currDate} = videos[currentVideoNumber])

  return (
    <div className="App">
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

      <div id="mainVideo">
        <VideoEmbed videos={videos} currentVideoNumber={currentVideoNumber}/>
        <VideoDescription videos={videos} currentVideoNumber={currentVideoNumber}/>
      </div>

      <div id="commentsSection">
        <CommentsFeed comments={comments} currentVideoNumber={currentVideoNumber}/>
      </div>

      <div id="playlistSection">
        <PlaylistLayout videos={videos} currentVideoNumber={currentVideoNumber} setCurrentVideoNumber={setCurrentVideoNumber}/>
      </div>
     
    </div>
  );
}

function SingleComment(props) {
  // props contain the user, date, text, 

  const commentClass = props.reply ? 'reply' : 'comment'

  return (
    <div class={commentClass}>
      <h3>{props.user.username}</h3>
      <h3>{props.user.pfp}</h3>
      <p>{props.text}</p>
      <p>{props.date}</p>
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
        {replyComments}
        <button onClick={() => setShowReplies(false)}>Hide Replies</button>
      </div>
    )

  } else {
    return (
      <div>
        <SingleComment user={currentComment.user} date={currentComment.date} text={currentComment.text}/>
        <button onClick={() => setShowReplies(true)}>Show Replies</button>
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
      <iframe
      width="560" height="315"
      src={`https://www.youtube.com/embed/${videoEmbedID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}

function VideoDescription(props) {



  let id, desc, title, date, thumbnail, user, viewcount;
  ({id, desc, title, date, thumbnail, user, viewcount} = props.videos[props.currentVideoNumber])


  return (
    <div>
      <div id='titleBar'>
        <div id="title">{title}</div>
        <div id="date">{date}</div>
        <div id="viewcount">{viewcount}</div>
      </div>
      <div id='descSection'>
        <div id="usernameDesc">{user.username}</div>
        <div id="pfpDesc">{user.pfp}</div>
        <div id="desc">{desc}</div>
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
    let thumbnailUrl = "https://img.youtube.com/vi/" + videos[i].id + "/sddefault.jpg";
    let num = i;
    
    playlistElems.push(
      <div onClick={(e) => {console.log(num);props.setCurrentVideoNumber(num)}} class="playlistElem" id={highlighted}>
        <img class="playlistThumbnail" src={thumbnailUrl}/>
        <p>{videos[i].title}</p>
        <p>{videos[i].user.username}</p>
      </div>
    )
  }

  return (
    <div>
      {playlistElems}
    </div>
  )

}

export default App;
