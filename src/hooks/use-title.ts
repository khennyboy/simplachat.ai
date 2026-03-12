
export type titleData = {
    title: string;
    conversationId: string
}
export function getTitle() {
    const arr: titleData[] = []
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (key) {
            const value = localStorage.getItem(key);
            if (value) {
                const parsed = JSON.parse(value);
                arr.push({
                    title: parsed.title,
                    conversationId: key
                })
            }
        }
    }

    return arr
}

import { useState } from "react";


export default function useTitles() {
    const [titleData, setTitleData] = useState<titleData[]>(getTitle());

    return { titleData, setTitleData };
}
