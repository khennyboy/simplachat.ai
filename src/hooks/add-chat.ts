import { useParams } from "react-router-dom";

type chat = {
    question: string;
    answer: string
}
function AddChat(chat: chat) {
    const { conversationId = '' } = useParams()
    console.log(conversationId)
    const conversation: chat[] = []
    conversation.push(chat)
    if (localStorage.conversationId) {
        const existingConversation = JSON.parse(localStorage.getItem(conversationId) as string)
        existingConversation.push(chat)
        localStorage.setItem(conversationId, JSON.stringify(conversation))
    }
    else {
        localStorage.setItem(conversationId, JSON.stringify(conversation))
    }

}
export default AddChat