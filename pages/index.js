import React, {Component} from 'react';
import factory from  '../ethereum/factory';
import { Card, Button, Grid } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import ContributeForm from "../components/DonateForm";

class CampaignIndex extends Component{
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
          return {
            header: '9Fund',
            meta: address,
            description:
                <Link route={`/dashboard/${address}`}>
                    <a>
                        Campaign Dashboard
                    </a>
              </Link>,
            fluid: true
          };
        });
        return <Card.Group items={items} />;
    }
    render() {
            return (
                <Layout>
                    <Grid>
                        <Grid.Row width={10}>
                            <div>
                                <h1>Welcome to the 9Fund</h1>
                                <br/>
                                {this.renderCampaigns()}
                            </div>
                        </Grid.Row>
                        <Grid.Row width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Row>
                    </Grid>
                </Layout>
            );
    }

}

export default CampaignIndex;
