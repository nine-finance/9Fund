import React, {Component} from 'react';
import factory from  '../ethereum/factory';
import { Card, Button, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component{
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
          return {
            meta: address,
            description:
                <Link route={`/dashboard/${address}`}>
                    <a>
                         Donate
                    </a>
              </Link>,
            fluid: true
          };
        });
        return <Card.Group items={items} />;
    }
    render() {
        const items = this.props.campaigns.map(address =>{return{address}});
            return (
                <Layout>
                    <Grid>
                        <Grid.Row width={10}>
                            <div>
                                <br/>
                                {this.renderCampaigns()}
                            </div>
                        </Grid.Row>
                    </Grid>
                </Layout>
            );
    }

}

export default CampaignIndex;
