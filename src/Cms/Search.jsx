import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { search } from '../Redux/Slice'
import { Link } from 'react-router-dom'

export default function Search() {
    const { name } = useParams()
    const dispatch = useDispatch()
    const { searchAnime } = useSelector(state => state.Sli)
    useEffect(() => {
        dispatch(search(name))
    }, [])

    console.log(searchAnime)
    return (
        <>
           <div className='container' style={{margin:"20px 20px"}}>
           <div className="live__product">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="section-title">
                            <h4>Live Action</h4>
                        </div>
                    </div>

                </div>
                <div className="row" style={{ gap: "15px" }}>
                    {searchAnime && searchAnime.map((item) => (
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

        </>
    )
}
