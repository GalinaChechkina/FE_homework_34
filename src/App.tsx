import { useDispatch } from "react-redux";
import "./style.css";
import { RootDispatch } from "./store/store";
import { useEffect } from "react";
import { loadPosts } from "./store/slices/postsSlice";
import PostsList from "./components/postList/PostsList";

function App() {

  const dispatch = useDispatch<RootDispatch>();

    useEffect(()=> {
      dispatch(loadPosts());
    }, [dispatch]);

  return (
    <div style={{margin: "50px"}}>
      <PostsList/>
    </div>
  );
}

export default App;
