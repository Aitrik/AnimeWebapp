import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { search } from '../Redux/Slice'

export default function Header() {
  const [searchitem, setSearch] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const searchBar = (e) => {
    e.preventDefault()
    if (searchitem.trim() !== "") {
      dispatch(search(searchitem))
      navigate(`/search/${searchitem}`)
      setSearch('')
    }
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">

                <Link to="/">
                  <img src="img/logo.png" alt="" />
                </Link>

              </div>
            </div>
            <div className="col-lg-8">
              <div className="header__nav">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <a href="">
                        <Link to="/">Homepage</Link>
                      </a>
                    </li>


                    <li>
                      <a href="#">
                        <Link to="/characters"> Top Characters</Link>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="header__right">
                <form style={{ display: "flex", gap: "5px" }} onSubmit={searchBar}>
                  <input type='text' placeholder='Search' value={searchitem} onChange={(e)=>setSearch(e.target.value)} />
                  <button style={{ padding: "2px 6px", border: "none", backgroundColor: "#e53637", borderRadius: "5px", color: "white", }} onClick={searchBar}>Search</button>
                </form>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>

    </>
  )
}
