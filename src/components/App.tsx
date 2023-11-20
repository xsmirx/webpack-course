import {useState} from 'react'
import classes from './App.module.scss'
import {Link, Outlet} from 'react-router-dom'
import PNG from '@/assets/mid.png'
import JPG from '@/assets/hero.jpg'
import SVG from '@/assets/api.svg'

function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error()
}

export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    // setCount((prev) => prev + 1)
    TODO()
  }

  // TODO(123)

  // if (__PLATFORM__ === 'desktop') {
  //   return <div>ISDESCKTOPPLATFORM</div>
  // }

  // if (__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div style={{color: 'red'}}>
        <img src={PNG} alt="PNG" />
        <img src={JPG} alt="JPG" />
        <SVG width={50} height={50} />
      </div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
      <Outlet />
    </div>
  )
}
