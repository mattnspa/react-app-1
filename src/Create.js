import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author };

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    });

  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          // value of event of input
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option> 
          <option value="luigi">luigi</option> 
        </select>
        { !isPending && <button>add blog</button> }
        { isPending && <button disabled>adding blog</button> }
      </form>
    </div>
  );
}
 
export default Create;