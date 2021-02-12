import React from "react";
import Nav from "./Container/Nav";
import Banner from "./Container/Banner";
import Row from "./Container/Row";
import Requests from "../../features/Request";

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={Requests.fetchNetflixOrignals}
        isLargRow
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={Requests.fetchDocumentries} />
    </div>
  );
};

export default Home;
