import React, { Component } from 'react';
import { getDevilsLettuce } from '../../services/my-api';

export default class ListPage extends Component {
  state = {
    strains: []
  }
  
    componentDidMount = async() => {
      const strainObj = await getDevilsLettuce();
      const strain = Object.keys(strainObj);
    
      this.setState({ strains: strain });
    }

    render() {
      const strainLinks = this.state.strains.map(strain => (
        <li key={strain}>
          <a href={`/${strain.id}`}>
            <h2>{strain}</h2>
            <h3>{strain.name}</h3>
          </a>
        </li>
      ));
      
      return (
        <>
          <h1>All Strains</h1>
          <ul>
            {strainLinks}
          </ul>
        </>
      );
    }
}
