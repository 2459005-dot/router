import React from 'react'
import { Link } from 'react-router-dom'
import './Community.css'

export const posts = [
    {
        id: 1,
        subject: "React Router 초보 질문",
        writer: "김코딩",
        date: "2025-08-11",
        views: 123
    },
    {
        id: 2,
        subject: "JavaScript 비동기 처리 이해하기",
        writer: "이프론트",
        date: "2025-08-10",
        views: 87
    },
    {
        id: 3,
        subject: "CSS Grid 레이아웃 예제 공유",
        writer: "박스타일",
        date: "2025-08-09",
        views: 54
    },
    {
        id: 4,
        subject: "Node.js에서 JWT 인증 구현",
        writer: "최백엔드",
        date: "2025-08-08",
        views: 201
    },
    {
        id: 5,
        subject: "Vite vs CRA 무엇을 선택할까?",
        writer: "정세팅",
        date: "2025-08-07",
        views: 75
    }
];

const Community = () => {

    return (
        <section className='Community'>
            <h1>게시글</h1>
            <ul className='list'>
                {posts.map((p) => (
                    <li key={p.id}>
                        <Link to={`/community/${p.id}`}>
                            {p.id} - {p.subject}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Community