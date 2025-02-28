// import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useContext } from 'react'
import { DataContext } from './context/context'

// eslint-disable-next-line react/prop-types
export function NavBar() {
  const { cartCount } = useContext(DataContext)

  if (!cartCount) return "Somethig twrong"

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store
          </Typography>
          <Button color="inherit">
            {cartCount.length > 0 ? <ShoppingCartCheckoutIcon /> : <ProductionQuantityLimitsIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
