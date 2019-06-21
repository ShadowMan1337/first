import React from "react";
import ResultsTable from "./ResultsTable";
import CacheInfo from "./CacheInfo";
import CachedSearch from "./CachedSearch";
export default class SearchExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleResults = this.handleResults.bind(this);
    this.CachedSearch = new CachedSearch(this.search, this.handleResults);
  }

  handleQueryChange(query) {
    this.setState({ query });
    this.CachedSearch.changeQuery(query);
  }

  handleResults(results) {
    this.setState({ results });
  }


render() {
    return (
      <div>
        <h3>Class Based Search</h3>
        <form>
          <label>Search:</label>
          <input
            onChange={({ target: { value } }) => this.handleQueryChange(value)}
          />
        </form>

        <ResultsTable results={this.state.results} />
        <CacheInfo cacheObject={this.CachedSearch} />
      </div>
    );
  }
}