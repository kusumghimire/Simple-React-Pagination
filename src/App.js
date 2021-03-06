import React ,{useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [posts, setPosts] =useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);

  useEffect(()=>{
    const fetchPosts = async() =>{
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);

    }
    fetchPosts();
  })
  return (
    <div className="container">
   
    </div>
  );
}

export default App;
