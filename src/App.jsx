import { useEffect, useState } from 'react'
import { randomizeIcon } from './utils/randomizeIcon'
import { formatPhone } from './utils/formatPhone'
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
      <ul className="flex flex-col">
        {data.map(contact => (
          <li key={contact.id} className="flex gap-5 items-center p-4">
            <img className="rounded-full h-20 w-20" src={avatar} />
            <div className="flex flex-col">
              <div className="text-slate-900 flex gap-2 flex-wrap font-medium text-xl lg:text-2xl">
                <p>{contact.name}</p>
                <p>{contact.surname}</p>
                <span>{randomizeIcon()}</span>
              </div>
              <p className="text-slate-500 text-lg">
                {formatPhone(contact.phone)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
