import React, { Component } from 'react'
import Counter from './Counter'

// const store = [
//   {
//     type: 'Roupa'
//   }, {
//     type: 'Calçado'
//   }, {
//     type: 'Camiseta'
//   }
// ]

// function Column({type}) {
//   return (
//     <tr>
//       <td>{type.name.console}</td>
//     </tr>
//   )
// }

// function App() {

//   const renderColumns = (element,key) => (
//     <Fragment key={`column - ${key}`}>
//       <Column type={element.type} />
//     </Fragment>

//   )
    

//   return (
//     <table>
      
//         {store.map(renderColumns)}
      
//     </table>
//   )
// }

const Buttons = ({ increment, decrement, count }) => (
  <div>
    <h1>Valor Atual: {count}</h1>
    <div>
      <button onClick={increment}>Adicionar 1</button>
    </div>
    <div>
      <button onClick={decrement}>Remover 1</button>
    </div>
  </div>
)

class App extends Component {

  render() {
    return (
      <div>
        <Counter render={
          ({ increment, decrement, count}) => (
            <Buttons 
              increment={increment}
              decrement={decrement}
              count={count}
            />
          )
        }>

        </Counter>
      </div>
    )
  }

}
export default App