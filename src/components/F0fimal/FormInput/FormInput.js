import { useState } from "react";

const FormInput = ({ addPanda }) => {

    const [newPanda, setNewPanda] = useState({name: '', image: ''});

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setNewPanda({...newPanda, [name]: value});
        // console.log(newPanda);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPanda(newPanda);
        setNewPanda({name: "", image: ""})
    }
    return (
        <form
        className='form'
        onSubmit={handleSubmit}
        >
                <input
                    type='text'
                    name='name'
                    placeholder="Nom de l'animal"
                    className='form-name'
                    value={newPanda.name}
                    onChange={handleChange}
                    />
                <input
                    type='url'
                    name='image'
                    placeholder="Photo de l'animal (url)"
                    className='form-url'
                    value={newPanda.image}
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    className='form-button'
                >
                    Ajouter un animal
                </button>
            </form>
    )
}

export default FormInput;