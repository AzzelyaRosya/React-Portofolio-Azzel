import React from 'react';
import f from '../img/f.png';

export default function About() {
  return (
    <div>
      <div id="about" data-aos="flip-up">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h2>About</h2>
            </div>
          </div>
          <div className="clearfix" id="about">
            <img src={f} className="figure-img img-fluid rounded" alt="me" />
            <p>Hai, perkenalkan saya Azzelya Rosya Denovya. Saya berasal dari SMKN 1 Kota Bekasi. Jurusan saya adalah Rekayasa Perangkat Lunak, merupakan jurusan Programming dan menyukai lebih dalam tentang Front-end Development.</p>
            <hr />
            <h5>Skills</h5>

            <p>
              HTML : 90%
              <div className="progress">
                <div className="progress-bar bg-secondary bg-secondary" role="progressbar" style={{ width: '90%' }}></div>
              </div>
            </p>

            <p>
              CSS : 85%
              <div className="progress">
                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '85%' }}></div>
              </div>
            </p>
            <p>
              JavaScript : 55%
              <div className="progress">
                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '55%' }}></div>
              </div>
            </p>
            <p>
              PHP : 50%
              <div className="progress">
                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '50%' }}></div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
