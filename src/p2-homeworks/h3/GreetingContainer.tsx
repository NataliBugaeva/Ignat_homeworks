import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if (e.currentTarget.value.trim()) {
            setError('');
            setName(e.currentTarget.value) // need to fix
        } else {
            setError('Name is required!');
            setName('');
        }
    }

    let nameValue = name.trim();

    const addUserOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') addUser();
    }

    //добавляю нового пользователя но нужна проверка имени
    const addUser = () => {
        if (nameValue) {
            addUserCallback(nameValue);
            setName('');
            alert(`Hello, ${nameValue}!`) // need to fix
        } else {
            setError('Name is required!');
        }
    }

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUserOnKeyPress={addUserOnKeyPress}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
