type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
};

const messages: Message[] = [
  // { id: 1, text: "Hi there!", sender: "user" },
  // { id: 2, text: "Hello! How can I help you today?", sender: "ai" },
  // { id: 3, text: "Tell me a joke.", sender: "user" },
  // {
  //   id: 4,
  //   text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  //   sender: "ai",
  // },
];

export default function Conversation() {
  return (
    <div className="flex flex-col space-y-3">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"} `}
        >
          <div
            className={`w-[90%] max-w-fit rounded-2xl px-4 py-2 wrap-break-word ${msg.sender === "user" ? "rounded-bl-none bg-blue-500 text-white" : "rounded-br-none bg-gray-300 text-gray-900"} `}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
