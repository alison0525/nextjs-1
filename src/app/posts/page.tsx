"use client"
import { PostDto } from "@/type/post";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {


    const [posts, setPosts] = useState<PostDto[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/posts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((error) => {
                console.log("게시글 불러오기 실패:", error);
            })
    }, []);

    return (
        <div className="flex flex-col gap-9">
            {posts.length === 0 && <div>Loading...</div>}
            <h1>글 목록</h1>
            {posts.length > 0 && (
                <ul>
                    {
                        posts.map((post) => (
                            <li key={post.id} className="p-2">
                                <Link href={`/posts/${post.id}`}>
                                    - {post.id}. {post.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
}