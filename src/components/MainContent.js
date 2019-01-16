import React, { Component } from 'react';
import Card from './Card';
import profilesJSON from '../profiles';
//const profilesJSON = require('../profiles.json');

export default class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
      page: 0,
      limit: 10,
    };
  }

  indexProfile() {
    //TODO - Implementar busca de usuarios
    this.setState({
      profiles: profilesJSON.data,
      page: profilesJSON.page,
      limit: profilesJSON.limit,
    });
  }

  componentDidMount() {
    this.indexProfile();
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          {
            this.state.profiles.map((profile) => (
              <Card key={profile.id} profile={profile}/>
            ))
          }
        </div>
      </div>
    )
  }
}
