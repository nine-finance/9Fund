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
                                <br/>
                                <h3>This is a nonprofit fundraising app for 9 Finance for Everyone</h3>
                                <p> Just like any other form of value exchange, when you are fundraising there needs to be an intermediary to ensure the funds being raised are being used the way the donors/investors intended they be used.
                                    We have to tackle the issue of TRUST head on.</p>
                                <p> Ideally, fundraising should look something like this</p>
                                <div align="center"><img src="/images/ideal.png" alt="ideal" width="450px"/></div>
                                <p> In most for-profit corporations, a pseudo-trust system is established due to the distribution of profits.</p>
                                <p> However, in nonprofit and informal fundraising campaigns the pseudo-trust system established by profit sharing is non-existent thereby making this more precarious territory.</p>
                                <div align="center"><img  src="/images/not%20ideal.png" alt="not-ideal" width="450px"/></div>
                                <p> 9 Finance for Everyone happens to be a nonprofit, therefore it is important that we somehow resolve the issue of trust in fundraising</p>
                                <p> Our approach towards disclosing finances is very simple, Radical Transparency. All information about our finances is publicly available</p>
                                <p> To take our approach a step further, we are working with blockchain technology. Blockchain is commonly referred to as a trustless environment</p>
                                <div align="center"><img src="/images/9Fund.png" alt="9Fund" width="450px"/></div>
                                <p> In summary, to help ensure transparency, all donations to 9 Finance for Everyone would have to be made in ethereum-based cryptocurrencies directly to this website.
                                    Donations cannot be disbursed by 9 Finance until 50% of donors approve a spending request created by 9 Finance.</p>
                                {this.renderCampaigns()}
                                <p> All donations should be made to this wallet address</p>
                            </div>
                        </Grid.Row>
                    </Grid>
                </Layout>
            );
    }

}

export default CampaignIndex;
