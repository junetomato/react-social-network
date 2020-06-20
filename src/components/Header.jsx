import React from 'react'
import s from './Header.module.css'

function Header() {
    return (
        <header className={ s.header }>
            <img src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png" alt="React Samurai Course" />
        </header>
    )
}

export default Header
