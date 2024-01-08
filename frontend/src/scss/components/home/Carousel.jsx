import React from "react";
import "../../scss/components/home/Carousel.scss";
import { useSelector, useDispatch } from "react-redux";

const Carousel = () => {
  const { oldArticle, recentArticle, allTag, allCategory } = useSelector(
    (state) => state.homeReducer
  );


//   const slides = document.querySelectorAll(".slide");
//   let counter = 0;
//   const goPrev = () => {
//     counter--;
//     slideImage();
// };
//   slides.forEach((slide, index) => {
//       slide.style.left = `${index * 100}%`;
//   });

 

//   const goNext = () => {
//       counter++;
//       slideImage();
//   };

//   const slideImage = () => {
//       slides.forEach((slide) => {
//           slide.style.transform = `translateX(-${counter * 100}%)`;
//       });
//   };


  return (
    <>
       {/* {(recentArticle.length-1) > 0 &&
        recentArticle.map((art, index) => (
          <div className="row-image">
            {console.log(art)}
            <div key={index} className="column-image">
              <img
                src={`http://localhost:3000/articalImage/${art.image}`}
                alt="image"
                style={{ width: "100%", height: "61%" }}
              />
              </div>
              <div key={index} className="column-image">
              <img
                src={`http://localhost:3000/articalImage/${art.image}`}
                alt="image"
                style={{ width: "100%", height: "61%" }}
              />
              </div>
              <div className="column-image">
                <img
                  src={`http://localhost:3000/articalImage/${art.image}`}
                  alt=""
                  style={{ width: "100%", height: "35%" }}
                />
                <img
                  src="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg"
                  alt=""
                  style={{ width: "50%", height: "25%" }}
                />
                <img
                  src="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg"
                  alt=""
                  style={{ width: "50%", height: "25%" }}
                />
              </div>
          </div>
        ))}  */}



{/* {
                                recentArticle.length > 0 && recentArticle.map((art, index) =>
                                    <div key={index} className="some-recent-artical">
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="img">
                                                    <img src={`http://localhost:3000/articalImage/${art.image}`} alt="" />
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                )
                            } */}





{/* {recentArticle.length > 0 &&
        recentArticle.map((art, index) => (
          <> 
<main key={index} >
<img src={`http://localhost:3000/articalImage/${art.image}`} className="slide" alt="Description 1" />
<img src={`http://localhost:3000/articalImage/${art.image}`} className="slide" alt="Description 1" />
    
    <img src={`http://localhost:3000/articalImage/${art.image}`} className="slide" alt="Description 1" />
    <img src="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg" class="slide" alt="Description 2" />
    <img src="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg" class="slide" alt="Description 3" />
    <img src="https://www.goodreturns.in/img/2014/12/29-1419829109-online-600.jpg" class="slide" alt="Description 4" />
    <img src="Image Path Here" class="slide" alt="Description 5" />
</main>

<div class="nav">
    <button onClick="goPrev()">Previous</button>
    <button onClick="goNext()">Next</button>
</div> 
</>
))}*/}

    </>
  );
};

export default Carousel;
