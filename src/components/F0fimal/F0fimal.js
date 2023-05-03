import { useState } from 'react';
import './F0fimal.scss';
import data from '../../data/data';

const F0fimal = () => {
    const [newPanda, setNewPanda] = useState({
            id: '',
            name: '',
            image: ''
        });
    // console.log(newPanda);
    console.log(data);
    return (
        <div className='content'>
            <h1>Les animaux</h1>
            {data.map((animal) => (
                <div className="result" key={animal.id}>
                    <img 
                        src={animal.image}
                        className="result-image"
                        alt={animal.name}
                    />
                    <p className="result-name">{animal.name}</p>
                    <button className='result-close'>x</button>
                </div>
            ))}
            <form
                className='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    setNewPanda({
                        ...newPanda,
                        data: [...data, {
                            id: Math.max(...data.map((p) => p.id)) + 1,
                            name: newPanda.name,
                            image: newPanda.image,
                        }]
                    });
                    // setNewPanda('');
                }}
            >
                <input
                    type='text'
                    placeholder="Nom de l'animal"
                    className='form-name'
                    value={newPanda.name}
                    onChange={(e) => {
                        setNewPanda({
                            ...newPanda,
                            name: e.target.value
                        });
                    }}
                />
                <input
                    type='url'
                    placeholder="Photo de l'animal (url)"
                    className='form-url'
                    value={newPanda.image}
                    onChange={(e) => {
                        setNewPanda({
                            ...newPanda,
                            image: e.target.value
                        })
                    }}
                />
                <button
                    type='submit'
                    className='form-button'
                >
                    Ajouter un animal
                </button>
            </form>
        </div>
    )
}

export default F0fimal;