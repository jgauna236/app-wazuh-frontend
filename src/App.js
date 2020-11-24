import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { AgentComponent } from './pages/agents';
import { Home } from './pages/home';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/agent' component={AgentComponent}/>
    </Switch>
  </main>
)


class NavLink extends Component {

  render() {
      return (
        <li className={"nav-item " + (this.props.isActive ? "active": "")}>
                  <Link 
                    className="nav-link" 
                    to={this.props.path}
                    onClick={() => this.props.onClick()}
                  >
              {this.props.text}</Link>
        </li>
      );
  }
}


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [
        {path: "/agent", text: "Agents", isActive: false}
      ]
    }
  }

  handleClick(i) {
    const links = this.state.links.slice(); 
    for (const j in links) {
      links[j].isActive = i == j ;
    }
    this.setState({links: links});
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
          <Link className="navbar-brand" to="/">Home</Link>
          <ul className="navbar-nav">
            {this.state.links.map((link, i) => 
              <NavLink 
                path={link.path} 
                text={link.text} 
                isActive={link.isActive}
                key={link.path} 
                onClick={() => this.handleClick(i)}
              /> 
              )}
          </ul>
        </nav>
      </div>
    );
  }
}

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;