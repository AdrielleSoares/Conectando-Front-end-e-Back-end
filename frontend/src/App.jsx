import {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

const api = axios.create({
  baseURL:'http://localhost:3001'
})



function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState([])
  const [age, setAge] = useState([])

  useEffect( () => {
    api.get('/usuarios',).then((response)=> {
    console.log(response.data)
    setUsers(response.data)
    })
  }, [])

  function newUser() {
    api.post('/usuarios', {
      age,name,
    }).then( (response)=>{
      console.log(response)
    })
  }

  

 

  return (
    <div className='lista'>
      <h1>Usuários</h1>   
      <ul className='lista-nome'>
        {users.map ( user => (
          <li key={user.name}>
            Nome: {user.name} - Idade: {user.age}
          </li>  
        )) }
      </ul>  

      <h2 className='Adicionar'>Adicionar Novo Usuário</h2>
      <input className='inputnome' placeholder='Nome' onChange={event => setName (event.target.value)}/>
      <input className="inputidade"placeholder='Idade'onChange={event => setAge (event.target.value)} />
      <button className="BotaoAdicionar"onClick={newUser}>Adicionar Usuário</button>
    </div>
  )
}

export default App
