import React from 'react';
import './zion.css';
import zionimg from "../map/zion.jpeg";

function ZionPage() {
  return (
    <div className="blog-container">
      <div className="image-container-page">
        <img src={zionimg} alt="Blog post cover" />
      </div>
      <div className="content-container-page">
        <h1 className="title">Blog Post Title</h1>
        <p className="date">September 19, 2023</p>
        <div className="body-text">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, a?</p>
          <p>Quisquam consectetur dolores soluta aliquam? Odio, earum est?</p>
          <p>Quidem consectetur numquam sapiente vero aliquid debitis?</p>
          <p>Fugit assumenda quis reiciendis natus sit dolore aperiam repellendus labore!</p>
        </div>
      </div>
    </div>
  );
}

export default ZionPage;
