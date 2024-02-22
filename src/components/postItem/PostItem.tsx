import React from 'react'
import { Post } from '../../types/Post'
import s from "./style.module.css"

export default function PostItem({id, title, reactions}: Post) {
  return (
    <div className={s.post}>
        <p>Post {id}: {title}</p>
        <p>Reactions: {reactions}</p>
    </div>
  )
}