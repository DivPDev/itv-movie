import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import { Badge, Button, Card, FloatingLabel, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader';

function MovieDetail() {

    const { state } = useLocation();
    const review = useRef();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddReview = async () => {
        const value = review.current.value?.trim();
        if (value && value.length>=2) {
            setIsLoading(true);
            try {
                const response = await axios.post('https://smoothly-valued-grubworm.ngrok-free.app/api/review/create', {
                    "review": value,
                    "movie": {
                        "id": state?.id
                    }
                });
                setReviews([...reviews, response.data]);
            } catch (error) {
                alert("Soemthing went wrong");
            } finally {
                setIsLoading(false);
            }
        } else {
            alert("Invalid review content");
        }
    }

    const fetchMovie = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://smoothly-valued-grubworm.ngrok-free.app/api/movie/fetch/'+state?.id);
            setReviews(response.data?.reviews || []);
        } catch(error) {
            alert("Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    }

     useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div>
            {
                isLoading ? <Loader /> : <>
                    <div>
                        <h2 className='my-2'>{state?.name}</h2>
                        <p>{state?.description}</p>
                        <Badge bg='bg bg-warning'>{state?.category}</Badge>
                    </div>

                    <div className='my-5'>

                        <div>
                            <FloatingLabel label="Add review">
                                <Form.Control
                                    ref={review}
                                    as="textarea"
                                    placeholder="Leave a review here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button className='w-25 my-2' variant='warning' onClick={handleAddReview}>Add review</Button>
                        </div>

                        <div className='my-2'>
                            {
                                reviews?.length !== 0 ?
                                    reviews?.map((r) => {
                                        return (<Card key={r.id} className='my-2'>
                                            <Card.Body>
                                                <Card.Text>{r.review}</Card.Text>
                                                <Card.Text>{new Date(r.createdDate).toString()}</Card.Text>
                                            </Card.Body>
                                        </Card>)
                                    })
                                    : <p>No reviews present</p>
                            }
                        </div>

                    </div>
                </>
            }

        </div>
    )
}

export default MovieDetail