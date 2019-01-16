import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    const profile = this.props;
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            className="card-img-top card-photo"
            src={profile.profileAvatar}
            alt="Avatar"
          />
          <div className="card-body">
            <label>{profile.profileName}</label>
          </div>
        </div>
      </div>
    )
  }
}
