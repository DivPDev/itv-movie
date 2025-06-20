import axios from 'axios';
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Loader from '../components/Loader';
import Movie from '../components/Movie';

function Movies() {

    const [movies, setMovies] = useState([]);
    const [originalMovies, setOriginalMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchMovies = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://smoothly-valued-grubworm.ngrok-free.app /api/movie/fetch');
            setMovies(response?.data)
            setOriginalMovies(response?.data);
        } catch(error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const searchMovies = (movieName) => {
        const searchedMovies = originalMovies.filter((movie) => {
            return movie.name.toLowerCase().startsWith(movieName.toLowerCase());
        });
        setMovies(searchedMovies)
    }


    return (
    <>
        <h4>Movies</h4>
        {
            isLoading ? 
            <Loader/> : 
            <>
                <div className='my-2'>
                    <Form.Control
                        className='my-2'
                        type="text"
                        placeholder="Search movie"
                        onChange={(event) => {
                            searchMovies(event.target.value);
                        }}
                    />
                    <div className='d-flex flex-wrap flex-direction-row my-2'>
                        {
                            movies.map((movie) => {
                                return (
                                   <Movie key={movie.id} movie={movie} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default Movies