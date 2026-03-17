export function fetchApi(url: string, options?: RequestInit) {
    if (options?.body) {
        const header = new Headers(options.headers || {});
        header.set("Content-Type", "application/json");
        options.headers = header;
    }
    return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, options).then(
        (res) => res.json()
    );
}