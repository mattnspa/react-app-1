import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from 'react-loading-dot'


import useFetch from "./UseFetch";

const BlogDetails = ({handleError}) => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
  const navigate = useNavigate()

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/')
    })
  }

  useEffect(() => {
    if(error) {
      handleError(error);
    }
  }, [error]);

  return (
    <div>
      { isPending && <Loading background="#f1356d" /> }
      <div className="blog-details">
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>delete</button>
          </article>
        )}
      </div>
    </div>
  );
}
 
export default BlogDetails;