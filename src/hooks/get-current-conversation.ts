import type { Chat } from "./add-chat";

export function getCurrentConversation(conversationId: string | undefined): Chat[] {
    if (conversationId && localStorage[conversationId]) {
        const parsed = JSON.parse(localStorage.getItem(conversationId) as string) as {
            chats: Chat[];
        };
        
        return parsed.chats ?? [];
    }
    return [];
}