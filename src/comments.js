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
      id: "gPjqWwkAymg",
      description: "",
      title: "Bahamas - All I've Ever Known",
      date: "Feb 20, 2018",
      thumbnail: "logo.svg",
      user: new User("Bahamas", "logo.svg"),
      viewcount: 12068504
     },
     {
      id: "aDmT5-GOoVo",
      description: "",
      title: "",
      date: "",
      thumbnail: "",
      user: new User("Phoebe Bridgers", "logo.svg"),
      viewcount: 20000
     }]
  
  const users = {
    'alex': new User('alex', 'logo.svg'),
    'kristine': new User('kristine', 'logo.svg'),
    'boseph': new User('boseph', 'logo.svg'),
    'jaef': new User('jaef', 'logo.svg'),
    'pweo': new User('pweo', 'logo.svg'),
    'qwpeot': new User('qwpeot', 'logo.svg'),
    'alex2': new User('alex2', 'logo.svg'),
    'kristine3': new User('kristine3', 'logo.svg')
    
  }
  
  const comments = [
    // for video 1 - the bahamas piecd
    [
      new Comment(users['Hana Selmani'], '2 years ago', 'The kinda songs you actually listen to late at night but can’t play them around your friends because they’ll just call the song “too sappy”', [
        new Comment(users['50sarebackhoney'], '2 years ago', 'get better friends'),
        new Comment(users['Dnoces Efil'], '2 years ago', 'thanks mate you just made my first laugh today'),
      ]),

      new Comment(users['Redd Carpet'], '1 month ago', "Reminds me of a day I once spent in the fields. I think it was just me and one other person. We went on an adventure, I saw their hometown, their old house, a field full of sunflowers. It's so painful because I'll always remember warmth - of sunflowers on my eyes, of sunlight on my lips, of their touch in my hands. But the warmth, without the person providing it, doesn't reach my heart at all. I treasure it anyways.", [
        new Comment(users['50sarebackhoney'], '2 years ago', "this really touched me because I had a routine of visiting the rose gardens near my house every week before The Forgetting and I still go but it just feels something is missing. and i think its a person but i'm not sure, cos at least u remember going with someone, but i don't even remember if i shared that routine with anyone"),
        new Comment(users['Dnoces Efil'], '2 years ago', "Keep going [INSERT USERNAME], maybe you'll see someone there one day and it will all come rushing back!"),
        new Comment(users['Dnoces Efil'], '2 years ago', "yeah but point is, maybe i went by myself originally. so i'd just be looking for someone who was never there in the first place. thatd be sad lol"),
      ]),
  
      new Comment(users['Aarish'], '1 year ago', "Reading all these comments, I imagine someone going through the comment section after we're all dead and wondering if we ever found our people again after we wrote what we wrote. \n To that one person I do not know yet, I love you. I don't know how or why, I just know that I do. To the person I no longer know, I love you too. I don't remember the hows or whys, I just know that I did once. Maybe I feel too much?", [
        new Comment(users['Annette Reyes'], '1 year ago', 'Beautifully said and I want to cry. I have thoughts similar to yours as well. Some people should stop and think about those things.'),
        new Comment(users['qwpeot'], '1 day ago', 'I feel you bro..❤️🌠🤲.. beautifully said ☺️💌'),
        new Comment(users['qwpeot'], '1 day ago', 'yall need to stop being so dramatic')
      ]),
  
      new Comment(users['clover'], '8 months ago', 'I once met a person with a soul so bright that our short time together felt like a lifetime. For some reason, these recent days blur past so much faster than they used to. I miss you, whoever you were.', [
      ]),

      new Comment(users['nooni'], '1 year ago', "There's a lot of people here, I read abt your struggles and I always come back hoping that your lives are better. \n For some reason it's hard to just not think about so many people, that I don't know the only connection is this song.  The meanings are different and so are the struggles. \n I know that probably didn't make sense but just know I come back and think about yall and I hope you come out of whatever runt you may be.", [
          new Comment(users['Ria'], '11 months ago', "This makes total sense to me cause this is the exact shit i think and do")
      ])
      // 
    ],
  
    // for video 2 - sufjan stevens' illinoise
    [
      new Comment(users['alex2'], '2 days ago', "ain't gay but the song is a vibe", [
        new Comment(users['kristine3'], '2 days ago', "sufjan stevens could literally write a song that is 100% him strumming guitar and singing I love men I love men I love men I love men for five minutes and y'all would still be like, 'wow he's such good friends with his fellow heterosexual men!!!'"),
        new Comment(users['boseph2'], '2 days ago', "I was just joking man"),
        new Comment(users['boseph2'], '1 day ago', "Sufjan: I literally kissed him while caressing his back and we were in love with eachother I loved that man. \n Youtube: oh yeah buddy that's what friendship is am I right :) I passionately kiss my bros all the time")
      ]),
      
      new Comment(users['alex2'], '2 days ago', "I remember when it happened - I felt like I was in a dream - woke up in a bed too big for one, saw two sets of toothbrushes by the sink, a half-finished birdhouse on the coffee table I couldn't have made, a notebook filled with sketches of local birds that I couldn't have drawn. Someone just gone, leaving behind a ghost of a life in my Chicago apartment. It doesn't really hurt - it just feels empty somehow.", [
        new Comment(users['kristine3'], '2 days ago', "I'm sorry I hope you find them again"),
        new Comment(users['boseph2'], '2 days ago', "My dad loved birds too so this hits me deep he's the reason I work at an aviary now. After the Forgetting I found him again because one day he showed up to check out a tour and we saw each other and all the memories came rushing back. If it can happen to me it can happen to you too. Good luck man"),
      ]),

      new Comment(users['alex2'], '2 days ago', "i know that that this song was written 20 years before the Forgetting but it feels like it could have been written yesterday. A boy falling in love with his friend at summer camp, and then being separated forever once the summer is over. Whether it's autobiographical I don't know, but it just sounds too true to life, especially after what happened.", [
        new Comment(users['Paul'], '2 days ago', "it was autobiographical, yes. but I get what you mean."),
      ]),

      new Comment(users['alex2'], '4 days ago', "I’m from Illinois, and as a kid this was literally my favorite album in the whole world. On car rides up to Chicago, we would listen to the album. It was a amazing time.", [
        new Comment(users['kristine3'], '2 days ago', "I used to play this song on repeat always too. \n Always clicked in with a memory of listening to it while traveling over the manhattan bridge... Odd? \n I would cry. \n INSTANTLY nostalgic type song.")
      ])
    ],

    // for video 3 - fialta's high above chicago
    [
        
      new Comment(users['Cammie Reed'], '2 days ago', "I relate to the lyrics so much. I was on a plane when it happened, and suddenly had the oddest feeling. We descended towards O'Hara, and I knew I was coming home - but the images in my head were of an apartment that I knew wasn't mine. After we landed, I took my phone off airplane mode and, out of habit, got ready to call someone - but couldn't remember who? Was there somebody that usually picked me up at the airport? Someone I was letting know that I had arrived? I lived by myself, didn't I? It felt like I was lost on a trip that was meant for two.", [
        new Comment(users['kristine3'], '2 days ago', "omg u were literally high above Chicago too... its like fialta wrote this just for u"),
        new Comment(users['boseph2'], '2 days ago', "i was flying too and i was so scared bc my pilot got so disoriented for some reason, he knew he was supposed to land but kept saying 'this isn't the Portland i know' and none of us knew what to do"),
        new Comment(users['boseph2'], '2 days ago', "Yeah. I think it was different for everyone depending on who they forgot? I do feel blessed that it wasn't worse."),
      ]),

      new Comment(users['alex2'], '8 years ago', "my favorite part of the song is from 0:00 to 3:32 when its playing in my ears. like if u agree", [
        new Comment(users['kristine3'], '8 years ago', "no"),
        new Comment(users['boseph2'], '8 years ago', "yes"),
        new Comment(users['boseph2'], '8 years ago', "to be honest though, I feel like the song cut to my core as a whole. Like, greater than the sum of its parts, you know? If you missed even a single piece, it wouldn't be the same; the metaphor of. like I know it was a joke but I really do mean that sincerely."),
        new Comment(users['boseph2'], '8 years ago', "yeah i get what you mean i was just being cranky bro sorry"),
      ]),

      new Comment(users['alex2'], '2 days ago', "When I listen to this song I picture someone flying around the country, leaving bits and pieces of their heart in abandoned suitcases at airports, waiting for someone to open up those suitcases one day", [
        new Comment(users['kristine3'], '2 days ago', ""),
        new Comment(users['boseph2'], '2 days ago', "obviously"),
      ]),

    ],

    // for video 4 - a singular shared memory that splits things wide open

    [
        
      new Comment(users['Cammie Reed'], '2 days ago', "I was on a plane when it happened. Felt like everything... tilted a little bit. Or something. ", [
        new Comment(users['kristine3'], '2 days ago', ""),
        new Comment(users['boseph2'], '2 days ago', ""),
      ]),

      new Comment(users['alex2'], '8 years ago', "I am here during this terrible time of COVID crisis and I miss my lover a lot. I don't see him for a long time due to this pandemic. May all our loved ones stay safe.", [
        new Comment(users['kristine3'], '8 years ago', " It's a storm and it is gonna end eventually, stay strong guys! "),
        new Comment(users['boseph2'], '8 years ago', "I love you so fucking much too"),
        new Comment(users['boseph2'], '8 years ago', "I love you too. Stay safe out there. \n I'll be home tomorrow."),
      ]),

      new Comment(users['alex2'], '2 days ago', "Like if From Bojackl!!!", [
        new Comment(users['kristine3'], '2 days ago', "From bojack?  are u sad ? 🙃"),
        new Comment(users['boseph2'], '2 days ago', "obviously"),
      ]),

    ],

    // for video 5 - an outsider identifies something older; ask about shit that went dwn
    [    
      new Comment(users['Cammie Reed'], '2 days ago', "I was on a plane when it happened. Felt like everything... tilted a little bit. Or something. ", [
        new Comment(users['kristine3'], '2 days ago', ""),
        new Comment(users['boseph2'], '2 days ago', ""),
      ]),

      new Comment(users['alex2'], '8 years ago', "I am here during this terrible time of COVID crisis and I miss my lover a lot. I don't see him for a long time due to this pandemic. May all our loved ones stay safe.", [
        new Comment(users['kristine3'], '8 years ago', " It's a storm and it is gonna end eventually, stay strong guys! "),
        new Comment(users['boseph2'], '8 years ago', "I love you so fucking much too"),
        new Comment(users['boseph2'], '8 years ago', "I love you too. Stay safe out there. \n I'll be home tomorrow."),
      ]),

      new Comment(users['alex2'], '2 days ago', "Like if From Bojackl!!!", [
        new Comment(users['kristine3'], '2 days ago', "From bojack?  are u sad ? 🙃"),
        new Comment(users['boseph2'], '2 days ago', "obviously"),
      ]), 
    ],

    // for video 6 - the day they meet again; 10 years moving forward
    [    
      new Comment(users['Cammie Reed'], '2 days ago', "I was on a plane when it happened. Felt like everything... tilted a little bit. Or something. ", [
        new Comment(users['kristine3'], '2 days ago', ""),
        new Comment(users['boseph2'], '2 days ago', ""),
      ]),

      new Comment(users['alex2'], '8 years ago', "I am here during this terrible time of COVID crisis and I miss my lover a lot. I don't see him for a long time due to this pandemic. May all our loved ones stay safe.", [
        new Comment(users['kristine3'], '8 years ago', " It's a storm and it is gonna end eventually, stay strong guys! "),
        new Comment(users['boseph2'], '8 years ago', "I love you so fucking much too"),
        new Comment(users['boseph2'], '8 years ago', "I love you too. Stay safe out there. \n I'll be home tomorrow."),
      ]),

      new Comment(users['alex2'], '2 days ago', "Like if From Bojackl!!!", [
        new Comment(users['kristine3'], '2 days ago', "From bojack?  are u sad ? 🙃"),
        new Comment(users['boseph2'], '2 days ago', "obviously"),
      ]), 
    ],

  ]
    

  export default comments;