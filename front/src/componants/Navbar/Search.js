import './search.css'
import { Form, InputGroup } from 'react-bootstrap'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { useState, useRef } from 'react'

export default function Search() {
  const [search, setSearch] = useState('')
  const searchBar = useRef()

  document.addEventListener('keydown', (event) => {
    if (event.key === '/') {
      event.preventDefault()
      searchBar.current.focus()
    }
  })

  return (
    <div>
      <InputGroup id="searchTool">
        <InputGroup.Text>
          <RxMagnifyingGlass size={20} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          ref={searchBar}
          placeholder="Search items, collections, and accounts"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <InputGroup.Text>
          <div id="keyboardKey">
            <h6>/</h6>
          </div>
        </InputGroup.Text>
      </InputGroup>
    </div>
  )
}
