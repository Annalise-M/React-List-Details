import React, { Component } from 'react';
import { getDevilsLettuce } from '../../services/my-api.js';

export default class ListPage extends Component {
    state = {
      strains: []
    }

    async componentDidMount() {
      const strains = await getDevilsLettuce();
      // eslint-disable-next-line max-len
      console.log(strains, 'wheeerrrreeetheeeeefuckkkkkkkkkkissssthissssssssssssss');
    }

    render() {
      const { strains } = this.state;
      return (
        <>
          <h1>List of Strains</h1>
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
