import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-white">
        <div class="container pt-4">
          <section class="mb-4">
            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
              <i class="fa fa-facebook-f"></i>
            </a>

            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
              <i class="fa fa-twitter"></i>
            </a>

            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
              <i class="fa fa-google"></i>
            </a>

            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
              <i class="fa fa-instagram"></i>
            </a>

            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
              <i class="fa fa-linkedin"></i>
            </a>

            <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/AzzelyaRosya" role="button" data-mdb-ripple-color="dark">
              <i class="fa fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center text-dark p-3" style={{ backgroundColor: '#037a74af' }}>
          ©️ 2022 Copyright:
          <a class="text-dark" href="#">
            AzzelyaRosya.com
          </a>
        </div>
      </footer>
    </div>
  );
}
