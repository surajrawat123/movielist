import React from 'react'
import { useSelector} from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate } from 'react-router';
import { release , rank } from '../actions/index';
import './Home.scss';

const Home = () => {
    const data = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(data);
  
    const handleSelect = (e) =>{
        const value = e.target.value;
        if(value==='releaseDate'){
            dispatch(release(data));
        }else if(value==='rank'){
            dispatch(rank(data));
        }
    }

    const detailsPage = (value) => {
        navigate('/details',{state:value});
    }

    return (
        <div className='movie-container'>
            <select onChange={handleSelect} className="selector">
                {data.components[0].items.map((e) => (
                    <option>{e.valueToOrderBy}</option>
                ))}
            </select>
            <div className='movies'>
                {data.components[1].items.map((e) => (
                    <div className='movie' onClick={() => detailsPage(e)}>
                        <img className='movie-img' src={e.image} alt='movie' />
                        <p className='movie-title'>{e.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;


