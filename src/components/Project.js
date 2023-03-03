import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link href={props.deployed}>View Deployment</Card.Link>
        <Card.Link href={props.repo}>View Respository</Card.Link>
      </Card.Body>
    </Card>
    );
}