import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 900,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3,4];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Lakshmi Narasimhan Raghavan
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Lakshmi Narasimhan Raghavan
            </Typography>                                   
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Working at Salesforce as a Software Engineer since Sep'14. I am a part of the team that builds products for SMBs.
              I have a breadth of experience in both Software Development and Testing. I like working with Ruby on Rails, Javascript,
              Reactjs, Salesforce Lightning, Elastic Search, Selenium Webdriver, Cucumber and Watir-Webdriver.
            </Typography>             
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="https://www.linkedin.com/in/lakshminarasimhanraghavan/">
                    Linkedin Profile
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="https://github.com/rajulonline">
                    Github Repo
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Typography variant="h4" align="center" color="textSecondary" paragraph>
            Checkout some of my work that i did to understand the tech.<br/>            
        </Typography>
        <Typography variant="subtitle1" align="center" color="textPrimary" paragraph>
            (They might be little slow to load because i am using heroku free tier)
            </Typography>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            
              <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/assets/A_Simple_React_App.jpg" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      A Simple Reactjs App.
                    </Typography>
                    <Typography>
                      A simple app to understand props, components and form submissions.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button variant="contained" default="primary" href="https://easy-react-app.herokuapp.com/">
                        App
                  </Button>

                  <Button variant="contained" default="inherit" href="https://github.com/rajulonline?tab=repositories">
                        Git-Repo Link
                  </Button>                   
                  </CardActions>
                </Card>
              </Grid>

            {/* This is the second project*/}

                          <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/assets/Rails+React.png" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Yet another Reactjs app with Rails Api.
                    </Typography>
                    <Typography>
                      This time I have also explored Flux architechture.
                      This is a simple app which returns the name of the user based on the github username.
                      The form calls the github's public api to fetch the user details.
                      Used Flux for single responsibility and better modularizing the code.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://easy-react-app.herokuapp.com/">
                        App
                  </Button> 
                   <Button variant="contained" default="inherit" href="https://github.com/rajulonline?tab=repositories">
                        Git-Repo Link
                  </Button>   
                  </CardActions>
                </Card>
              </Grid>


            {/* This is the third project*/}

                          <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/assets/ElasticSearch.jpeg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      RoR+Reactjs+Elastic Search
                    </Typography>
                    <Typography>
                      Yet another app built on Ruby on Rails framework with Reactjs on the client side.
                      This time around i explored ElasticSearch in the app. Used BonsaiElastic to host on
                      heroku.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://homesub.herokuapp.com/">
                        App
                  </Button>  
                   <Button variant="contained" default="inherit" href="https://github.com/rajulonline?tab=repositories">
                        Git-Repo Link
                  </Button>  
                  </CardActions>
                </Card>
              </Grid>

            {/* This is the fourth project*/}

                          <Grid item sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/assets/Rails+Stripe.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      RoR+Reactjs+Stripe
                    </Typography>
                    <Typography>
                      One of the very first apps that i built while learning Reactjs. Also explored the use of 
                      Stripe api for checkout. The checkout solution will not process any real credit card.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://online-store-stripe-rails.herokuapp.com/">
                        App
                  </Button> 
                   <Button variant="contained" default="inherit" href="https://github.com/rajulonline?tab=repositories">
                        Git-Repo Link
                  </Button>   
                  </CardActions>
                </Card>
              </Grid>



           
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
          <Typography component="h6" variant="h2" align="center" color="textPrimary" gutterBottom>
              Philosophy
            </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Advanced Technology and software written to solve complex problems is like magic. A good software engineer is a like a 
              magician.
              Internet has given us access to a wealth of information we never had like 20years ago. 
              With so many well written books, blog posts, MOOCs, study groups etc. the playing field is level like never before.
              I believe that any individual who is motivated(intrinsically & extrinsically) when given the right tools and guidance can become a magician.
            </Typography>  
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);