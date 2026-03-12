type Chat = {
    question: string;
    answer: string;
};
type Conversation = {
    title: string;
    chats: Chat[];
}

function AddChat(conversationId: string, chat: Chat) {

    if (localStorage[conversationId]) {
        const parsed = JSON.parse(localStorage.getItem(conversationId) as string);
        parsed.chats.push(chat)
        localStorage.removeItem(conversationId)
        localStorage.setItem(conversationId, JSON.stringify(parsed));
    } else {
        const chats: Chat[] = [];
        chats.push(chat);
        const conversation: Conversation = {
            title: chats[0].question,
            chats: chats
        }
        console.log("no")
        localStorage.setItem(conversationId, JSON.stringify(conversation));
    }
}

export default AddChat;