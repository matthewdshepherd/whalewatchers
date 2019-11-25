import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="title-holder">
          <h1 className="title__header">California Whale Watchers</h1>
          <h3 className="by__header">By Matthew Malone</h3>
        </div>
      </header>
      <main>
        <div className="main-top-color__div"></div>
          <section className="data__body">
            <section className="main-beach-whale-data__div">
              <h2 className="data-title__h2">Beach and Whale Sightings Data</h2>
              <a className="link-to-repo__a" href="https://github.com/matthewdshepherd/whaleSightings" target="_blank">Get Further API Documentaion Here</a>
              <p className="data-about">This API provides data on 98 public beaches spanning all California counties. Each location includes information about the beach, including location, type of access and parking. Each beach has the 100 most whale sightings within 10 miles of the beach as of  November 2019. 14 whale and marine animal species are included in the sightings of
  each beach.</p>
            </section>
            <section className="api-block__section">
              <div className="api-block__section__div">
                <h4 className="whale-species_h2">Sighting Available For Following Whale & Marine Animal Species:</h4>
                <p className="whales-available__p">orca<br/> minke<br/> gray whale<br/> humpback<br/> atlantic white-sided dolphin<br/> pacific white-sided dolphin<br/> dalls porpoise<br/> harbor porpoise<br/> harbor seal<br/> northern elephant seal<br/> southern elephant seal<br/> california sea Lion<br/> steller sea lion<br/> sea otter<br/> other and unknown</p>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/beaches</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">GET</p>
                  <p className="fetch--request--return__p">Returns all beaches in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">v1/beaches/:id</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">GET</p>
                  <p className="fetch--request--return__p">Returns a specific beach sightings in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/whale_sightings</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">GET</p>
                  <p className="fetch--request--return__p">Returns all whale sightings in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/beaches/:id/whale_sightings</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">GET</p>
                  <p className="fetch--request--return__p">Returns 100 most recent whale sightings for specific beach in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/beaches/sighting_type/:id</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">GET</p>
                  <p className="fetch--request--return__p">Returns all beaches where there was a whale/marine animal sighting of the requested type in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/beaches</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">POST</p>
                  <p className="fetch--request--return__p">Creates a new beach, must in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/whale_sightings</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">POST</p>
                  <p className="fetch--request--return__p">Creates a new whale sighting, must send in JSON format</p>
                </div>
                <div className="api-bottom-seperator__div"></div>
              </div>
              <div className="api-block__section__div">
                <h4 className="api-link__h4">https://byob-whalewatchers.herokuapp.com<span className="api-link__span">/api/v1/whale_sightings/:id</span></h4>
                <div className="fetch__div">
                  <p className="fetch--request__p">DELETE</p>
                  <p className="fetch--request--return__p">Deletes whale sighting</p>
                </div>
              </div>
            </section>
          </section>
      </main>
    </div>
  );
}

export default App;
