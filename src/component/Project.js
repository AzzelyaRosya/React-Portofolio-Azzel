import React from 'react';

export default function Project() {
  return (
    <div>
      <section id="project" style={{ backgroundColor: '#fff' }}>
        <div class="container">
          <div class="row text-center">
            <div class="col" data-aos="zoom-in-left">
              <h2>Project</h2>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center" data-aos="zoom-in-right">
            <div class="col-md-4 mb-3">
              <div class="card h-100">
                <img src="img/2021-10-22 (2).png" class="card-img-top" alt="Kalkulator" />
                <div class="card-body">
                  <h5 class="card-title">Kalkulator Sedeharna dengan PHP</h5>
                  <p class="card-text">Ini merupakan sebuah Kalkulator Sederhana yang dibuat menggunakan Bahasa Pemrograman PHP.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card h-100">
                <img src="img/Perpustakaan azzel2.png" class="card-img-top" alt="Perpustakaan" />
                <div class="card-body">
                  <h5 class="card-title">Perpustakaan Online</h5>
                  <p class="card-text">Ini merupakan Perpustakaan Online Sederhana menggunakan HTML, CSS, Javascript.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
