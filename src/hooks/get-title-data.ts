import type { Conversation } from "./add-chat";

export type titleData = {
    title: string;
    conversationId: string
    createdAt: number
}
export function getTitleData() {
    const arr: titleData[] = []
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (key) {
            const value = localStorage.getItem(key);
            if (value) {
                const parsed = JSON.parse(value) as Conversation;
                arr.push({
                    title: parsed.title,
                    conversationId: key,
                    createdAt: parsed.createdAt
                })
            }
        }
    }

    return arr.sort((a, b) => b.createdAt - a.createdAt);
}



