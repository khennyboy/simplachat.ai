export type Chat = {
    question: string;
    answer: string;
};
export type Conversation = {
    title: string;
    chats: Chat[];
    createdAt: number;
}

function AddChat(conversationId: string, chat: Chat) {

    if (localStorage[conversationId]) {
        const parsed: Conversation = JSON.parse(localStorage.getItem(conversationId) as string);
        parsed.chats.push(chat)
        parsed.createdAt = Date.now();
        localStorage.removeItem(conversationId)
        localStorage.setItem(conversationId, JSON.stringify(parsed));
    } else {
        const chats: Chat[] = [];
        chats.push(chat);
        const conversation: Conversation = {
            title: chats[0].question,
            chats: chats,
            createdAt: Date.now()
        }

        localStorage.setItem(conversationId, JSON.stringify(conversation));
    }
}

export default AddChat;