export function fetchApi(url: string, options?: RequestInit) {
    if (options?.body) {
        const header = new Headers(options.headers || {});
        header.set("Content-Type", "application/json");
        options.headers = header;
    }
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, options).then(
        async (res) => {
            if (!res.ok) {
                const rsData = await res.json();
                throw new Error(rsData.msg || "요청 실패");
            }
            return res.json();
        }
    )
}