import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import profile from './about/profile_bw.jpg'
import architecture from './about/ProductionDS.jpg'

import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AspectRatio from 'react-aspect-ratio';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    
  },
  heading: {
    width: '100%',
  },
  gridList: {
    width: 1200,
    height: 400,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },

  media: {
    width: '80vw',
    maxWidth: 800,
    
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

//              <a
//                className="App-link"
//                href="http://demo.ryptco.com:5006"
//                target="_blank"
//                rel="noopener noreferrer"
//            >
//                      My first example
//              </a>


function AboutPage(props) {
  const { classes } = props;

    return (
    <div className={classes.root}>
	    <GridList cellHeight={400} cols={1} spacing={2} className={classes.gridList}>
          <GridListTile key={profile} >
            <img src={profile} alt="this is the alt" />
          </GridListTile>
      </GridList>
      
	
	   <Typography variant="subtitle1" gutterBottom>
	      <b> Welcome to my app for demos! </b> It serves as a testbed and portfolio for
		  delivering projects and patterns all the way to production.
	      All the demos--including visuals, machine learning models, and 
        live data processing--will be appearing in the coming days.
	    </Typography>

	

      <Typography variant="h4" color="primary" gutterBottom>
        Background 
      </Typography>

	<Typography variant="body1" gutterBottom>
  I am an experimental particle physicist moving into the technology 
  industry. After many years at {<a href='https://home.cern/'>CERN</a>} I have grown an enthusiasm for communicating 
  complex ideas with a distilled elegance and economy. Successfully 
  delivering projects and publishing through the world's largest experiment 
  with thousands of collaborators from hundreds of countries 
  has taught me to "close the loop" in tough environments 
  with multiple competing parties, interests, and ideas.
	</Typography>
	    <Typography variant="h4" color="primary" gutterBottom>
        Motivation 
      </Typography>


<Typography variant="body1" gutterBottom>
  The advertising success of "AI" and "Machine Learning" can create 
  for its practitioners a heavy demand for the frequent communication of its ideas, results, and progress  
  in the business environment--an environment in which its mathematical foundations may not be widely understood. 
  Satisfying this demand is currently an open problem. 
</Typography>

  <Typography variant="body1" gutterBottom>
  I recently co-founded an investment management company in the crytocurrency space.
  Some barriers to success for this company 
  turned out to be unrelated to the problems of mathematical finance. 

  Rather unexpectedly, they were attributable to all too common data science headaches:
  <ol>
  <li> adoption of a philosophy of data-driven decision making,</li>
  <li> low quantitative literacy,</li>
  <li> the demand for production-level visual content at early stages to fill the gap.</li>
  </ol>
  This website is a sandbox for addressing the last 
  point--addressing the first two outright is a project of different 
  scope, to put it politely.
  But readily wrapping mathematical ideas in
  easily-accessible visual content helps with conveying them. 
  This is an interesting problem--and one whose solution is immensely valuable.
  </Typography>
 
    <Typography variant="h4" color="primary" gutterBottom>
    Solution
  </Typography>     
  
  <Typography variant="body1" gutterBottom>
  There are many projects tackling the problem of quickly delivering
  scalable, server-backed, interactive visualization to the web. 
  I think {<a href='https://bokeh.pydata.org/en/latest/'>Bokeh</a>} is the closest to giving real access to a flexible modern toolbox 
  for visual communication to 
  quantitative specialists who need to focus their time on solving 
   problems and efficiently communicate with a diverse team and clients. 
  </Typography>
  <Typography variant="body1" gutterBottom>
   {<a href='http://holoviews.org/'>Holoviews</a>} and associated projects promise (in time) to provide most of the tools to handle the common time 
  wasters when producing web visualization, like issues related to duplication of work, 
  threading, blocking,
  available memory, and callbacks. Scaling and deployment are the remaining issues 
  with any Python project on the web,
  but a lightweight server like {<a href='https://www.tornadoweb.org/en/stable/'>Tornado</a>} along
  with dedicated load balancing and routing from a tool like {<a href='https://www.nginx.com/'> NGiNX</a>} in a microservices architecture
  seems to theoretically provide 
  the solution. 
  </Typography>

  <Divider variant="middle" color="primary"/>

  <Typography variant="body1" gutterBottom>
  In practice, exposing python to the internet is a challenge because 
  thread safety is an ever present threat to stability and scalability, 
  and async architecture has not found 
  its way into all the most useful packages yet.
  This site exists to make progress in deploying these 
  technologies together in a scalable React App. Thanks to orchestration technologies
  like docker compose and kubernetes a stable application can be 
  delivered without entirely stable services!
  </Typography>

  <Typography variant="h4" color="primary" align='center' className={classes.heading} gutterBottom>
    Architecture
  </Typography> 

  <AspectRatio>
    <img src={architecture} alt="this is the alt" className={classes.media}/>
  </AspectRatio>

    </div>
  );
}

AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(AboutPage));
