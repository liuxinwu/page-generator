import React from 'react'
import { Link } from 'react-router-dom'
import './index.module.css'

export default function Header() {
  return <header>
    <Link to="/">home</Link>
    <br />
    <Link to="/news/nba">nba</Link>
    <br />
    <Link to="/news/cba">cba</Link>
  </header>
}