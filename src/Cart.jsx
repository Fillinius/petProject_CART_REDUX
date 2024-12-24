import { Container, List } from "@mui/material";
import { Total } from "./Total";
import { OptionListCard } from "./OptionListCard";

// eslint-disable-next-line react/display-name
export function Cart(props) {
  if (!props.cartCount || !Array.isArray(props.cartCount)) return "Something twrong!"
  if (props.cartCount.length === 0) return " Ваш список покупок пока пуст!"
  return (
    <Container maxWidth="sm" style={{ border: "2px solid grey", marginTop: '10px' }}>
      {props.cartCount.length > 0 && <List>
        {props.cartCount.map(item => (

          <li key={item.id} ><OptionListCard item={item} props={props} /></li>

        ))}
      </List>}
      <hr />
      <Total cartCount={props.cartCount} />
    </Container>
  )

}