import { useState } from "react";
import { Button, Container } from "semantic-ui-react";

import './Test.scss';

function Test() {
    const [counter, setCounter] = useState(0)

    return (
        <Container className="Test">
            <div className="resultat">
                {counter}
            </div>
            <Button.Group size="large">
                <Button
                    onClick={() => {
                        setCounter(counter - 1)
                    }}
                >-</Button>
                <Button.Or />
                <Button
                    onClick={() => {
                        setCounter(counter + 1)
                    }}    
                >+</Button>
            </Button.Group>
        </Container>
    )
}

export default Test;