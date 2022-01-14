import React from 'react';

export default function Banner() {
  return (
    <div>
      <section className="jumbotron jumbotron-fluid text-center" data-aos="fade-right">
        <img src="img/2.png" alt="azzelyarosya" width="250" class="rounded-circle" />
        <div className="container">
          <h1 className="display-4">Azzelya Rosya</h1>
          <p className="lead">Junior Front-end Developer</p>
        </div>
        <button className="btn bg-secondary" type="submit" style={{ color: '#fff' }}>
          Hire
        </button>
      </section>
    </div>
  );
}
