import React, { useState, useEffect } from "react";
import { doExtractYearFromBBY } from "./utils";

const App = () => {
  const [people, setPeople] = useState()

  useEffect(() => {
    const req = new XMLHttpRequest();
    try {
      req.onload = async () => {
        const data = await JSON.parse(req.responseText)
        setPeople(data.results) ?? []
      }
    } catch (error) {
      return <div>Something went wrong</div>
    }
    req.open("GET", "https://swapi.dev/api/people");
    req.send();
  }, [])

  return (
    <ul>
      {people ? people?.map(person => <PersonComponent person={person} />) : 'Loading'}
    </ul>
  );
}

/**PersonComponent is a person component.*/
class PersonComponent extends React.Component {
  async componentDidMount() {
    try {
      const resp = await window.fetch(this.props.person['url'])
      const text = await resp.text()
      const person = await JSON.parse(text)
              // Set the state.
      this.setState({ person: person })
    } catch {
      return <b>Something went wrong</b>
    }
  }

  render() {
    const has_state = this.state !== null
    // Is has_state false?
    if (has_state === false) {
      return "Loading..."
    } else if (has_state === true) {
      /* extract year from BBY birth date */
      let year = doExtractYearFromBBY(this.state.person.birth_year)
      return (
        <div>
          {/* Desplay the charector nam */}
          <h3>{this.state.person.name}</h3>
          <div>Birth date: {this.state.person.birth_year}</div>
          {year !== 'error' && <div>Birth year: {doExtractYearFromBBY(this.state.person.birth_year)}</div>}
          {year !== 'error' && year % 2 === 0 ? <div>Is even? Yes</div> : null}
          {year !== 'error' && year % 2 !== 0 ? <div>Is even? No</div> : null}
        </div>
      )
    } else
      console.error('has_state is not a boolean')
      return "Something went wrong"
  }
}

export default App;