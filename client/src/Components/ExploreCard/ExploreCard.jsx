import "./ExploreCard.css";
import { Link } from "react-router-dom";

const ExploreCard = () => {
  return (
    <>
    <div className="exploresection">
      <div className="exploreheading">MINI EVENTS</div>
      <div className="explore">
        <div className="card">
            <div className="content">
              <h2 className="title">CAPTURE THE FLAG</h2>
            </div>
        </div>

        <div className="card">
            <div className="content">
              <h2 className="title">TREASURE OF TOWN</h2>
            </div>
        </div>

        <div className="card">
            <div className="content">
              <h2 className="title">SPEAKER SESSION</h2>
            </div>
        </div>

        <div className="card">
          <Link to="/register">
            <div className="content">
              <h2 className="title registertitle">REGISTER</h2>
            </div>
          </Link>
        </div>
    </div>
    </div>
    </>
  );
};

export default ExploreCard;
