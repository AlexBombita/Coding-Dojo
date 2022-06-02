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


  return (
    <fieldset>
      <legend>DashboardComponent.jsx</legend>
      {
        allProducts.map((product, index) => {
          return(
            <div key={index}>
              <Link to={"/" + product._id}>
                <h1>{product.title} - {product.description}</h1>
              </Link>
            </div>
          )
        })
      }
    </fieldset>
  )
}

export default Dashboard