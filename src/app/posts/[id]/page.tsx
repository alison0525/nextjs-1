"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const { id } = useParams();

    const [post, setPost] = useState<{
        id: number;
        title: string;
        content: string;
    } | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPost(data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);

    return (
        <>
            {post === null ? <div>Loading...</div> : (
                <div className="flex flex-col gap-8 items-center">
                    <h1>{id}번 글 상세 보기</h1>
                    <div>
                        <div>번호 : {post.id}</div>
                        <div>제목 : {post.title}</div>
                        <div>내용 : {post.content}</div>
                    </div>
                </div>
            )}
        </>
    );
}