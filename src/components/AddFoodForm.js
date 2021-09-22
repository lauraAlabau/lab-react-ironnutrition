import { Form, Input, Button } from 'antd';
import React, { useState } from "react";


function AddFoodForm(props){
    const [inputName, setInputName] = useState('')
    const [inputImage, setInputImage] = useState('')
    const [inputCalories, setInputCalories] = useState('')
    const [inputServings, setInputServings] = useState(1) 

    
    const handleInputName = (event) =>{
        setInputName(event.target.value)
      }
    const handleInputImage = (event) =>{
        setInputImage(event.target.value)
      }
    const handleInputCalories = (event) =>{
        setInputCalories(event.target.value)
      }
    const handleInputServings = (event) =>{
        setInputServings(event.target.value)
      }
      
    const newFood = () =>{
        const newObjet = 
        {
            name:inputName,
            image:inputImage,
            calories:inputCalories,
            servings:inputServings
        }
        //Le digo que me copie todo el array y añada el nuevo object
        props.setFoodList([...props.food , newObjet]); 
    }  

    return (
        <div>
            <Form   labelCol={{span: 4}} wrapperCol={{span: 14}} 
                    layout="vertical" style={{ marginLeft: 500 }}  
                   >
                <Form.Item label="Name">
                    <Input value={inputName} type="text" onChange={handleInputName}/>
                </Form.Item>
                <Form.Item label="Image">
                    <Input value={inputImage} type="text" onChange={handleInputImage}/>
                </Form.Item>
                <Form.Item label="Calories">
                    <Input value={inputCalories} type="text" onChange={handleInputCalories}/>
                </Form.Item>
                <Form.Item label="Servings">
                    <Input value={inputServings} type="number" onChange={handleInputServings}/> 
                </Form.Item>
                <Button onClick={(event)=>{event.preventDefault(); newFood()}} type="submit" className="">Create</Button>

            </Form> 
        </div>
    )
}

export default AddFoodForm;

/* name , image , calories and servings */