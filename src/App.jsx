import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await fetch('../db.json').then(response =>
        response.json(),
      )
      setData(contacts)
    }

    fetchContacts()
  }, [])

  return (
    <>
      <h1 className="text-red-950">Hello world!</h1>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
    </>
  )
}

export default App
