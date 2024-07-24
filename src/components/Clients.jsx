import React from 'react'
import { clients } from '../constants'

const Clients = () => {
  return (
    <div className="w-full bg-black py-11 px-4 max-sm:py-13 flex justify-evenly
    items-center flex-wrap gap-6">
        {clients.map((client) => (
            <div key={client.id}>
                <img src={client.logo} alt="clients"
                className="max-sm:h-[26px] max-sm:w-[140px] object-contain" />
            </div>
        ))}
    </div>
  )
}

export default Clients