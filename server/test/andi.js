console.log("AAA");
// var chats = [
//     arben =[
//         {sender:"me", message:"AAAAAA"},
//         {sender:"me", message:"BBBB"},
//         {sender:"arben", message:"Kar"},
//         {sender:"arben", message:"ssssss"},
//     ],
//     vigan = [
//         {sender:"me", message:"AAAAAA"},
//         {sender:"me", message:"BBBB"},
//         {sender:"arben", message:"ssssss"},
//     ],
//     adnit = [
//         {sender:"me", message:"AAAAAA"},
//         {sender:"me", message:"BBBB"},
//         {sender:"arben", message:"ssssss"},
//     ]
// ]

var chats = [
    {
      with: "Arben",
      chat: [
        { sender: "me", message: "AAAAAA" },
        { sender: "me", message: "BBBB" },
        { sender: "arben", message: "ssssss" },
      ],
    },
    {
        with: "Nite",
        chat: [
          { sender: "me", message: "AAAAAA" },
          { sender: "me", message: "BBBB" },
          { sender: "nite", message: "ssssss" },
        ],
    },
];

newMessage={sender:"Arben", message:"mos ha mute"}
// chats[0].chat = [...chats[0].chat, newMessage]
// chats[0]=[...,chats]

var andi = chats.map((chat)=>{
  if(chat.with === newMessage.sender){
      chat.chat.map((message)=>{
        
    })
  }
})



console.log(andi)
