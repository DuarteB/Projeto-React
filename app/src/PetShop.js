import React from 'react'
import ProptTypes from 'prop-types'

function PetShop(props) {

    const { dogs, cats, customer, customerName } = props

    return(
        <div>
            <h1>Dogs: {dogs}</h1>
            <h2>Cats: {cats}</h2>
            <div>
                Quantidade de clientes: {customer}
            </div>
            <div>
                Nome do cliente: {customerName}
            </div>
        </div>
    )

}

PetShop.defaultProps = {
    dogs: 1,
    cats: 0,
    customer: []
}

PetShop.propTypes = {
    dogs: ProptTypes.number.isRequired,
    cats: ProptTypes.number,
    customer: ProptTypes.array,
    customerName: ProptTypes.string.isRequired
}


export default PetShop