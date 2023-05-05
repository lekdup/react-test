import { useState } from 'react';
import './F0fimal.scss';
import FormInput from './FormInput/FormInput';

const F0fimal = () => {
    const [pandas, setPandas] = useState([
        {
            name: "Panda",
            image: "https://images.theconversation.com/files/430483/original/file-20211105-9897-18ahqx2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        },
        {
            name: "Panda roux",
            image: "https://www.tampabay.com/resizer/V3GAwNJPjCCJP0f8bhYT38Dvzcs=/1200x1200/smart/arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/I6HZUSWHBII6TBKNIBWI6S7HAY.jpg"
        }
    ])
    // console.log(newPanda);
    // console.log(data);
    const addPanda = (panda) => { alert("add")
        setPandas([...pandas, panda]);
    }
    return (
        <div className='content'>
            <h1>Les animaux</h1>
            {pandas.map((panda) => (
                <div className="result" key={panda.name}>
                    <img
                        src={panda.image}
                        className="result-image"
                        alt={panda.name} />
                    <p className="result-name">{panda.name}</p>
                    <button
                        className='result-close'

                    >
                        x
                    </button>
                </div>
            ))}
            <FormInput
                addPanda={addPanda}
            />             
        </div>
    )
}

export default F0fimal;