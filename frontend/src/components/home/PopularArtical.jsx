import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { get_old_recent_acticle } from '../../store/actions/home/homeAction'

const PopularArtical = () => {
    const dispatch = useDispatch()
    const { oldArticle, recentArticle, allTag, allCategory } = useSelector(state => state.homeReducer)

    useEffect(() => {
        dispatch(get_old_recent_acticle())
    }, [])


    return (
        <>
        {
            oldArticle.length > 0 && oldArticle.map((art, index) =>
            <div key={index} >
            <div className="row">
                <div className="col-4">
                    <Link to='/' className='image'>
                        <img src={`http://localhost:3000/articalImage/${art.image}`} alt="image" width={100} height={60} />
                    </Link>
                </div>
                <div className="col-8">
                    <div className="title-time">
                        <Link to={`/artical/details/jg`}>{art.title}</Link>
                        <br />
                        <span>2 jun 2022</span>
                    </div>
                </div>
            </div>
            </div>
            )
        }
        </>
    )
};

export default PopularArtical;