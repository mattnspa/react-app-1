import { useEffect } from "react";
import { Loading } from 'react-loading-dot'

import Bloglist from "./Bloglist";
import useFetch from "./UseFetch";


const Home = ({handleError}) => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
  
  useEffect(() => {
    if(error) {
      handleError(error);
    }
  }, [error]);

  return (
    <div className="home">
      {isPending && <Loading background="#f1356d" /> }
      {/* evaluate blogs if not null show blogs*/}
      {blogs && <Bloglist blogs={blogs} title="All blogs:" />}
    </div>
  );
}
 
export default Home;