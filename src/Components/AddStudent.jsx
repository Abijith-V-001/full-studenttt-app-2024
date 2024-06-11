import React from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                            <label htmlFor="" className="form-label">Roll no</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                            <label htmlFor="" className="form-label">Admission no</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">


                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">



                        <button className="btn btn-success">Add Student</button>                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent