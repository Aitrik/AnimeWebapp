import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recommend, top } from '../Redux/Slice'
import { Link } from 'react-router-dom'

export default function Home() {
    const dispatch = useDispatch()
    const { recommendedAnime } = useSelector(state => state.Sli)
    const { topAnime } = useSelector(state => state.Sli)

    useEffect(() => {
        dispatch(recommend())
    }, [])

    useEffect(() => {
        dispatch(top())
    }, [])
    console.log(recommendedAnime)
    console.log(topAnime)
    return (
        <>


            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="popular__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Popular Shows</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">

                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ gap: "15px" }}>
                                {topAnime.slice(0, 9).map((item) => (
                                        <Link to={`/${item.mal_id}`}>
                                            <div className="card" style={{ width: "200px", height: "320px", border: "1px solid gray", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                                                <img src={item.images.jpg.image_url} alt={item.title} style={{ height: "190px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                                                <div className="card-body" style={{ backgroundColor: "#f5f5f5", color: "black" }}>
                                                    <h5 className="card-title" style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bold", margin: "0", padding: "10px 0" }}>{item.title}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                            </div>

                            <div className="trending__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Recommended Shows</h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                        <div className="btn__all">

                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ gap: "15px" }}>
                                    {recommendedAnime.slice(0, 9).map((item) => (
                                        <div className="card" style={{ width: "200px", height: "320px", border: "1px solid gray", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                                            <img src={item.entry[0].images.jpg.image_url} alt={item.title} style={{ height: "190px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                                            <div className="card-body" style={{ backgroundColor: "#f5f5f5", color: "black" }}>
                                                <h5 className="card-title" style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bold", margin: "0", padding: "10px 0" }}>{item.entry[0].title}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            <div className="recent__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Recently Added Shows</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row" style={{gap:"15px"}}>
                                {topAnime.slice(9,15).map((item) => (
                                        <Link to={`/${item.mal_id}`}>
                                            <div className="card" style={{ width: "200px", height: "320px", border: "1px solid gray", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                                                <img src={item.images.jpg.image_url} alt={item.title} style={{ height: "190px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                                                <div className="card-body" style={{ backgroundColor: "#f5f5f5", color: "black" }}>
                                                    <h5 className="card-title" style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bold", margin: "0", padding: "10px 0" }}>{item.title}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="live__product">
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8">
                                        <div className="section-title">
                                            <h4>Live Action</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="row" style={{gap:"15px"}}>
                                {topAnime.slice(15,24).map((item) => (
                                        <Link to={`/${item.mal_id}`}>
                                            <div className="card" style={{ width: "200px", height: "320px", border: "1px solid gray", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                                                <img src={item.images.jpg.image_url} alt={item.title} style={{ height: "190px", objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} />
                                                <div className="card-body" style={{ backgroundColor: "#f5f5f5", color: "black" }}>
                                                    <h5 className="card-title" style={{ fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bold", margin: "0", padding: "10px 0" }}>{item.title}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="product__sidebar">
                                <div className="product__sidebar__view">
                                    <div className="section-title">
                                        <h5>Top Views</h5>
                                    </div>



                                    <div className="filter__gallery">
                                        {topAnime.slice(0, 15).map((item, index) => (
                                            <Link to={item.trailer.url} key={index}>
                                                <div
                                                    className="product__sidebar__view__item set-bg mix day years"
                                                    style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}
                                                >
                                                    <div className="ep">{item.episodes} episodes</div>

                                                    <h5>
                                                        <a href="#">{item.title}</a>
                                                    </h5>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>


                                </div>
                                <div className="product__sidebar__comment">
                                    <div className="section-title">
                                        <h5>New Comment</h5>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-1.jpg" alt="" />
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5>
                                                <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
                                            </h5>
                                            <span>
                                                <i className="fa fa-eye" /> 19.141 Viewes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-2.jpg" alt="" />
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5>
                                                <a href="#">Shirogane Tamashii hen Kouhan sen</a>
                                            </h5>
                                            <span>
                                                <i className="fa fa-eye" /> 19.141 Viewes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-3.jpg" alt="" />
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5>
                                                <a href="#">Kizumonogatari III: Reiket su-hen</a>
                                            </h5>
                                            <span>
                                                <i className="fa fa-eye" /> 19.141 Viewes
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product__sidebar__comment__item">
                                        <div className="product__sidebar__comment__item__pic">
                                            <img src="img/sidebar/comment-4.jpg" alt="" />
                                        </div>
                                        <div className="product__sidebar__comment__item__text">
                                            <ul>
                                                <li>Active</li>
                                                <li>Movie</li>
                                            </ul>
                                            <h5>
                                                <a href="#">Monogatari Series: Second Season</a>
                                            </h5>
                                            <span>
                                                <i className="fa fa-eye" /> 19.141 Viewes
                                            </span>
                                        </div>
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
