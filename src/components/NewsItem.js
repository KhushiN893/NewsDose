import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imgUrl,
      newsurl,
      author,
      date,
      source,
    } = this.props;
    return (
      <div className=" my-4">
        <div
          className="card  mb-3"
          style={{
            height: "455px",
            background: "rgba(66, 214, 255, 0.83)",
            border: "1px solid black",
            boxShadow: "6px 7px 13px black",
            fontFamily: "Dosis",
            borderRadius: 0,
            fontSize: "18px",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "flex-end",
              right: "0",
              top: "-10px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <span
              className="badge rounded-pill text-bg-warning"
              style={{ zIndex: "1", right: "10%", height: "7%" }}
            >
              {" "}
              {source}
            </span>
          </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://tse3.mm.bing.net/th?id=OIP.V4_yHCl6TDSRNB-MInDgiQHaHa&pid=Api&P=0"
            }
            style={{ height: "220px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              {" "}
              {title ? title.slice(0, 30) : ""}
            </h5>

            <p className="card-text">
              {description ? `${description.slice(0, 100)}...` : "..."}
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm "
              style={{
                background: "rgba(3, 3, 3, 0.78)",
                fontWeight: "bold",
                marginLeft: "35%",
                fontSize: "19px",
                color: "white",
              }}
            >
              Read More
            </a>
          </div>

          <div className="card-footer text-muted">
            By {author ? author : "Unknown"} on{" "}
            {new Date(date).toUTCString().slice(0, -12)}
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
