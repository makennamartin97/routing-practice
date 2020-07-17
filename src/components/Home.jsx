import React from 'react';
import { Link } from '@reach/router';


const Home = props => {
    return(
        <div>
            <div className="jumbotron bg-info text-light">Welcome!</div>
            <ul>
                <p className="text-muted">Type in any number after localhost:3000/ to display or select one below:</p>
                <Link to="/4" className="text-info">Go to number 4 (/4) </Link><br />
                <Link to="/6" className="text-dark">Go to number 6 (/6) </Link><br />
                <br /><p className="text-muted">Type in any word after localhost:3000/ to display or select "hello" below:</p>
                <Link to="/hello" className="text-warning">Go to hello (/hello)</Link><br />
                <br /><p className="text-muted">Type in any word you want after localhost:3000/ to display, then select the background color and text color. Or, select from below:</p>
                <Link to="/hello/red/blue" className="text-primary">Go to hello page with blue and red (/hello/red/blue)</Link><br />
                <Link to="/hello/black/red" className="text-danger">Go to hello page with black and red (/hello/black/red)</Link><br />
                <Link to="/goodbye/green/blue" className="text-success">Go to goodbye page with green and blue (/hello/green/blue)</Link>
            </ul>
      
        </div>
    )
}




export default Home;