import { useState } from 'react'
import './App.css'

import { CakeView } from './features/cake/CakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import { ChocolateView } from './features/chocolate/ChocolateView'
import { UserView } from './features/user/UserView'




function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <ChocolateView />
      <UserView />
    </div>
  )
}

export default App
