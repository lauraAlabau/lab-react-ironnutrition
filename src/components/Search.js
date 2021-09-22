import { Form, Input } from 'antd';
import {useState} from 'react'


function Search(props){
    const [inputSearch, setInputSearch] = useState("")
    console.log(props)
    const handleInputSearch = (event) =>{
         setInputSearch(event.target.value)
      }
    
 /*    const filterFood = (props, query) => {
        
        return props.filter((element) => {
            const foodName = element.name.toLowerCase();
            return foodName.includes(query);
        });
    }; */

    return (
        <div>
             <Form labelCol={{span: 4}} wrapperCol={{span: 14}} 
                    layout="vertical" style={{ marginLeft: 500 }}  
                   >
                <Form.Item label="Search">
                    <Input value={inputSearch} type="text" onChange={handleInputSearch} />
                </Form.Item>               

            </Form> 
        </div>
    )
}

export default Search;

/* name , image , calories and servings */