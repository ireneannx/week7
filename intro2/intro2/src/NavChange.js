import React, { Component } from 'react';

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
    selectedLanguage: "All"
  }

  updateLanguage = (lang) => {
    this.setState({
      selectedLanguage: lang
    })
  }

  render() {

    const { selectedLanguage } = this.state
    return (
      <LangSelect selectedLanguage={selectedLanguage} updateLanguage={this.updateLanguage} />
    );
  }
}

export default Nav;