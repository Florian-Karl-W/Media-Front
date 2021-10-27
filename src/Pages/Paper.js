import Header from "../components/Header";
import "../styles/styles.scss";

function Paper() {
  return (
    <div className="">
      <Header />
      <section>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="main-text">Paper</div>
            </div>
            <div className="scroll">
              <span>Scroll down</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Paper;
