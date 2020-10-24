import React, { Component } from 'react';
import { getDevilsLettuce } from '../../services/my-api.js';

export default class ListPage extends Component {
    state = {
      strains: []
    }

    componentDidMount = async() => {
      const strains = await getDevilsLettuce();
      
      this.setState({
        names: strains
      });

      console.log(strains, 'wheeerrrreeetheeeeefuckkkkkkkkkkissssthisssssss');
    }

    render() {
      const { strains } = this.state;

      return (
        <>
          <h1>All Strains</h1>
          {
            strains
            && <div>
              <p>Name: </p>
            </div>
          }
        </>
      );
    }
}
