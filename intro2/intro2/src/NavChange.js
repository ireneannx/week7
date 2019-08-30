import React, { Component } from 'react';

class Nav extends Component {
  state = {
    selectedLanguage: "All"
  }

  updateLanguage = (lang) => {
    this.setState({
      selectedLanguage: lang
    })
  }

  render() {
    const languages = ['All', "JavaScript", "Python", "Ruby"];
    const { selectedLanguage } = this.state
    return (
      <div>
        {languages.map((lang) => <li key={lang} style={selectedLanguage === lang ? { color: "#FF0000" } : null} onClick={() => this.updateLanguage(lang)}>{lang}</li>)
        }
      </div>
    );
  }
}

export default Nav;