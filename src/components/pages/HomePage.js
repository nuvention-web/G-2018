import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Divider, Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo.png';

const HomePage = () => (
  <div>
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container>
      <Image src={logo} size='medium' centered/>
    </Container>

    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container text>

      <Grid centered>
        <Header as='h2'> Your Future, Reimagined </Header>
      </Grid>

      <Divider hidden />
      <Divider hidden />
      <Divider hidden />

      <p><strong>Kyte</strong> provides support from a mentor starting sophomore year of high school, and it allows for customized recommendations for individuals that best fit their interests and goals and will help them fulfill their potential. It is a community from extending from online to real-world relationships. At Kyte, we show our students what is possible in life beyond what they define for themselves. </p>

    </Container>

    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container>
      <Grid centered columns={5}>
        <Grid.Column textAlign={'center'}>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfloXOGCkqgkwKV6q3atHPkWJ3QFrDxF6vYdk9vkhS4k1zk1Q/viewform?usp=sf_link'>
            <Button primary>
              High School Student
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column textAlign={'center'}>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSc_L4iktnIUBaWvQb8up37Ewlw2cWEs8v6OyqXVxX9th243Iw/viewform?usp=sf_link'>
            <Button primary>
              College Student
            </Button>
          </a>
        </Grid.Column>
        <Grid.Column textAlign={'center'}>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfRankNYBFIVDOUpPTsg1IxVm50iZilUZecvMF8MRK5hVINCQ/viewform?usp=sf_link'>
            <Button primary>
              Industry Professional
            </Button>
          </a>
        </Grid.Column>
      </Grid>
    </Container>

  </div>
);

export default HomePage;
