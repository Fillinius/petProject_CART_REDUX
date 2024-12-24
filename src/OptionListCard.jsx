import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import ClearIcon from '@mui/icons-material/Clear';
import { memo } from "react";
import { useDispatch } from "react-redux";
import { decrementCountCreater, incrementCountCreater } from "./redux/action";

// eslint-disable-next-line react/display-name
export const OptionListCard = memo(({ item }) => {
  const dispatch = useDispatch()
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  return (
    <div style={style}>
      <p><strong>{item.title} </strong> </p>
      <div >
        {/* <p>Count-{item.count}</p> */}
        <Button onClick={() => dispatch(incrementCountCreater(item.id))}>{<AddIcon />}</Button>
        <Button onClick={() => dispatch(decrementCountCreater(item.id))}>{<RemoveIcon />}</Button>
        {/* <Button onClick={() => props.onClickRemove(item.id)}>{<ClearIcon />}</Button> */}
      </div>
    </div>
  )
})