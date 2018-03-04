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
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container>
      <Image src={logo} size='large' centered/>
    </Container>

    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container text>

      <Grid centered>
        <Header as='h2'> Some Descriptor </Header>
      </Grid>

      <Divider hidden />
      <Divider hidden />
      <Divider hidden />

      <p>Paragraph 1</p>

      <Divider hidden />
      <Divider hidden />

      <p>Paragraph 2</p>
    </Container>

    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container>
      <Grid centered columns={5}>
        <Grid.Column textAlign={'center'}>
          <Link to='/mentorsignup'>
            <Button primary>
              High School Student
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column textAlign={'center'}>
          <Link to='/menteesignup'>
            <Button primary>
              College Student
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column textAlign={'center'}>
          <Link to='/menteesignup'>
            <Button primary>
              Industry Professional
            </Button>
          </Link>
        </Grid.Column>
      </Grid>
    </Container>

  </div>
);

export default HomePage;
