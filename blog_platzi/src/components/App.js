import React from 'react'

const App = () => {
  return (
    <div className='margen'>
      <table className='tabla'>
        <thead>
          <tr>
            <th>
              Nombre
          </th>
            <th>
              Correo
          </th>
            <th>
              Enlace
          </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Rodolfo
          </td>
            <td>
              Rodolfo@saldivar.com
          </td>
            <td>
              Rodolfo.com
          </td>
          </tr>
          <tr>
            <td>
              Ulises
          </td>
            <td>
              15121185@tecmor.mx
          </td>
            <td>
              platzi.com
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App