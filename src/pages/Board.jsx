import React from 'react'
import { Link } from 'react-router-dom'

const Board = () => {
  const dummy = [
    { id: 1, title: "react router 시작" },
    { id: 2, title: "url 파라미터 이해" },
    { id: 3, title: "navlink와 활성스타일" }
  ]
  return (
    <section>
      <h1>게시글</h1>
      <ul>
        {dummy.map((b) => (
          <li key={b.id}>
            <Link to={`/board/${b.id}`}>
              {b.id} - {b.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Board