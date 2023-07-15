import React from 'react'
import Person from './Person';
import { useAppContext } from '../App';

const List = () => {
    const { people, setPeople } = useAppContext();

    const person = people.map((person) => {
        const { id } = person;
        return <Person key={id} person={person}/>
    })

    return (
        <section>
            {person}
        </section>
  )
}

export default List