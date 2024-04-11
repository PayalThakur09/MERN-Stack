import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [selects, setSelects] = useState();

    return (
        <div className="container">

            <div className='name'>
                <h1>Project Name</h1>
                <h3>Country and there Capital Name List</h3>
            </div>

            <div className="add_btn mb-5">
                <NavLink to="/managepage" className="btn btn-primary">Manage</NavLink>
            </div >

        </div>
    )
}

export default Home