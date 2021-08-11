import { useReducer } from 'react';
import postsReducer from '../../context/posts/postsReducer'
import PostsContext from './postsContext'

const PostsState = props => {

  const initialState = {
    posts: "get some posts"
  }

  const [state, dispatch] = useReducer(postsReducer, initialState);

  const getPosts = async () => {

    try {
      const res = await fetch(`https://www.londondaily.net/wp-json/wp/v2/posts`)
      dispatch({ type: GET_POSTS, payload: res })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PostsContext.Provider value={{
      posts: state.posts,
      getPosts
    }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsState
