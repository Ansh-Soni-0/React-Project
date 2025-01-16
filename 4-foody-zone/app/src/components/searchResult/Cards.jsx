import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

function Cards({data}) {
  return (
    <FoodCardsContainer>
        <Container>

                <FoodCards>
                    {
                        data?.map((food) =>     //destructure ({price ,name , image , text})
                        
                    (<FoodCard
                        key={food.name}
                        >

                            <div className="food_image">
                                <img src={BASE_URL + food.image} />
                            </div>

                            <div className="food_info">
                                <div className="info">
                                    <h3>{food.name}</h3>
                                    <p>{food.text}</p>
                                </div>

                                <Button>
                                    $ {food.price.toFixed(2)}
                                    {/* or */}
                                    {/* $ {food.price}.00 */}
                                </Button>
                            </div>



                        </FoodCard>)
                    )}
                </FoodCards>

        </Container>
  </FoodCardsContainer>
  )
}

export default Cards


const FoodCardsContainer = styled.section`
    min-height: calc(100vh - 210px);
    background-image: url("/bg.png");
    background-size: cover;
    

`;


const FoodCards = styled.div`

    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 35px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    



`;
const FoodCard = styled.div`

    width: 340px;
    height: 167px;
    display: flex;
    padding: 8px;
    

    border-radius: 15px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
    backdrop-filter: blur(5px); 
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 20px; 
    font-family: 'Arial', sans-serif; 

    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;

        h3{
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }
        p{
            margin-top: 4px;
            font-size: 12px;
        }
        Button{
            font-size: 12px;
        }
    }

`;