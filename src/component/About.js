import React from 'react';

export default function About() {
  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2>About</h2>
            </div>
          </div>
          <div className="clearfix" id="about">
            <img src="img/f.png" className="figure-img img-fluid rounded" alt="me" />
            <p>Hai, perkenalkan saya Azzelya Rosya Denovya. Saya berasal dari SMKN 1 Kota Bekasi. Jurusan saya adalah Rekayasa Perangkat Lunak, merupakan jurusan Programming dan menyukai lebih dalam tentang Front-end Development.</p>
            <hr />
            <h5>Skills</h5>

            <p>
              HTML : 90%
              <div className="progress">
                <div className="progress-bar bg-success bg-success" role="progressbar" style={{ width: '90%' }}></div>
              </div>
            </p>

            <p>
              CSS : 85%
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }}></div>
              </div>
            </p>
            <p>
              JavaScript : 75%
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }}></div>
              </div>
            </p>
            <p>
              PHP : 70%
              <div className="progress">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }}></div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}