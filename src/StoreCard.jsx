
import { Grid2 } from "@mui/material"
import { CardProduct } from "./CardProduct"


// eslint-disable-next-line react/prop-types
export function StoreCard({ products, onClickFavorite }) {
  if (!products) return "List is empty"

  return (
    <>
      <Grid2 container spacing={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        {products.map(product => (
          <Grid2 item xs={6} key={product.id} style={{ margin: 'auto' }}>
            <CardProduct product={{ ...product }} onClickFavorite={onClickFavorite} />
          </Grid2>
        ))}


      </Grid2>
    </>

  )
}
