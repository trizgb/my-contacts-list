import { useEffect, useState } from 'react'
import { randomizeIcon } from './utils/randomizeIcon'
import { Contact } from './components/Contact'
import avatar from './assets/avatar.svg'

import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      const contacts = await fetch('../db.json').then(response =>
        response.json(),
      )

      setData(contacts.sort((a, b) => (a.surname < b.surname ? -1 : 1)))
    }

    fetchContacts()
  }, [])

  return (
    <>
      <h1 className="my-6 mx-auto text-center text-3xl lg:text-5xl">
        Contactos
      </h1>
      <ul className="flex flex-col max-w-[90%] my-0 mx-auto">
        {data.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            avatar={avatar}
            name={contact.name}
            surname={contact.surname}
            icon={randomizeIcon()}
            phone={contact.phone}
          />
        ))}
      </ul>
    </>
  )
}

export default App
