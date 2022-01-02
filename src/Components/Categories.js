import { Link } from "react-router-dom";
import MainCategoriesService from "../main-categories.service";
function Categories() {
  MainCategoriesService.getMainCategories()
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e);
    });

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
