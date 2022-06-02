import React, {useState} from 'react'
import Dashboard from '../components/Dashboard'
import Form from '../components/Form'

const Main = () => {

  // STATE TO KEEP TRACK OF REFRESH
  const [refreshState, setRefreshState] = useState(false)

  const refresh = () => {
    setRefreshState(!refreshState)
  }

  return (
    <fieldset>
        <legend>Main.jsx</legend>
        <Form refresh={refresh} />
        <Dashboard refresh={refresh} refreshState={refreshState} />
    </fieldset>
  )
}

export default Main