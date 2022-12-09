import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Button } from "react-bootstrap/lib/InputGroup";
import { Container } from "react-bootstrap/lib/Tab";

const WishList = () => {
    const handleFormSubmit = async (event) => {
        event.preventDefault();}
    const [item, setItem] = useState([]);
    const handleAdd = () => {
        const newItem = [...item, []]
        setItem(newItem)
    }
    const handleChange
    

    return (
        <>
        <Jumbotron>
            <Container>
                <h1>My Wish List</h1>
            </Container>
        </Jumbotron>
        <Button onClick = {() => handleAdd()}>
        Add Item
        </Button>
        {item.map((data,i) => {
            return(
                <div>
                    <input onChange={e => handleChange(e, i)}/>
                    <Button>X</Button>
                </div>
                
            )
        })}
        <Form onSubmit={handleFormSubmit}>

        </Form>
        </>
    )
}




export default WishList;