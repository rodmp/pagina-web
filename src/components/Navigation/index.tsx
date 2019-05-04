import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return(
    <>
      <Link href='/data_inbox'>
        <a>Data Inbox</a>
      </Link>
      <Link href='/login'>
        <a>Login</a>
      </Link>
    </>
  )
}

export default Navigation
