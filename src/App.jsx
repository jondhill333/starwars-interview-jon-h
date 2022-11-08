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
      return (
        <div>
          <h3>{this.state.person.name}</h3>
          <div>{this.state.person.birth_year}</div>
        </div>
      )
    } else
      console.error('hasState is not a boolean')
      return "Something went wrong"
  }
}

export default App;
