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

    <Container>
      <Image src={logo} size='large' centered/>
    </Container>

    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />
    <Divider hidden />

    <Container text>
      <Header as='h2'> Some Descriptor </Header>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </Container>

    <Container>
      <Grid centered columns={3}>
        <Grid.Column>
          <Link to='/mentorsignup'>
            <Button primary>
              High School Student
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to='/menteesignup'>
            <Button primary>
              College Student
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
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
