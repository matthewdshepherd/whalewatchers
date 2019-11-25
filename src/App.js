import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classname="App">
      <header>
        <div className="title-holder">
          <h1 className="title__header">California Whale Watchers</h1>
          <h3 className="by__header">By Matthew Malone</h3>
        </div>
      </header>
      <main>
        <div className="main-top-color__div"></div>
          <body classname="data__body">
            <section className="main-beach-whale-data__div">
              <h2>Beach and Wahle Sightings Data</h2>
              <p>This API provides data on 98 public beaches spanning all California counties. Each location includes information about the beach, including location, type of access and parking. Each beach has the 100 most whale sightings within 10 miles of the beach as of  November 2019. 14 whale and marine animal species are included in the sightings of
  each beach.</p>
            </section>
            <section className="api-block__section">
              <div className="api-block__section__div">
                <h4>Available Whale & Marine Animal Species:</h4>
                <p>Orca<br/>Humpback<br/>Gray Whale<br/>Pacific Bottle Nose Dolphin</p>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">www.heroku.com/api/v1/beaches</h4>
                <div className="fetch__div">
                  <p classname="fetch--request__p">GET</p>
                  <p classname="fetch--request--return__p">Returns all beaches in JSON format</p>
                  <div className="api-bottom-seperator__div"></div>
                </div>
              </div>
            </section>
          </body>
      </main>
    </div>
  );
}

export default App;
