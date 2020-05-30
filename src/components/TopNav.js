import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const TopNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Agile Board</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Developed By:{' '}
          <a
            href="https://abhayprataps.com/"
            target="_blank"
            rel="noopener noreferrer">
            Abhay Pratap Singh
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNav
