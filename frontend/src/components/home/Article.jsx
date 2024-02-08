import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import htmlToText from "html-react-parser";
import { Helmet } from "react-helmet";

const Article = ({ index, art }) => {
  console.log(`https://ill-tan-tuna-sock.cyclic.app/articalImage/${art.image}`)
  return (
    <>
      <Helmet>
        <title>{`BlogifyBlog - Home`}</title>
        <meta name="description" content={art.articleText} />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media"
        />
        <meta name="author" content="BlogifyBlog" />
        <meta property="og:title" content={art.title} />
        <meta property="og:description" content={art.articleText} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.blogifyblog.com/artical/details/${art.slug}`}
        />
        <meta
          property="og:image"
          content={`https://www.blogifyblog.com/articalImage/${art.image}`}
        />
        <meta
          property="article:tag"
          content="Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media"
        />
      </Helmet>

      <div key={index} className="home-artical">
        <div className="row">
          <div className="col-4">
            <div className="home-image">
              <div className="image">
                <img
                  src={`https://ill-tan-tuna-sock.cyclic.app/articalImage/${art.image}`}
                  alt=""
                />
                <span>{art.category}</span>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="home-artical-details">
              <div className="title">
                <Link to={`/artical/details/${art.slug}`}>{art.title}</Link>
              </div>
              <div className="name-time">
                <span>
                  <Link to="/">{art.adminName}</Link>
                </span>
                <span>{moment(art.createdAt).fromNow()}</span>
              </div>
              <div className="artical-text">
                {htmlToText(art.articleText.slice(0, 160))}
              </div>
              <div className="read-more">
                <button className="read-more-btn">
                  <Link to={`/artical/details/${art.slug}`}>Read more</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
