import *  as api  from '../api';


// get all posts
export const getPosts = () => async ( dispatch) =>{
       try {
         const {data} = await api.fetchPosts();

         dispatch({type:'FETCH_ALL_POSTS', payload:data });
       } catch (error) {
         console.log(error.message);
       }

}

// create post
export const createPost = (post) => async (dispatch) =>{
  try {
    const {data} = await api.createPost(post);

    dispatch({type:'CREATE_POST', payload: data});
  } catch (error) {
    console.log(error);
  }
}

//update post
export const updatedPost = (id, post) => async (dispatch)=>{
  try {
    const {data} = await api.updatePost(id,post);

    dispatch({type:'UPDATE_POST', payload: data});
    
  } catch (error) {
     console.log(error.message);
    
  }
}