// Find the first chat conversation where user "Rajan" sent a message that includes a YouTube link


const chats = [
  {
    id: 1,
    messages: [
      { sender: "Neha", text: "Check this" },
      { sender: "Rajan", text: "https://example.com" }
    ]
  },
  {
    id: 2,
    messages: [
      { sender: "Rajan", text: "Watch this https://youtube.com/video123" }
    ]
  }
];

const result = chats.find(chat =>
  chat.messages.some(msg =>
    msg.sender === "Rajan" && msg.text.includes("youtube.com")
  )
);

console.log(result); // Chat with id 2
