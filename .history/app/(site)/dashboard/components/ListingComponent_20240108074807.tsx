'use client'
import axios from 'axios'
import React,{useState} from 'react'

const ListingComponent = () => {
    const [listing, setListing] = useState()

    const fetchListing = async () => {
        const response = await axios.get('http://localhost:4000/api/listing/:?userId=6597d2d6fb0269802d3a29c2')
    }
  return (
    <div>
      
    </div>
  )
}

export default ListingComponent
