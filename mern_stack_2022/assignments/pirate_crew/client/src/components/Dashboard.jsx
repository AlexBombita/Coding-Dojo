import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = (props) => {

  // STATE TO HOLD ALL BOOKS COMING FROM DB
  const [allProducts, setAllProducts] = useState([])

  // DESTRUCTURE FROM PROPS
  const {refreshState, refresh} = props

  useEffect(() => {
    // MAKE A CALL TO EXPRESS, GET ALL BOOKS
    axios.get("http://localhost:8000/api/products")
      .then(res => setAllProducts(res.data)) // INCOMING BOOKS ARE SET TO STATE
      .catch(err => console.log(err))
  }, [refreshState])


  const deleteHandler = (id) => {
    axios.delete("http://localhost:8000/api/products/"+id)
      .then(res => refresh())
      .catch()
  }


  return (
    <fieldset>
      <legend>DashboardComponent.jsx</legend>
      {
        allProducts.map((product, index) => {
          return(
            <div key={index}>
                <img src={product.photo} />
                {/* <h1>{product.name} - "{product.phrase}"</h1> */}
                <h1>{product.name}</h1>
              <Link to={"/" + product._id}>View Pirate</Link>
              <button onClick={(e) => deleteHandler(product._id)}>Walk the Plank</button>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard