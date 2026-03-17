"use client";
export default function Home() {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = e.target;

        const titleInput = form.title;

        const contentText = form.content;

        if (titleInput.value.length === 0) {
            alert("제목을 입력해주세요.");
            titleInput.focus();
        }

        if (contentText.value.length === 0) {
            alert("내용을 입력해주세요.");
            contentText.focus();
        }

        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        fetch(`${baseUrl}/api/v1/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titleInput.value,
                content: contentText.value,
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert(data.msg);
            })
    };


    return (
        <>
            <h1 className="text-center">새 글 작성</h1>
            <form className="flex flex-col gap-2 p-2" onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="제목" className="border-2 rounded p-2" />
                <textarea name="content" rows={10} placeholder="내용" className="border-2 rounded p-2" />
                <button type="submit" className="border-2 rounded p-2">저장</button>
            </form>
        </>
    );
}

