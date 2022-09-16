import React, { Component } from "react";
import Load from "./Load";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import APIexpierd from "./APIexpierd";

export class News extends Component {
  async updatefun() {
    this.props.setProgress(20);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3dc570fcae404ef49f49cf9c36128ac7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });

    this.props.setProgress(60);
    let data = await fetch(url);
    this.props.setProgress(100);
    let data2 = await data.json();
    this.setState({
      articles: data2.articles,
      totalResults: data2.totalResults,
      loading: false,
    });
    this.props.setProgress(0);
  }

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
    document.title =
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1) +
      "- NewsDose";
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3dc570fcae404ef49f49cf9c36128ac7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });

    let data = await fetch(url);
    let data2 = await data.json();
    this.setState({
      articles: this.state.articles.concat(data2.articles),
      totalResults: data2.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updatefun();
  }
  render() {
    // console.log(this.state.articles);
    return (
      <>
        <h2
          className="text-center"
          style={{
            fontWeight: "bold",
            fontFamily: "Dosis",
            fontSize: "29px",
            color: "#01a4e7",
            marginTop: "100px",
          }}
        >
          NewsDose :
          <span style={{ color: "black" }}>
            {` ${this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          Headlines`}
          </span>
        </h2>
        {this.state.loading && <Load />}
        {this.state.articles !== undefined ? (
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Load />}
          >
            <div className="container">
              <div className="row">
                {// !this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imgUrl={element.urlToImage}
                        newsurl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        ) : (
          <APIexpierd />
        )}
      </>
    );
  }
}

export default News;
