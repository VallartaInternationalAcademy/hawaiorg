import React from "react";
import imagenHistoria from "../../assets/images/charity/g6.jpg";
import imagenHistoria1 from "../../assets/images/charity/g3.jpg";
import imagenHistoria2 from "../../assets/images/charity/g5.jpg";
import imagenHistoria3 from "../../assets/images/charity/g7.jpg";

const StoryDetailPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="section-tittle">
            <div className="text-center">
              <h4 className="title mb-4">TITULO DE LA HISTORIA AQUI</h4>
              <span className="uppercase">Subititulo de la historia</span>
              <img
                src={imagenHistoria}
                className="img-fluid rounded-md shadow-md"
                alt=""
              />
            </div>
            <p className="text-muted mb-0 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              veritatis quisquam fugiat fugit ab. Assumenda laudantium possimus
              dolore ipsam, asperiores, fugiat odit nihil esse officiis expedita
              numquam maxime dicta officia atque eum vero blanditiis ipsa et est
              rem distinctio cumque magnam minima! Nobis necessitatibus quisquam
              voluptatibus modi explicabo animi nisi.
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sed vero ratione exercitationem fugit animi quisquam porro veniam
              dolore cupiditate dolores ipsam unde ad ab numquam deserunt
              aperiam reiciendis minima asperiores. Neque recusandae magnam
              explicabo dolore deserunt odio dolorem, tempore debitis velit
              dolorum, distinctio perferendis deleniti fugit, veritatis magni
              unde.
            </p>
            <p className="text-muted mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              maiores, quisquam laboriosam quos dolor inventore unde vitae
              facere eius eos quae amet, fuga voluptates quod quaerat, quibusdam
              delectus voluptatem sapiente sed laborum suscipit expedita porro
              ipsa molestias. Harum cupiditate iste neque tempora quasi
              doloremque. Illum quae ipsum minus aliquam quod.
            </p>
            <div className="row" id="counter">
              <div className="col-md-4 col-6 mt-4 pt-2">
                <div className="text-center">
                  <img src={imagenHistoria1} className="img-fluid" />
                </div>
              </div>

              <div className="col-md-4 col-6 mt-4 pt-2">
                <div className="text-center">
                  <img src={imagenHistoria2} className="img-fluid" />
                </div>
              </div>

              <div className="col-md-4 col-6 mt-4 pt-2">
                <div className="text-center">
                  <img src={imagenHistoria3} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;
