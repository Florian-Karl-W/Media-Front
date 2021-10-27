import React from "react";

function Test({ menuItem }) {
  return (
    <div>
      {menuItem.map((item) => {
        return (
          <div class="blog-post" key={item.id}>
            <div class="blog-post__img">
              <img src="images/post-photo.jpg" alt=""></img>
            </div>
            <div class="blog-post__info">
              <h1 class="blog-post__title">{item.title}</h1>
              <p class="blog-post__text">{item.description}</p>
              <a href="#" class="blog-post__cta">
                Go too
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
