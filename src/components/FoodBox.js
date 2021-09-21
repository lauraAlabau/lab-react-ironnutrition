import { Card, Col, Row,Button } from "antd";

function FoodBox(props){
  //console.log(props)
  //console.log(props.food)
    return (
        <div className="FoodBox">
        <Row style={{ width: "100%", justifyContent: "center" }}>
            {props.food.map((element) => {
                //console.log(element)
            return(
                <Col>
                    <Card
                        title={element.name}
                        style={{ width: 230, height: 300, margin: 10 }}
                    >
                        <img src={element.image} height={60} alt="" />
                        <p>Calories: {element.calories}</p>
                        <p>Servings: {element.servings}</p>
                        <p>
                        <b>Total Calories: {element.calories * element.servings} </b> kcal
                        </p>
                        <Button type="primary"> Delete </Button>
                    </Card>
                </Col>
            )
            })}
            </Row>

        </div>
    )
}

export default FoodBox;

