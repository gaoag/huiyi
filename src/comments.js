import users from './users.js'
console.log(users['OceanDark']);
  class Comment {
    constructor(user, date, text, replies) {
      this.user = user
      this.date = date
      this.text = text
      this.replies = replies
    }
  }
  
 
  
  
  
  const comments = [
    // for video 1 - https://www.youtube.com/watch?v=AKRA7weVyLs
    [
      new Comment(users['OceanDark'], '8 years ago', 'The kinda songs you actually listen to late at night but can’t play them around your friends because they’ll just call the song “too sappy”', [
        new Comment(users['omnivorous65'], '8 years ago', 'get better friends'),
        new Comment(users['tuig97jai'], '8 years ago', 'thanks mate you just made my first laugh today'),
      ]),

      new Comment(users['chance.'], '5 years ago', "Reminds me of a day I once spent in the fields. I think it was just me and one other person. We went on an adventure, I saw their hometown, their old house, a field full of sunflowers. It's so painful because I'll always remember warmth - of sunflowers on my eyes, of sunlight on my lips, of their touch in my hands. But the warmth, without the person providing it, doesn't reach my heart at all. I treasure it anyways.", [
        new Comment(users['aces9385'], '5 years ago', "this really touched me because I had a routine of visiting the rose gardens near my house every week before The Forgetting and I still go but it just feels something is missing. and i think its a person but i'm not sure, cos at least u remember going with someone, but i don't even remember if i shared that routine with anyone"),
        new Comment(users['baby bok choy'], '5 years ago', "Keep going @chance., maybe you'll see someone there one day and it will all come rushing back!"),
        new Comment(users['chance.'], '4 years ago', "yeah but point is, maybe i went by myself originally. so i'd just be looking for someone who was never there in the first place. thatd be sad. lol"),
      ]),
      
      new Comment(users['butchbutchress4'], '4 years ago', 'I once met a person with a soul so bright that our short time together felt like a lifetime. For some reason, after The Forgetting, the recent days blur past so much faster than they used to. I miss you, whoever you were.', [
      ]),

      new Comment(users['codeFoto'], '6  years ago', "In Portuguese they call it 'saudade', it's described as a deep emotional state of nostalgia or a longing for an absent something or someone that one cares for and/or loves deeply. It is weird - there was never anything like The Forgetting before, but we still have the language to describe it. How can that be?", [
        new Comment(users['culota'], '6 years ago', "In Bosnian, they call it 'sevdah'."),
        new Comment(users['kbnped'], '6 years ago', "In Welsh it is 'Hiraeth'. Besos... we will all get through this together"),

      ]),
  
      new Comment(users['Rare!'], '6 years ago', "Reading all these comments, I imagine someone going through the comment section after we're all dead and wondering if we ever found our people again after we wrote what we wrote. \n To that one person I do not know yet, I love you. I don't know how or why, I just know that I do. To the person I no longer know, I love you too. I don't remember the hows or whys, I just know that I did once. Maybe I feel too much?", [
        new Comment(users['Mr Green thumb'], '5 years ago', 'Beautifully said and I want to cry. I have thoughts similar to yours as well. Some people should stop and think about those things.'),
        new Comment(users['laurydel'], '5 years ago', 'I feel you bro..❤️🌠🤲.. beautifully said ☺️💌'),
        new Comment(users['ThreeThreeThree'], '2 years ago', 'its time to stop being so dramatic.. we need to move on and return to normal already.')
      ]),
      // 
    ],
  

    // for video 2 - fialta's high above chicago
    [
        
      new Comment(users['Mason Campos'], '4 years ago', "I relate to the lyrics so much. I was on a plane when it happened, and suddenly had the oddest feeling. We descended towards O'Hara, and I knew I was coming home - but the images in my head were of an apartment that I knew wasn't mine. After we landed, I took my phone off airplane mode and, out of habit, got ready to call someone - but couldn't remember who? Was there somebody that usually picked me up at the airport? Someone I was letting know that I had arrived? I lived by myself, didn't I? It felt like I was lost on a trip that was meant for two.", [
        new Comment(users['bozoFrancois'], '4 years ago', "omg u were literally high above Chicago too... its like fialta wrote this just for u"),
        new Comment(users['mieter most'], '4 years ago', "i was flying too and i was so scared bc my pilot got so disoriented for some reason, he knew he was supposed to land but kept saying 'this isn't the Portland i know' and none of us knew what to do. it was terrifying and I know its been two years already but I still think about it sometimes. Just how weird it was."),
        new Comment(users['Mason Campos'], '4 years ago', "Yeah. I think it was different for everyone depending on who they forgot? I do feel blessed that it wasn't worse."),
      ]),

      new Comment(users['CouchTomato33'], '9 years ago', "my favorite part of the song is from 0:00 to 3:32 when its playing in my ears. like if u agree", [
        new Comment(users['video1pfp'], '9 years ago', "no"),
        new Comment(users['CouchTomato33'], '9 years ago', "yes"),
        new Comment(users['CouchTomato33'], '9 years ago', "to be honest though, I feel like the song cut to my core as a whole. Like, greater than the sum of its parts, you know? If you missed even a single piece, it wouldn't be the same; the metaphor of. like I know it was a joke but I really do mean that sincerely."),
        new Comment(users['video1pfp'], '8 years ago', "yeah i get what you mean i was just being cranky bro sorry"),
      ]),

      new Comment(users['Allana8Bit'], '11 years ago', "I am here during this terrible time of COVID crisis and I miss my lover a lot. I don't see him for a long time due to this pandemic. May all our loved ones stay safe.", [
        new Comment(users['dreaming blue'], '11 years ago', " It's a storm and it is gonna end eventually, stay strong guys! "),
        new Comment(users['Crypi Dawg'], '11 years ago', "I love you so fucking much"),
        new Comment(users['Allana8Bit'], '11 years ago', "I love you too. Stay safe out there. \n I'll be home tomorrow."),
        new Comment(users['ScissorFeet'], '5 years ago', "Surreal to come back to this after The Forgetting; it feels just like the early days of covid right now. Did you two get reunited after COVID ended?"),

      ]),

      new Comment(users['Uptown Ursula'], '7 years ago', "When I listen to this song I picture someone with a shattered heart flying around the country, leaving bits and pieces of their heart in abandoned suitcases at airports, hoping for someone to find those pieces and cherish them again.", [
        new Comment(users['girl gamers 4 phoebe'], '7 years ago', "I love that image cuz its like, when a heart is broken where do the pieces go?"),
        new Comment(users['CoraPng'], '4 years ago', "the Forgetting made me realize this. i do have bits of my heart scattered around to other people, places, times. and now i don't know where they are anymore, i can't get them back, just feels kind of empty"),
      ]),


      new Comment(users['pikkinoppi'], '12 years ago', "Like if From Bojackl!!!", [
        new Comment(users['KTCTunes'], '12 years ago', "From bojack?  are u sad ? 🙃"),
        new Comment(users['pikkinoppi'], '12 years ago', "obviously"),
        new Comment(users['quinnalaGaming'], '2 years ago', "still watching bojack horseman in 2030 !! "),
      ]),


    ],

      // for video 3 - sufjan stevens' illinoise
      [
        new Comment(users['acacia world'], '9 years ago', "ain't gay but the song is a vibe", [
          new Comment(users['sohopowell'], '9 years ago', "sufjan stevens could literally write a song that is 100% him strumming guitar and singing I love men I love men I love men I love men for five minutes and y'all would still be like, 'wow he's such good friends with his fellow heterosexual men!!!'"),
          new Comment(users['acacia world'], '9 years ago', "I was just joking man"),
          new Comment(users['madokamagica s2 now'], '9 years ago', "Sufjan: I literally kissed him while caressing his back and we were in love with eachother I loved that man. \n Youtube: oh yeah buddy that's what friendship is am I right :) I passionately kiss my bros all the time")
        ]),
        
        new Comment(users['Laurie Ingham'], '6 years ago', "I remember when it happened - I felt like I was in a dream - woke up in a bed too big for one, saw two sets of toothbrushes by the sink, a half-finished birdhouse on the coffee table I couldn't have made, a notebook filled with sketches of local birds that I couldn't have drawn. Someone just gone, leaving behind a ghost of a life in my Chicago apartment. It doesn't really hurt - it just feels empty somehow.", [
          new Comment(users['illama'], '6 years ago', "I'm sorry I hope you find them again"),
          new Comment(users['NANA'], '4 years ago', "My dad loved birds too so this hits me deep he's the reason I work at an aviary now. After the Forgetting I found him again because one day he showed up to check out a tour and we saw each other and all the memories came rushing back. If it can happen to me it can happen to you too. Good luck man"),
        ]),
  
        new Comment(users['woMac'], '6 years ago', "i know that that this song was written 20 years before the Forgetting but it feels like it could have been written yesterday. A boy falling in love with his friend at summer camp, and then being separated forever once the summer is over. Whether it's autobiographical I don't know, but it just sounds too true to life, especially after what happened.", [
          new Comment(users['Несколько'], '6 years ago', "it was autobiographical, yes. but I get what you mean."),
        ]),
  
        new Comment(users['coffee83920'], '3 years ago', "There's a lot of people here, I read abt your struggles and I always come back hoping that your lives are better. \n For some reason it's hard to just not think about so many people, that I don't know the only connection is this song.  The meanings are different and so are the struggles. \n I know that probably didn't make sense but just know I come back and think about yall and I hope you come out of whatever rut you may be.", [
                new Comment(users['beppa big'], '11 months ago', "This makes total sense to me cause this is the exact shit i think and do")
            ]),
  
        new Comment(users['West of Neptune'], '1 year ago', "I’m from Illinois, and as a kid this was literally my favorite album in the whole world. On car rides up to Chicago, we would listen to the album. It was a amazing time.", [
          new Comment(users['cweasyceasey'], '1 year ago', "I have been playing this song on repeat always too. \n Always clicked in with a memory of listening to it while traveling over the manhattan bridge... Odd? \n Makes me cry. \n INSTANTLY nostalgic type song, but I'm not sure for what.")
        ]),
  
       
  
      ],

    // for video 4 - a singular shared memory that splits things wide open - Connie's Cleaners in Chicago, IL
    // https://www.youtube.com/watch?v=T6S5wPTICR0

    [
      new Comment(users['sphere'], '5 years ago', "this cleared my skin, cured my depression, watered my crops", [
        new Comment(users['the binarian'], '5 years ago', "fixed my hair loss"),
        new Comment(users['cookieflava'], '5 years ago', "big ups man congrats"),
        new Comment(users['GreenY'], '4 years ago', "restored my hair but not my memories... pour one out 😢"),

      ]),
      new Comment(users['dgunit01'], '8 months ago', " this guy tells stories so well; he says the smallest things and it makes so much sense ya know ", [
        new Comment(users['BlueDanny'], '3 months ago', "totally. im obsessed fr"),
    
      ]),
      new Comment(users['Mason Campos'], '3 years ago', "this is so surreal. Connie's Cleaners on North Lincoln, a few blocks from Winnemac Park? I don't actually live nearby, but for some reason, I have memories of winter nights there huddled inside while waiting for ... my clothes? someone else's clothes? to finish drying. There's music playing, and I'm sitting next to the dryer vents that leak all that hot air so I can stay warm. Even though this is my first time listening to the song, it feels so familiar?", [
        new Comment(users['Laurie Ingham'], '3 years ago', "Yeah, that's Connie's! I recognize the decor on the walls. I live nearby so this is my go-to laundromat, but I totally get you - I've done the same exact thing so many times with somebody else. Dunno why they chose this venue for the video, but its such a beautiful performance..."),
        new Comment(users['lexaProWinner'], '3 years ago', "Uhhh... hello?? I also laundry at Connies! Midwest meetup?? I'll queue up this song on the speakers next time so y'all know to say hi"),
        new Comment(users['MoonDog'], '3 years ago', "Tuning in for this. What if y'all are like long lost siblings or something?"),
      ]),


      new Comment(users['Chancellor'], '5 years ago', "just that simple line, 'gotta get out of ohio', brings it all back... how many cold winters i wasted there, dreaming of running away to spring in some faraway place? i didn't appreciate it when i had it man. i made it out, i got to miami where its warm all the time but, there was some kinda warmth back there - family, friends, lovers - that im missing now. tried to find them again, but i couldn't. it's gone now.", [
        new Comment(users['TheSultanMusic'], '5 years ago', "so in love with this song. got me all emotional and feeling nostalgic, shit... too good."),
        new Comment(users['family vibes'], '5 years ago', "You don't need to blame yourself for wanting that at all, buddy. You have to leave a place somtimes to know that you loved it. You have to lose people sometimes to know that you needed them. Its just life."),
        new Comment(users['Chancellor'], '5 years ago', "Don't give me that fake positive bullshit, man. maybe you can handle it better than I can, but I can't stand this feeling anymore. It's like missing someone I never knew and never will. What am I supposed to do with that? Tell me how I'm supposed to move on with this hole in me that I can't make any sense of. Yeah, that's what i thought")
      ]),

      new Comment(users['jLu'], '4 days ago', "This makes me think of the last summer before I moved, some good friends, some bad laughs, late nights , and seeing her for the last time.", []),

      new Comment(users['J C'], '8 years ago', "Discovered this band on Pandora back in 2022 right as COVID was coming to an end. I was blown away by it. His voice felt like it carried the pure melancholy of the past few years, but it felt like hope too. This song awakens something inside me.", [])      

    ],

    // for video 5 - an outsider identifies something older; ask about shit that went dwn
    // https://www.youtube.com/watch?v=gsuv4HPGNHM
    [ 
      new Comment(users['nika'], '1 year ago', "This song describes the loneliness that anyone working on the road faces. I imagine the singers inserted their own feelings here, of being far from loved ones because of their work. A very nice lamentation.  Describes very well the nostalgia one feels when alone and apart", [
        new Comment(users['yonkers'], '1 year ago', "True!!!!"),
        new Comment(users['lethargy'], '1 year ago', "As a trucker, I can't tell you how right you are. I'm glad that I was still with my family at the time of The Forgetting; if I were on the road at the time, who knows how I would have found them again. This song makes me grateful for them every day.")
        
      ]),

      new Comment(users['Laurie Ingham'], '4 years ago', "Nearly crashed the car and died to this song...  definitely one my weirdest memories 😅 I went camping at Indiana Dunes, was getting ready to drive back home, had my speakers playing this album, and then a bird - a cedar waxwing, I wanna say? beautiful thing, I don't know anything about birds though, must have just heard the name somewhere - just flew right through the open window into the car as I was driving! Wouldn't mind being sent off with these heavenly vocals though 😛", [
        new Comment(users['mrsmal52'], '4 years ago', "Less a tragedy and more of a blessing! Glad you didn't crash 😂 "),
        new Comment(users['QuinYan Animation'], '2 years ago', "@Laurie Ingham so I ran into your comments on the Slaughter Beach Dog song and something jogged my brain - so I looked back at some comment histories to see if anything else lined up - @Mason Campos, didn't you comment about this same exact experience before on a Beach Boys song ???"),
        new Comment(users['Mason Campos'], '2 years ago', "@QuinYan Animation wait, yeah...... @Laurie Ingham this is too much of a coincidence - I mean, we both live in Chicago, I like birds and woodwork and you have these birdhouses you didn't make, we've both spent time at Connie's even though I don't even live close by? I keep seeing this apartment in my head that I know isn't mine - do you own a retro Star Trek poster by any chance?"),
        new Comment(users['SweetJumperr'], '2 years ago', "following so i can keep up on the best love story since avatar 4"),
        new Comment(users['Ev'], '2 years ago', "hello?? @Laurie Ingham??? any updates on this ??"),
      ]),

      
      new Comment(users['icillian'], '9 years ago', "This was on a New Years Eve on ABC and I remember wanting to watch it as a kid, but I missed it somehow and I remember how disappointed and upset I was now at the time! I never got to see this until now ... So thank you for putting this up. About 45 years just flew by. Terry Kath is still missed dearly to this day 🙏", [
        new Comment(users['melful lovingpsl'], '9 years ago', "Terry still is my ultimate favorite guitarist of all time, plus his soulful singing. He was the heart ❤️ and soul of the band...."),
        new Comment (users['sponge_waka'], '9 years ago', 'Terry Kath rules! Not to mention Peter Cetera in his rock and roll prime, and Beach Boys on backup vocals. Wow!'),
        new Comment(users['Teh Ch0sen'], '9 years ago', "Wow, that would have been an awesome show.  I didn’t see it either. Chicago at its prime with backing vocals by The Beach Boys on one of the most beautifully done songs."),

      ])
    ],

    // for video 6 - the day they meet again; 10 years moving forward. Beach Boys, god only knows https://www.youtube.com/watch?v=AOMyS78o5YI
    [    
      new Comment(users['kbone maridinga'], '1 year ago', "I Forgot you, and I've never been able to find you since - but I've still been able to keep living. We've all been forced to Forget, but we're all still here for each other. I live a new and different life now, but still have the same yearnings for what I once had. Who am I, then? 'God only knows what I am without you'. I am still trying to understand.", [
        new Comment(users['NacHo Music'], '1 year ago', "I am so very sorry for your loss. The song brought goosebumps when I was young, it brings goosebumps today, so many years and people have come and gone. I hope that when the time comes, we will find the people we Forgot again - if not here, then in eternity."),
        new Comment(users['m3t4lh34ad'], '1 year ago', "Beautifully said. "),
        new Comment(users['GouseHost'], '1 year ago', "I try not to dwell on it and hope that others don't either. I hope that those I Forgot are living happy and healthy lives now. Especially my theoretical parents. Now that I've had children, I can't imagine Forgetting them and the pain that would cause. I hope that whoever they are, they can truly move on and find new meaning elsewhere - but like you said, God only knows. wishing the best for you all"),
      ]), 

      new Comment(users['Mason Campos'], '5 years ago (edited 2 years ago)', "I went camping once and got to see a cedar waxwing (my favorite bird!) fly straight into my car. I was freaking out because it's my favorite bird, and I was so happy, and it was so weird because it was just like the opening to Pale Fire, and on the car ride home, as this song played out loud, I was overcome with this deep gratitude for these weird, beautiful, absolutely absurd moments - and having someone to share it with. \n \n EDIT: Yes, to those asking, @Laurie Ingham and I did get in touch!!! thank you for bringing us back together", [
        new Comment(users['poca'], '2 years ago', "@Laurie Ingham 👀👀👀"),
        new Comment(users['ohno its a ghost'], '2 years ago', "@poca What do you mean"),
        new Comment(users['fergavicious'], '2 years ago', "@ohno its a ghost OP commented on another video and seem to have similar experiences with @Laurie Ingham!!! I think they might have known each other before o_o"),
        new Comment(users['CONSUL'], '2 years ago', "updates!! we need updates!!!"),
      ]), 

      new Comment(users['alex2'], '1 month ago', "Made the mistake of thinking I could listen to this without tearing up. Makes me think of my gramps. Lost him 6 years ago in the Forgetting, I was 17. Found him again by sheer luck, but by then we only had six more months together until the cancer got him. Still treasure those moments though. Miss you dad ❤️", [
        new Comment(users['juulRenaissance'], '1 month ago', " Sending hugs x so much beauty and emotion in a short song "),
        new Comment(users['Bin archit Omar'], '1 month ago', "God bless you Alex. I am praying for you right now."),
        new Comment(users['Bound'], '1 month ago', "Thank you for sharing Alex… I definitely relate & feel your pain… I’m trusting in time it gets better & I wish same for you…"),
        new Comment(users['Bo 2 4 u'], '1 month ago', "I'm so sorry for your loss. Music does this to us. Precious memories but tinged with sadness."),
      ]),

      new Comment(users['mustards'], '3 years ago', "This is the only love song in the world that begins with 'I may not always love you'", [
        new Comment(users['vinvinvin'], '3 years ago', "If you’ve been married for 20 years plus you know exactly what that means. There are stretches where you want to bail but in the end you know where your heart lies"),
        new Comment(users['alex2'], '3 years ago', "Well I read it differently. I think it acknowledges that there are circumstances out of our control sometimes. Who could have known about The Forgetting? Who could have predicted the tragedies and failures and mistakes that get in the way of love? Nobody plans for it. But 'as long as there are stars above you', I'll try. I'll try"),
        new Comment(users['alex2'], '3 years ago', "Yeah, one of several oddities in this song. Funny how oddities, if channeled correctly, can be so good."),
      ]), 
    ],

  ]
    

  export default comments;