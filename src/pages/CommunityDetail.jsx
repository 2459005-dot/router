import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { posts } from './Community'

const CommunityDetail = () => {
  const { id } = useParams()
  const nav = useNavigate()
  const post = posts.find(p => p.id === Number(id))

  return (
    <section>
      <h1>{post?.subject}</h1>
      <p>글쓴이 : {post?.writer}</p>
      <p>작성 일자 : {post?.date}</p>
      <p>조회수 : {post?.views}</p>
      <button onClick={() => nav(-1)}>뒤로 가기</button>
      <button onClick={() => nav('/')}>홈으로 가기</button>
    </section>
  )
}

export default CommunityDetail