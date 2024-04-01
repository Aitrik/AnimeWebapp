import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { details } from '../Redux/Slice'

export default function Anime_details() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { animeDet } = useSelector(state => state.Sli)
    useEffect(() => {
        dispatch(details(id))
    }, [])
    console.log(animeDet)
    return (
        <>
            <section className="anime-details spad">
                <div className="container">
                    <div className="anime__details__content">
                        <div className="row">
                            <div className="col-lg-3">
                                <div
                                    className="anime__details__pic set-bg"
                                    style={{ backgroundImage: `url(${animeDet?.images?.jpg?.image_url})` }}

                                >
                                    <div className="comment">
                                        <i className="fa fa-comments" /> 11
                                    </div>
                                    <div className="view">
                                        <i className="fa fa-eye" /> 9141
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="anime__details__text">
                                    <div className="anime__details__title">
                                        <h3>{animeDet.title}</h3>

                                    </div>
                                    <div className="anime__details__rating">
                                        <div className="rating">
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-star" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-star-half-o" />
                                            </a>
                                        </div>
                                        <span>1.029 Votes</span>
                                    </div>
                                    <p>
                                        {animeDet?.synopsis?.slice(0, 500)}...
                                    </p>
                                    <div className="anime__details__widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li>
                                                        <span>Type:</span> {animeDet.type}
                                                    </li>
                                                    <li>
                                                        <span>Studios:</span> {animeDet?.studios?.length > 0 ? animeDet.studios[0].name : 'Unknown'}

                                                    </li>
                                                    <li>
                                                        <span>Year:</span>{animeDet.year}
                                                    </li>
                                                    <li>
                                                        <span>Status:</span> {animeDet.status}
                                                    </li>
                                                    <li>
                                                        <span>Genre:</span> {animeDet?.genres?.map(item => item.name).join(', ')}
                                                    </li>

                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li>
                                                        <span>Scores:</span> {animeDet.score}/10
                                                    </li>
                                                    <li>
                                                        <span>Rating:</span>{animeDet.rating}
                                                    </li>
                                                    <li>
                                                        <span>Duration:</span> {animeDet?.broadcast?.time}
                                                    </li>
                                                    <li>
                                                        <span>Quality:</span> HD
                                                    </li>
                                                    <li>
                                                        <span>Episodes:</span> {animeDet.episodes}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="anime__details__btn">
                                        <a href="#" className="follow-btn">
                                            <i className="fa fa-heart-o" /> Follow
                                        </a>
                                        <a href="#" className="watch-btn">
                                            <span>Watch Now</span> <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
