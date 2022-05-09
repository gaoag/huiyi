class User {
    constructor(user, pfp) {
      this.username = user
      this.pfp = pfp
    }
  }
  
  class Comment {
    constructor(user, date, text, replies) {
      this.user = user
      this.date = date
      this.text = text
      this.replies = replies
    }
  }
  
  const videos = [
    {
      id: "AKRA7weVyLs",
      description: "A timeless track for a timeless age.",
      title: "Carry Me, Ohio - Sun Kil Moon",
      date: "Oct 7, 2007",
      thumbnail: "logo192.png",
      user: new User("Phil Bebbington", "images/pfps/video1pfp.jpg"),
      viewcount: 2084830,
      subscribers: "22.9K subscribers"
     },
     {
      id: "Yf5yBXFbXK4",
      description: "I lost my way / on a trip meant for two / We left our hearts in a suitcase unused / High above Chicago / I'll be home tomorrow ",
      title: "High Above Chicago",
      date: "Aug 8, 2015",
      thumbnail: "",
      user: new User("AN1M4DOS", "images/pfps/AN1M4DOS.jpg"),
      viewcount: 352962 ,
      subscribers: "551 subscribers"
     },
     {
      id: "pBMwwJMkcRA",
      description: "",
      title: "Sufjan Stevens - The Predatory Wasp Of The Palisades Is Out To Get Us!",
      date: "Mar 5, 2010",
      thumbnail: "",
      user: new User("Kuzication", "images/pfps/Kuzication.jpg"),
      viewcount: 1040671 ,
      subscribers: "352 subscribers"
     },
     {
      id: "T6S5wPTICR0",
      description: "Slaughter Beach, Dog perform 'Acolyte' at Connie's Cleaners in Chicago, IL. \nFar Out is an Audiotree series where we step outside our studio to record artists in unusual environments.",
      title: "Slaughter Beach, Dog - Acolyte | Audiotree Far Out",
      date: "Jan 8, 2017",
      thumbnail: "",
      user: new User("Audiotree", "images/pfps/Audiotree.jpg"),
      viewcount: 267090 ,
      subscribers: "713K subscribers"
     },
     {
      id: "gsuv4HPGNHM",
      description: "NYRE concert; Beach Boys special guests",
      title: "Chicago & Beach Boys - Wishing You Were Here (1974).mp4",
      date: "Feb 17, 2012",
      thumbnail: "",
      user: new User("stormridergreyeagle", "images/pfps/stormridergreyeagle.jpg"),
      viewcount: 1506897 ,
      subscribers: "1.47K subscribers"
     },
     {
      id: "AOMyS78o5YI",
      description: "beach boys god only knows",
      title: "The Beach Boys - God only knows",
      date: "Apr 5, 2009",
      thumbnail: "",
      user: new User("Walter Katekaru", "images/pfps/Walter Katekaru.jpg"),
      viewcount: 10915501 ,
      subscribers: "5.11K subscribers"
     },
    //  {
    //   id: "Yf5yBXFbXK4",
    //   description: "I lost my way / on a trip meant for two / We left our hearts in a suitcase unused / High above Chicago / I'll be home tomorrow ",
    //   title: "High Above Chicago",
    //   date: "Aug 8, 2015",
    //   thumbnail: "",
    //   user: new User("Fialta", "logo192.png"),
    //   viewcount: 352962 
    //  },
    
    
    ]
  


  export default videos;