import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

function AddMovie() {

  const name = useRef();
  const description = useRef();
  const category = useRef();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState();

  const handleAddMovie = async () => {
    if (name.current.value.trim() && name.current.value.trim().length >= 2 && category.current.value) {
      try {
        setIsLoading(true);
        await axios.post('http://localhost:9090/api/movie/create', {
          "name": name.current.value?.trim(),
          "category": category.current.value,
          "description": description.current.value?.trim(),
        });
        navigate('/');
      } catch (error) {
        alert('Soemthing went wrong. error: ' + error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Details are invalid");
    }
  }

  return (
    isLoading ? <Loader /> : <div>
      <h4 className='my-2'>Add Movie</h4>
      <div>
        <Form.Control
          ref={name}
          className='my-2'
          type="text"
          placeholder="Movie name"
        />

        <Form.Select aria-label="Default select example" ref={category}>
          <option value="HORROR">Horror</option>
          <option value="ACTION">Action</option>
          <option value="ROMANTIC">Romantic</option>
          <option value="COMEDY">Comedy</option>
          <option value="TRILLER">Thriller</option>
          <option value="FICTION">Fiction</option>
        </Form.Select>

        <FloatingLabel className='my-2' label="Description">
          <Form.Control
            ref={description}
            as="textarea"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

        <Button className='w-100' variant='warning' onClick={handleAddMovie}>Add Movie</Button>
      </div>
    </div>
  )
}

export default AddMovie