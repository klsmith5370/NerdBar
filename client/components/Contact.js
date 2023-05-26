import React from 'react'
import { Link } from 'react-router-dom'
import { SiTiktok } from 'react-icons/si'
import { GrInstagram } from 'react-icons/gr'

export const Contact = () => {

    return (
        <div>
            <h2>Follow us on Instagram & TikTok!</h2>
            <Link></Link>
            <Link><SiTiktok /></Link>
            <Link><GrInstagram /></Link>
        </div>
    )
}

export default Contact