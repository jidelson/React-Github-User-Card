import React from 'react';
import {Card, CardImg, CardBody} from 'reactstrap';

class FollowerCard extends React.Component {
    render(){
    return (
        <div>
        <Card>
        <CardBody body inverse style={{ 
            backgroundColor: 'grey', 
            border: '6px dashed yellow',
            marginLeft:'35%',
            marginRight:'35%',
            marginTop: '2%',
            marginBottom: '2%',
            paddingTop: '1%',
            paddingBottom: '1%',
            boxShadow: '5px 10px',
            color: 'blue'
            }}>
        <CardImg src={this.props.userProps.avatar_url} />
       
       
        <div>
            Login: {this.props.userProps.login}
        </div>
       
       <div>
           Id: {this.props.userProps.id}
       </div>

       <div>
            URL: {this.props.userProps.html_url}
       </div>
        </CardBody>
        </Card>
       </div>
    )}
}

export default FollowerCard;

