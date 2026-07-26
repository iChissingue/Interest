import { useState } from "react";

const Calculate = () => {

    const [loan, setLoan] = useState(0)
    const [delayDays, setDelayDays] = useState(0)

    const interest = parseInt(loan) * 0.1
    const DelayInterest = parseInt(interest) / 30 * delayDays
    const totalInterest = interest + DelayInterest

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
            <h3>Calculadora de juros mensais e de mora</h3>
                <label>Valor de empréstimo:</label>
                <input type="number" onChange={(e) => setLoan(e.target.value)} />
                <p>Juros de 10%: {interest.toFixed(2)}MT</p>
                 <label>Dias de Atraso:</label>
                <input type="number" onChange={(e) => setDelayDays(e.target.value)} />
                <p>Juros de Mora: {DelayInterest.toFixed(2)}MT</p>
                <p>Total de Juros: {Number(totalInterest.toFixed(2))}MT</p>
            </div>
        </div>
    )
}

export default Calculate;