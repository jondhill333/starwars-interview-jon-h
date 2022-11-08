import React, { useState, useEffect } from "react";

const App = () => {
  const [people, setPeople] = useState()

  useEffect(() => {
    const req = new XMLHttpRequest();
    try {
      req.onload = () => {
        const data = JSON.parse(req.responseText)
        setPeople(data.results)
      }
    } catch (error) {
      return <div>Something went wrong</div>
    }
    req.open("GET", "https://swapi.dev/api/people");
    req.send();
  }, [])

  return (
    <ul>
      {people ? people.map(person => <Person person={person} />) : 'Loading'}
    </ul>
  );
}

class Person extends React.Component {
  async componentDidMount() {
    try {
      const resp = await window.fetch(this.props.person['url'])
      const text = await resp.text()
      const person = JSON.parse(text)
      this.setState({ person: person })
    } catch {
      return <b>Something went wrong</b>
    }
  }

  render() {
    const hasState = this.state !== null
    if (hasState === false) {
      return "Loading..."
    } else if (hasState === true) {
      let year = doExtractYearFromBBY(this.state.person.birth_year)
      return (
        <div>
          <h3>{this.state.person.name}</h3>
          <div>Birth year: {this.state.person.birth_year}</div>
          {year !== 'error' && <div>Year number: {doExtractYearFromBBY(this.state.person.birth_year)}</div>}
        </div>
      )
    } else
      console.error('hasState is not a boolean')
      return "Something went wrong"
  }
}

function doExtractYearFromBBY(str) {
  try {
    if (typeof str !== 'string') {
      console.error(`${str} was not a string`)
      throw Error('not a string')
    }
    if (!/BBY$/.test(str)) {
      console.error(`${str} did not end in BBY`)
      throw Error('not in BBY format')
    }
    const number = parseInt(str.substring(0, 2));
    if (isNaN(number)) {
      console.error(`${str} was not a number`)
      throw Error('not a number')
    }
    return number
  } catch (error) {
    return 'error'
  }
}

export default App;