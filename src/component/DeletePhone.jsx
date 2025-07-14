import React from 'react'
import AddNav from './AddNav'

const DeletePhone = () => {
  return (
    <div style={{
  backgroundImage: "url('https://tse4.mm.bing.net/th/id/OIP.eBJNrWchikkoEIlSRE9ynQHaEo?pid=Api&P=0&h=180')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh"
}}>
        <AddNav/>
            <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 co-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Phone Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 co-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePhone
