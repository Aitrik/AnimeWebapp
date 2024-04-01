import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { characters } from '../Redux/Slice'

export default function Characters() {
    const dispatch = useDispatch()
    const { topCharcters } = useSelector(state => state.Sli)
    useEffect(() => {
        dispatch(characters())
    }, [])


    console.log(topCharcters)
    return (
        <>
            <section
                className="normal-breadcrumb set-bg"
                data-setbg="img/normal-breadcrumb.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="normal__breadcrumb__text">
                                <h2>Top Anime Characters</h2>
                                <p>Welcome to the official Anime&nbsp;blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                {topCharcters.slice(0, 1).map((item) => (
                                    <div className="col-lg-12">
                                        <div className="blog__item set-bg" style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}>
                                            <div className="blog__item__text">
                                                <p className='text-dark'>
                                                    <span className="icon_calendar text-dark" />{item.favorites}
                                                </p>
                                                <h4>
                                                    <a href="#">{item.name}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {topCharcters.slice(1, 9).map((item) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div
                                            className="blog__item small__item set-bg"
                                            style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}
                                        >
                                            <div className="blog__item__text">
                                                <p>
                                                    <span className="icon_calendar" /> 01 March 2020
                                                </p>
                                                <h4>
                                                    <a href="#">{item.name}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                {topCharcters.slice(9, 11).map((item) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div
                                            className="blog__item small__item set-bg"
                                            style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}
                                        >
                                            <div className="blog__item__text">
                                                <p>
                                                    <span className="icon_calendar" /> 01 March 2020
                                                </p>
                                                <h4>
                                                    <a href="#">{item.name}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {topCharcters.slice(11, 12).map((item) => (
                                    <div className="col-lg-12">
                                        <div className="blog__item set-bg"style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}>
                                            <div className="blog__item__text">
                                                <p>
                                                    <span className="icon_calendar" /> 01 March 2020
                                                </p>
                                                <h4>
                                                    <a href="#">{item.name}</a>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                              {topCharcters.slice(12,14).map((item)=>(
                                  <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div
                                      className="blog__item small__item set-bg"
                                      style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}
                                  >
                                      <div className="blog__item__text">
                                          <p>
                                              <span className="icon_calendar" /> 01 March 2020
                                          </p>
                                          <h4>
                                              <a href="#">{item.name}</a>
                                          </h4>
                                      </div>
                                  </div>
                              </div>
                              ))}
                                
                               {topCharcters.slice(14,15).map((item)=>(
                                 <div className="col-lg-12">
                                 <div
                                     className="blog__item set-bg"
                                     style={{ backgroundImage: `url(${item.images.jpg.image_url})` }}
                                 >
                                     <div className="blog__item__text">
                                         <p>
                                             <span className="icon_calendar" /> 01 March 2020
                                         </p>
                                         <h4>
                                             <a href="#">{item.name}</a>
                                         </h4>
                                     </div>
                                 </div>
                             </div>
                               ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
