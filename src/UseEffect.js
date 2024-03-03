import { useEffect, useState } from "react";

const EffectValue = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(Math.random())
    useEffect(() => {
        console.warn('iseEffect Loaded here')
    }, [count])

    const codeString = `
    useEffect(() => {
        console.warn('iseEffect Loaded here')
    }, [count])
    `

    return (
        <div>
            <h1> use effect in console will load on every click and refresh {count} </h1>
            <h2>While clicking on print number, is effect will not be enabled because we have added <br />
                condition to work it only with incremental number state <br />
                <p> {codeString}
                </p>

            </h2>
            <h2>{number}</h2>
            <input type="button" value="ClickMe" onClick={() => { setCount(count + 1) }} />
            <input type="button" value="Print Random number" onClick={() => { setNumber(Math.random()) }} />
        </div>
    )
}

export default EffectValue