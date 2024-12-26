import { Grid2 } from '@mui/material'
import { CardProduct } from './CardProduct'
import { useAppSelector } from './redux/hooks'

export function StoreCard() {
  const products = useAppSelector((state) => state.products)
  if (!products) return 'List is empty'

  return (
    <>
      <Grid2
        container
        spacing={3}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product) => (
          <Grid2 item="true" xs={6} key={product.id} style={{ margin: 'auto' }}>
            <CardProduct {...product} />
          </Grid2>
        ))}
      </Grid2>
    </>
  )
}
