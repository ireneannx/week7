import React, { Component } from 'react';
import fetchPopularRepos from "./RepoApi";
// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';

const LangSelect = (props) => {
  //instead of sending props, we can also do ({selectedLanguage, updateLanguage})
  const languages = ['All', "JavaScript", "Python", "Ruby"];
  console.log(props)
  return (
    <div style={{ display: "flex" }}>
      {languages.map((lang) => <li key={lang} style={props.selectedLanguage === lang ? { color: "#FF0000" } : null} onClick={() => props.updateLanguage(lang)}>{lang}</li>)
      }
    </div>
  )
}

class Nav extends Component {
  state = {
    selectedLanguage: "All", //by default, setting this
    repos: []
  }

  updateLanguage = (lang) => {
    this.setState({
      selectedLanguage: lang,
      repos: []
    })

    fetchPopularRepos(lang).then(
      //response is the datarepos 
      (datarepos) => {
        this.setState({
          repos: datarepos,
        })
      }
    )
  }

  componentDidMount() {
    console.log("From component did mount: ")
    this.updateLanguage(this.state.selectedLanguage)
  }

  render() {

    const { selectedLanguage, repos } = this.state
    return (
      <div>
        <LangSelect selectedLanguage={selectedLanguage} updateLanguage={this.updateLanguage} />
        <div className="container">
          <div className="row">
            {repos.map(
              ({ owner }) => {
                return (
                  // <Col xs={6} md={4}><Image src={owner.avatar_url} thumbnail /></Col>
                  <div className="col-sm-3">
                    <img src={owner.avatar_url} style={{ width: "200px", height: "200px" }} />
                  </div>
                )
              }
            )}
          </div>

        </div>
        {/* mapping through repos and displaying the image  */}

      </div>
    );
  }
}

export default Nav;