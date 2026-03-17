export function fetchApi(url: string) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    return fetch(`${baseUrl}${url}`).then((res) => res.json());
}