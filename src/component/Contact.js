import React from 'react';

export default function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2>Contact</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-5">
              <form>
                <div className="mb-3">
                  <label for="nama" className="form-label">
                    Nama
                  </label>
                  <input type="nama" className="form-control" id="nama" aria-describedby="nama" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" aria-describedby="email" />
                </div>
                <div className="mb-3">
                  <label for="pesan" className="form-label">
                    Pesan
                  </label>
                  <textarea className="form-control" id="pesan" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#000', color: '#fff', border: 'none' }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
