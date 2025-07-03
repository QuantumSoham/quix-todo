import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">
           Organize your<br />work and life.
        </h1>
        Increase Productivity, stay organized.<br />
        <br />
        <button className="home-btn p-2">Make Todo</button>
        </div>
    </div>
  )
}

export default Home