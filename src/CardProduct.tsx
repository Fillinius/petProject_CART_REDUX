import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { favoriteCreater, incrementCountCreater } from './redux/action'
import { useAppDispatch } from './redux/hooks'
import { InitialDataProp } from './initialData'

// eslint-disable-next-line react/display-name
export const CardProduct = memo((product: InitialDataProp) => {
  const dispatch = useAppDispatch()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.title} />
      <CardMedia
        component="img"
        height="194"
        image={product.img}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Here to be discription.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => dispatch(favoriteCreater(product.id))}
          aria-label="add to favorites"
        >
          {product.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <IconButton
          onClick={() => dispatch(incrementCountCreater(product.id))}
          aria-label="share"
        >
          <AddShoppingCartIcon aria-label="cart" />
        </IconButton>
      </CardActions>
    </Card>
  )
})
