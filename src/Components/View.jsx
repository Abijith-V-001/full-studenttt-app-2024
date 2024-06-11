import React from 'react'
import Navbar from './Navbar'

const View = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-col-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll no</th>
                                    <th scope="col">Admission no</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                               
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default View