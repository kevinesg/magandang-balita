import LatestArticle from "../components/LatestArticle";
import CardCollection from "../components/CardCollection";
import "./css/Home.css";

function Home() {
  return (
    <>
      <div className="latest-article-container">
        <LatestArticle />
      </div>
      <div className="card-collection-container">
        <CardCollection />
      </div>
    </>
  );
}

export default Home;
