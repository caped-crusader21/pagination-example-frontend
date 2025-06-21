import { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./pagination";

function App() {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log(`Fetch error: ${error}`);
      }
    };
    getPost();
  }, []);

  const last = postPerPage * currentPage;
  const start = last - postPerPage;
  const currentPost = post.slice(start, last);
  return (
    <div className="grid-container">
      <h1>Content Pagination Demo</h1>
      {currentPost.map((itr) => (
        <div className="main-container">
          <h3>
            {itr.id} : {itr.title}
          </h3>
          <p>{itr.body}</p>
        </div>
      ))}
      <Pagination totalPage={post.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
