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
      id: "607NWhJKd9U",
      description: "",
      title: "",
      date: "",
      thumbnail: "",
      user: new User("Spiritualized", "logo.svg"),
      viewcount: 10000
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
    // for video 1
    [
      new Comment(users['alex'], '2 days ago', 'this is a comment', [
        new Comment(users['kristine'], '2 days ago', 'this is a reply'),
        new Comment(users['boseph'], '2 days ago', 'this is a reply'),
      ]),
  
      new Comment(users['jaef'], '2 days ago', 'this is aNOTHER comment', [
        new Comment(users['pweo'], '2 days ago', 'this is a reply'),
        new Comment(users['qwpeot'], '1 day ago', 'this is a nother reply')
      ]),
  
      new Comment(users['jaef'], '2 days ago', 'this is aNOTHER comment', [
        new Comment(users['pweo'], '2 days ago', 'this is a reply'),
        new Comment(users['qwpeot'], '1 day ago', 'this is a nother reply')
      ])
    ],
  
    // for video 2
    [
      new Comment(users['alex2'], '2 days ago', 'this is a comment', [
        new Comment(users['kristine3'], '2 days ago', 'this is a reply'),
        new Comment(users['boseph2'], '2 days ago', 'this is a reply'),
      ])
    ]
    
  ]

  export default comments;