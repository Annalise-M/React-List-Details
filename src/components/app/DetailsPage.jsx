import { React, Component, useParams } from 'react';
import { getDevilsLettuce } from '../../services/my-api';

export default class Details extends Component {
    state = {
      strain: {}
    }

    componentDidMount = async() => {
      const { match: { params } } = this.props;
      
      await getDevilsLettuce(params.id)
        .then(strain => this.setState({ strain }));
    };

    render() {
      const { strain } = this.state;
      console.log(this.state);

      return (
        <>
          <h2>{strain.name}</h2>
          <p>
                Type: {strain.race} <br />
                Flavors: {strain.flavors} <br />
                Effects: {strain.effects} <br />
          </p>
        </>
      );
    }

}
