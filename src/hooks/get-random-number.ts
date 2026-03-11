export default function getConversationId() {
    const id = crypto.randomUUID();
    if (localStorage.getItem(id)) {
        getConversationId()
    }
    return id
}