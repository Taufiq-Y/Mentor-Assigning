import React from 'react'

export default function Home() {
  // given a home page
    return (
      <div class=" container-fluid home">
        <div className="row">
          <div className="col-md-3 col-sm-12"></div>
          <div className="col-md-6 col-sm-12">
            <h3 className="headLine">Learn Today,Achieve Tomorrow!!</h3>
            <img
              className="image"
              src="https://www.spok.com/wp-content/uploads/2019/06/B031015-2.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3 col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12"></div>
          <div className="col-md-6 col-sm-12">
            <h3 className="headLine">
              A Coding bootcamp designed and developed with the help of fully fleshed developers...
            </h3>
            <img
              className="image"
              src="https://st2.depositphotos.com/1802620/7621/v/950/depositphotos_76219969-stock-illustration-online-shopping-flat-concept.jpg"
              alt=""
            />
          </div>
          <div className="col-md-3 col-sm-12"></div>
        </div>
        <div className="row footer">
            <div className="col-12">
                <p>copyrights@Mohammed</p>
                <small>mohammedtaufiq60@gmail.com</small>
            </div>
        </div>
      </div>
    );
  }
