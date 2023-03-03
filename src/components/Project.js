import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Project(props) {
    return (
        <Card className='card'>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link href={props.deployed}>Deployment</Card.Link>
        <Card.Link href={props.repo}>Respository</Card.Link>
      </Card.Body>
    </Card>
    );
}