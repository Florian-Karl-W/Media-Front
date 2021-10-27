import { Link } from "react-router-dom";

function Categories() {
  return (
    <section class="categories">
      <h2>Our Categories</h2>
      <div class="container">
        <div class="card" to="/">
          <div class="cardinfo">
            <div class="cardplan">Magazines</div>
            <Link to="/Magazines">Click Me</Link>
          </div>
        </div>
        <div class="card" to="/">
          <div class="cardinfo">
            <div class="cardplan">Videos</div>
            <Link to="/videos">Click Me</Link>
          </div>
        </div>
        <div class="card" to="/">
          <div class="cardinfo">
            <div class="cardplan">News Paper/Digital</div>
            <Link to="/paper">Click Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;
