type Chat = {
    question: string;
    answer: string;
};

function AddChat(conversationId: string, chat: Chat) {
    console.log(conversationId);

    const existingConversation = localStorage.getItem(conversationId);

    if (existingConversation) {
        const parsed = JSON.parse(existingConversation);
        parsed.push(chat);

        localStorage.setItem(conversationId, JSON.stringify(parsed));
    } else {
        const conversation: Chat[] = [];
        conversation.push(chat);

        localStorage.setItem(conversationId, JSON.stringify(conversation));
    }
}

export default AddChat;