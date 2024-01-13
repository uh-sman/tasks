import { NextPageContext } from 'next'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import React from 'react'


export async function getServerSideProps (context: NextPageContext) {
    const session = getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        }
    }
    return {
        props:{
        }
    }
}
const profile = () => {
  return (
    <div>
      
    </div>
  )
}

export default profile
