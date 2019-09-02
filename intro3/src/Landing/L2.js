import React, { Component } from 'react';
const data = [
  {
    im: "https://images.unsplash.com/photo-1562184647-5772b5348713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    title: "Photo Book"
  },
  {
    im: "https://images.unsplash.com/photo-1562184647-5772b5348713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    title: "Photo Book"
  },
  {
    im: "https://images.unsplash.com/photo-1562184647-5772b5348713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    title: "Photo Book"
  },
  {
    im: "https://images.unsplash.com/photo-1562184647-5772b5348713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=60",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content",
    title: "Photo Book"
  }


]

class L2 extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          {data.map((data) => (
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={data.im} class="card-img-top" alt={data.title} />
              <div class="card-body">
                <p class="card-title">{data.title}</p>
                <p class="card-text">{data.text}</p>
              </div>
            </div>
          ))}


        </div>
      </div>
    );
  }
}

export default L2;