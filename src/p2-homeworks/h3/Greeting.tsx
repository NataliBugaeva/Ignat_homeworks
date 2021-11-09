import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUserOnKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUserOnKeyPress, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass// need to fix with (?:)
    const butStatus = error.length > 0;

    return (
        <div className={s.greeting}>
            <input  value={name}
                    onChange={setNameCallback}
                    onKeyPress={addUserOnKeyPress}
                    className={inputClass}/>
            <button  onClick={addUser} disabled={butStatus}>add</button>
            <span>{totalUsers}</span>
            <p>{error}</p>
        </div>
    )
}

export default Greeting
