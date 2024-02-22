import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, store } from '../../store/store'
import PostItem from '../postItem/PostItem';
import s from "./style.module.css"

export default function PostsList() {

    const {list, status} = useSelector((store:RootState)=>store.posts);

  return (
    <div className={s.list}>
      <h2 style={{}}>Posts:</h2>
      {
        list.map(e=> <PostItem key={e.id} {...e}/>)
      }
    </div>
  )
}