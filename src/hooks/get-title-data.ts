
export type titleData = {
    title: string;
    conversationId: string
}
export function getTitleData() {
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

    return arr.reverse()
}



