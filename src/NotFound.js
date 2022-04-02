import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <h3 className="number">404</h3>
      <p>Page not found</p>
      <Link to='/'>Back to home page</Link>
    </div>
  );
}
 
export default NotFound;