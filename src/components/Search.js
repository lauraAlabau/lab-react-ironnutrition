import { Form, Input } from 'antd';
//import {useState} from 'react'


function Search(props){



    return (
        <div>
             <Form labelCol={{span: 4}} wrapperCol={{span: 14}} 
                    layout="vertical" style={{ marginLeft: 500 }}  
                   >
                <Form.Item label="Search">
                    <Input type="text" />
                </Form.Item>               

            </Form> 
        </div>
    )
}

export default Search;

/* name , image , calories and servings */