import { Link } from "react-router-dom";
function Main({ text, link, imgPhoto }) {
  const { a, b, c, d } = text;
  const { aLink, bLink, cLink, dLink } = link;
  const { img1, img2, img3, img4 } = imgPhoto;
  return (
    <>
      <div className="container ">
        <div className="row mt-5 mb-5">
          <div className="col-md-6">
            <div
              className="card mt-5 mb-5 m-auto shadow rounded"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top cardimg"
                src={img1}
                alt="Card image cap"
              />
              <div className="card-body main">
                <Link
                  to={aLink}
                  className="btn btn-primary  btn-lg btn-block textLink "
                >
                  {a}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card mt-5 mb-5 m-auto shadow rounded"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top cardimg"
                src={img2}
                alt="Card image cap"
              />
              <div className="card-body main">
                <Link
                  to={bLink}
                  className="btn btn-primary btn-lg btn-block textLink"
                >
                  {b}
                </Link>
              </div>
            </div>
          </div>

          {c && (
            <>
              <div className="col-md-6">
                <div
                  className="card mt-5 mb-5 m-auto shadow rounded"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top cardimg"
                    src={img3}
                    alt="Card image cap"
                  />
                  <div className="card-body main">
                    <Link
                      to={cLink}
                      className="btn btn-primary btn-lg btn-block textLink"
                    >
                      {c}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card mt-5 mb-5 m-auto shadow rounded"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top cardimg"
                    src={img4}
                    alt="Card image cap"
                  />
                  <div className="card-body main">
                    <Link
                      to={dLink}
                      className="btn btn-primary btn-lg btn-block textLink"
                    >
                      {d}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
    </>
  );
}

export default Main;
