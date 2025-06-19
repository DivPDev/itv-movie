import { Badge, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Movie(props) {

  const navigate = useNavigate();

  return (
    <div className='m-2'>
        <Card style={{ width: '18rem', height:'12rem' }}>
        <Card.Body>
            <Card.Title>{props.movie.name}<Badge className='ms-1'>{props.movie.reviews.length}</Badge></Card.Title>
            <Card.Text>{props.movie.description}</Card.Text>
        </Card.Body>
        <Button className='my-2' variant="warning" onClick={() => {
          navigate('movie-details', {
            state: {
              ...props.movie
            }
          })
        }}>View more</Button>
        </Card>
    </div>
  )
}

export default Movie