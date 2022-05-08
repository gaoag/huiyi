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
      user: new User("Fialta", "logo192.png"),
      viewcount: 352962 ,
      suscribers: "22.9K subscribers"
     },
     {
      id: "pBMwwJMkcRA",
      description: "",
      title: "Sufjan Stevens - The Predatory Wasp Of The Palisades Is Out To Get Us!",
      date: "Mar 5, 2010",
      thumbnail: "",
      user: new User("Sufjan Stevens", "logo192.png"),
      viewcount: 1040545 ,
      suscribers: "22.9K subscribers"
     },
     {
      id: "T6S5wPTICR0",
      description: "Slaughter Beach, Dog perform 'Acolyte' at Connie's Cleaners in Chicago, IL. \nFar Out is an Audiotree series where we step outside our studio to record artists in unusual environments.",
      title: "Slaughter Beach, Dog - Acolyte | Audiotree Far Out",
      date: "Jan 8, 2017",
      thumbnail: "",
      user: new User("Audiotree", "logo192.png"),
      viewcount: 267090 ,
      suscribers: "22.9K subscribers"
     },
     {
      id: "AOMyS78o5YI",
      description: "beach boys god only knows",
      title: "The Beach Boys - God only knows",
      date: "Apr 5, 2009",
      thumbnail: "",
      user: new User("Walter Katekaru", "logo192.png"),
      viewcount: 10915501 ,
      suscribers: "22.9K subscribers"
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
  
  const users = {
    'alex': new User('alex', 'logo192.png'),
    'kristine': new User('kristine', 'logo192.png'),
    'boseph': new User('boseph', 'logo192.png'),
    'jaef': new User('jaef', 'logo192.png'),
    'pweo': new User('pweo', 'logo192.png'),
    'qwpeot': new User('qwpeot', 'logo192.png'),
    'alex2': new User('alex2', 'logo192.png'),
    'kristine3': new User('kristine3', 'logo192.png')
    
  }
  
  const comments = [
    // for video 1 - https://www.youtube.com/watch?v=AKRA7weVyLs
    [
      new Comment(users['alex2'], '2 years ago', 'The kinda songs you actually listen to late at night but can’t play them around your friends because they’ll just call the song “too sappy”', [
        new Comment(users['alex2'], '2 years ago', 'get better friends'),
        new Comment(users['alex2'], '2 years ago', 'thanks mate you just made my first laugh today'),
      ]),

      new Comment(users['alex2'], '1 month ago', "Reminds me of a day I once spent in the fields. I think it was just me and one other person. We went on an adventure, I saw their hometown, their old house, a field full of sunflowers. It's so painful because I'll always remember warmth - of sunflowers on my eyes, of sunlight on my lips, of their touch in my hands. But the warmth, without the person providing it, doesn't reach my heart at all. I treasure it anyways.", [
        new Comment(users['alex2'], '2 years ago', "this really touched me because I had a routine of visiting the rose gardens near my house every week before The Forgetting and I still go but it just feels something is missing. and i think its a person but i'm not sure, cos at least u remember going with someone, but i don't even remember if i shared that routine with anyone"),
        new Comment(users['alex2'], '2 years ago', "Keep going [INSERT USERNAME], maybe you'll see someone there one day and it will all come rushing back!"),
        new Comment(users['alex2'], '2 years ago', "yeah but point is, maybe i went by myself originally. so i'd just be looking for someone who was never there in the first place. thatd be sad. lol"),
      ]),

      new Comment(users['alex2'], '1 year ago', "In Portuguese they call it 'saudade', it's described as a deep emotional state of nostalgia or a longing for an absent something or someone that one cares for and/or loves deeply. It is weird - there was never anything like The Forgetting before, but we still have the language to describe it. How can that be?", [
        new Comment(users['alex2'], '1 year ago', "In Bosnian, they call it 'sevdah'."),
        new Comment(users['alex2'], '1 year ago', "In Welsh it is 'Hiraeth'. Besos... we will all get through this together"),

      ]),
  
      new Comment(users['alex2'], '1 year ago', "Reading all these comments, I imagine someone going through the comment section after we're all dead and wondering if we ever found our people again after we wrote what we wrote. \n To that one person I do not know yet, I love you. I don't know how or why, I just know that I do. To the person I no longer know, I love you too. I don't remember the hows or whys, I just know that I did once. Maybe I feel too much?", [
        new Comment(users['alex2'], '1 year ago', 'Beautifully said and I want to cry. I have thoughts similar to yours as well. Some people should stop and think about those things.'),
        new Comment(users['alex2'], '1 day ago', 'I feel you bro..❤️🌠🤲.. beautifully said ☺️💌'),
        new Comment(users['alex2'], '1 day ago', 'yall need to stop being so dramatic')
      ]),
  
      new Comment(users['alex2'], '8 months ago', 'I once met a person with a soul so bright that our short time together felt like a lifetime. For some reason, after The Forgetting, the recent days blur past so much faster than they used to. I miss you, whoever you were.', [
      ]),

      // 
    ],
  

    // for video 2 - fialta's high above chicago
    [
        
      new Comment(users['alex2'], '2 days ago', "I relate to the lyrics so much. I was on a plane when it happened, and suddenly had the oddest feeling. We descended towards O'Hara, and I knew I was coming home - but the images in my head were of an apartment that I knew wasn't mine. After we landed, I took my phone off airplane mode and, out of habit, got ready to call someone - but couldn't remember who? Was there somebody that usually picked me up at the airport? Someone I was letting know that I had arrived? I lived by myself, didn't I? It felt like I was lost on a trip that was meant for two.", [
        new Comment(users['alex2'], '2 days ago', "omg u were literally high above Chicago too... its like fialta wrote this just for u"),
        new Comment(users['alex2'], '2 days ago', "i was flying too and i was so scared bc my pilot got so disoriented for some reason, he knew he was supposed to land but kept saying 'this isn't the Portland i know' and none of us knew what to do"),
        new Comment(users['alex2'], '2 days ago', "Yeah. I think it was different for everyone depending on who they forgot? I do feel blessed that it wasn't worse."),
      ]),

      new Comment(users['alex2'], '8 years ago', "my favorite part of the song is from 0:00 to 3:32 when its playing in my ears. like if u agree", [
        new Comment(users['alex2'], '8 years ago', "no"),
        new Comment(users['alex2'], '8 years ago', "yes"),
        new Comment(users['alex2'], '8 years ago', "to be honest though, I feel like the song cut to my core as a whole. Like, greater than the sum of its parts, you know? If you missed even a single piece, it wouldn't be the same; the metaphor of. like I know it was a joke but I really do mean that sincerely."),
        new Comment(users['alex2'], '8 years ago', "yeah i get what you mean i was just being cranky bro sorry"),
      ]),

      new Comment(users['alex2'], '8 years ago', "I am here during this terrible time of COVID crisis and I miss my lover a lot. I don't see him for a long time due to this pandemic. May all our loved ones stay safe.", [
        new Comment(users['alex2'], '8 years ago', " It's a storm and it is gonna end eventually, stay strong guys! "),
        new Comment(users['alex2'], '8 years ago', "I love you so fucking much too"),
        new Comment(users['alex2'], '8 years ago', "I love you too. Stay safe out there. \n I'll be home tomorrow."),
        new Comment(users['alex2'], '8 years ago', "Surreal to come back to this ten years later. The Forgetting feels just like the early days of covid."),

      ]),

      new Comment(users['alex2'], '2 days ago', "When I listen to this song I picture someone with a shattered heart flying around the country, leaving bits and pieces of their heart in abandoned suitcases at airports, hoping for someone to find those pieces and cherish them again.", [
        new Comment(users['alex2'], '2 days ago', "I love that image cuz its like, when a heart is broken where do the pieces go?"),
        new Comment(users['alex2'], '2 days ago', "the Forgetting made me realize this. i do have bits of my heart scattered around to other people, places, times. and now i don't know where they are anymore, i can't get them back, just feels kind of empty"),
      ]),


      new Comment(users['alex2'], '2 days ago', "Like if From Bojackl!!!", [
        new Comment(users['alex2'], '2 days ago', "From bojack?  are u sad ? 🙃"),
        new Comment(users['alex2'], '2 days ago', "obviously"),
      ]),


    ],

      // for video 2 - sufjan stevens' illinoise
      [
        new Comment(users['alex2'], '2 days ago', "ain't gay but the song is a vibe", [
          new Comment(users['alex2'], '2 days ago', "sufjan stevens could literally write a song that is 100% him strumming guitar and singing I love men I love men I love men I love men for five minutes and y'all would still be like, 'wow he's such good friends with his fellow heterosexual men!!!'"),
          new Comment(users['alex2'], '2 days ago', "I was just joking man"),
          new Comment(users['alex2'], '1 day ago', "Sufjan: I literally kissed him while caressing his back and we were in love with eachother I loved that man. \n Youtube: oh yeah buddy that's what friendship is am I right :) I passionately kiss my bros all the time")
        ]),
        
        new Comment(users['alex2'], '2 days ago', "I remember when it happened - I felt like I was in a dream - woke up in a bed too big for one, saw two sets of toothbrushes by the sink, a half-finished birdhouse on the coffee table I couldn't have made, a notebook filled with sketches of local birds that I couldn't have drawn. Someone just gone, leaving behind a ghost of a life in my Chicago apartment. It doesn't really hurt - it just feels empty somehow.", [
          new Comment(users['alex2'], '2 days ago', "I'm sorry I hope you find them again"),
          new Comment(users['alex2'], '2 days ago', "My dad loved birds too so this hits me deep he's the reason I work at an aviary now. After the Forgetting I found him again because one day he showed up to check out a tour and we saw each other and all the memories came rushing back. If it can happen to me it can happen to you too. Good luck man"),
        ]),
  
        new Comment(users['alex2'], '2 days ago', "i know that that this song was written 20 years before the Forgetting but it feels like it could have been written yesterday. A boy falling in love with his friend at summer camp, and then being separated forever once the summer is over. Whether it's autobiographical I don't know, but it just sounds too true to life, especially after what happened.", [
          new Comment(users['alex2'], '2 days ago', "it was autobiographical, yes. but I get what you mean."),
        ]),
  
        new Comment(users['alex2'], '1 year ago', "There's a lot of people here, I read abt your struggles and I always come back hoping that your lives are better. \n For some reason it's hard to just not think about so many people, that I don't know the only connection is this song.  The meanings are different and so are the struggles. \n I know that probably didn't make sense but just know I come back and think about yall and I hope you come out of whatever runt you may be.", [
                new Comment(users['alex2'], '11 months ago', "This makes total sense to me cause this is the exact shit i think and do")
            ]),
  
        new Comment(users['alex2'], '4 days ago', "I’m from Illinois, and as a kid this was literally my favorite album in the whole world. On car rides up to Chicago, we would listen to the album. It was a amazing time.", [
          new Comment(users['alex2'], '2 days ago', "I used to play this song on repeat always too. \n Always clicked in with a memory of listening to it while traveling over the manhattan bridge... Odd? \n I would cry. \n INSTANTLY nostalgic type song.")
        ]),
  
       
  
      ],

    // for video 4 - a singular shared memory that splits things wide open - Connie's Cleaners in Chicago, IL
    // https://www.youtube.com/watch?v=T6S5wPTICR0

    [
      new Comment(users['alex2'], '2 days ago', "this cleared my skin, cured my depression, watered my crops", [
        new Comment(users['alex2'], '2 days ago', "fixed my hair loss"),
        new Comment(users['alex2'], '2 days ago', "big ups man congrats"),
        new Comment(users['alex2'], '2 days ago', "restored my hair but not my memories... pour one out 😢"),

      ]),
      new Comment(users['alex2'], '2 days ago', " this guy tells stories so well; he says the smallest things and it makes so much sense ya know ", [
        new Comment(users['alex2'], '2 days ago', "totally. im obsessed fr"),
    
      ]),
      new Comment(users['alex2'], '2 days ago', "this is so surreal. Connie's Cleaners on North Lincoln, a few blocks from Winnemac Park? I don't actually live nearby, but for some reason, I have memories of winter nights there huddled inside while waiting for ... my clothes? someone else's clothes? to finish drying. There's music playing, and I'm sitting next to the dryer vents that leak all that hot air so I can stay warm. Even though this is my first time listening to the song, it feels so familiar?", [
        new Comment(users['alex2'], '2 days ago', "Yeah, that's Connie's! I recognize the decor on the walls. I live nearby so this is my go-to laundromat, but I totally get you - I've done the same exact thing so many times with somebody else. Dunno why they chose this venue for the video, but such a beautiful performance..."),
        new Comment(users['alex2'], '2 days ago', "Uhhh... hello?? I also hang out at Connies! Midwest meetup?? I'll queue up this song on the speakers so y'all know to say hi"),
      ]),


      new Comment(users['alex2'], '4 days ago', "just that simple line, 'gotta get out of ohio', brings it all back... how many cold winters i wasted there, dreaming of running away to spring in some faraway place? i didn't appreciate it when i had it man. i made it out, i got to miami where its warm all the time but, there was some kinda warmth back there - family, friends, lovers - that im missing now. tried to find them again, but i couldn't. it's gone now.", [
        new Comment(users['alex2'], '2 days ago', "so in love with this song. got me all emotional and feeling nostalgic, shit... too good.")
      ]),

      new Comment(users['alex2'], '4 days ago', "This makes me think of the last summer before I moved, some good friends, some bad laughs, late nights , and seeing her for the last time."),

      new Comment(users['alex2'], '4 days ago', "Discovered this band on Pandora back in 2022 right as the pandemic was coming to an end. I was blown away by it. His voice felt like it carried the pure melancholy of the past few years, but it felt like hope too. This ong awakens something inside me.", [])      

    ],

    // for video 5 - an outsider identifies something older; ask about shit that went dwn
    [    
      new Comment(users['alex2'], '4 days ago', "")
    ],

    // for video 6 - the day they meet again; 10 years moving forward. Beach Boys, God Only Knows
    [    
      new Comment(users['alex2'], '2 days ago', "I was on a plane when it happened. Felt like everything... tilted a little bit. Or something. ", [
        new Comment(users['alex2'], '2 days ago', ""),
        new Comment(users['alex2'], '2 days ago', ""),
      ]),

      new Comment(users['alex2'], '8 years ago', "I am here during this terrible time of COVID crisis and I miss my lover a lot. I don't see him for a long time due to this pandemic. May all our loved ones stay safe.", [
        new Comment(users['alex2'], '8 years ago', " It's a storm and it is gonna end eventually, stay strong guys! "),
        new Comment(users['alex2'], '8 years ago', "I love you so fucking much too"),
        new Comment(users['alex2'], '8 years ago', "I love you too. Stay safe out there. \n I'll be home tomorrow."),
      ]),

      new Comment(users['alex2'], '2 days ago', "Like if From Bojackl!!!", [
        new Comment(users['alex2'], '2 days ago', "From bojack?  are u sad ? 🙃"),
        new Comment(users['alex2'], '2 days ago', "obviously"),
      ]), 
    ],

  ]
    

  export default videos;