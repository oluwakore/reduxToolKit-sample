import React, {useState} from 'react'
import {Input, Button, Card, Space} from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { createPost  } from '../redux/features/postSlice'
import Link from 'next/link'
import LoadingCard from '../components/LoadingCard'
import styles from '../styles/Home.module.css'

const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: ""})
  const [showPost, setShowPost] = useState(false)

  const dispatch = useDispatch()

  const newPost = useSelector((state) => state.posters)
  
  const {loading, post} = newPost

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost({values}))
    setValues({ title: "", body: ""})
    setShowPost(true)
  }

  const showPostCard = () => {
    return(
      <>
      {
        loading ? <LoadingCard count={1} /> : (
          <Card key={post[post.length - 1].id}  type="inner" title={post[post.length - 1].title}>
            <p>User Id: {post[post.length - 1].id}</p>
            <span> {post[post.length -1].body} </span>
           </Card>
        )
      }
      </>
    )
  }

  return (
    <div>

<div className={styles.containerNav}>
    <p  style={{ margin: "auto" }}><img src={'/redux.svg'} alt="RTK" width={50} />  React ToolKit Sample</p>
  </div>

      <form onSubmit={handleSubmit} style={{ width: "90%" , margin: "auto", marginTop: 70 }}>
        <h1>Create Post</h1>
        <Input
        placeholder='Enter Title'
        type="text"
        onChange={(e) => setValues({ ...values, title: e.target.value})}
        value={values.title}
        />
        <Input.TextArea
        placeholder="Enter Body..."
        onChange={(e) => setValues({ ...values, body: e.target.value})}
        value={values.body}
        size="large"
        style={{ resize: "none", marginTop: 20, height: "8rem" }}
        />
        <Space style={{margin: 20}}>
          <Button type="primary" htmlType="submit">Create</Button>
          <Link href="/">
          <Button>Go To Home</Button>
          </Link>
        </Space>
      </form>

      {
        showPost && showPostCard()
      }
    </div>
  )
}

export default CreatePost