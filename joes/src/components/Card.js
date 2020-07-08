import React from 'react';
import {Card, CardImg, CardBody} from 'reactstrap';

class MyCard extends React.Component {
    render(){
    return (
        <div>
        <Card>
        <CardBody body inverse style={{ 
            backgroundColor: 'grey', 
            border: '6px dashed green',
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
            Name: {this.props.userProps.name}
        </div>
        <div>
            Location: {this.props.userProps.location}
        </div>
        <div>
            Login: {this.props.userProps.login}
        </div>
        <div>
            Public Repos: {this.props.userProps.public_repos}  
        </div>
        </CardBody>
        </Card>
       </div>
    )}
}

export default MyCard;

