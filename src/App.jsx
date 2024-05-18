import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <table border='2'>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>mukesh</td>
            <td>mukesh@gmail.com</td>
            <td>123123</td>
          </tr>
          <tr>
            <td>2</td>
            <td>alik</td>
            <td>alik@gmail.com</td>
            <td>124124</td>
          </tr>
          <tr>
            <td>3</td>
            <td>kisan</td>
            <td>kisan@gmail.com</td>
            <td>@sadnfd</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
