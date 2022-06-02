import React, {useState} from 'react'
// import Dashboard from '../components/Dashboard'
import Form from '../components/Form'
// import {Link} from 'react-router-dom'


const Main = () => {

  // STATE TO KEEP TRACK OF REFRESH
  const [refreshState, setRefresh] = useState(false)

  const refresh = () => {
    setRefresh(!refreshState)
  }

  return (
    // <fieldset>
    <div>
        {/* <legend>Main.jsx</legend> */}
        <Form refresh={refresh} />
        {/* <Link to={"/create"}>Add Pirate</Link> */}
        {/* <h1>Pirate Crew</h1>
        <Dashboard refresh={refresh} refreshState={refreshState} /> */}
        </div>
    // </fieldset>
  )
}

export default Main