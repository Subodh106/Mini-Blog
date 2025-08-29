import { Link } from "react-router-dom"

const Footer = () => {
return (
    <div className='footer'>
        <div className="copyright">
            &copy; 2025 My Mini Blog || Contact:subodhloves106@gmail.com
        </div>
        <div className="icons">
            <Link to="www.facebook.com"><img src="/facebook.png" alt="facebook " className='facebook icon'/></Link>
            <Link to="www.instagram.com"><img src="/instagram.png" alt="instagram " className='instagram icon'/></Link>
            <Link to="www.twitter.com"><img src="/twitter.png" alt="twitter " className='twitter icon'/></Link>
        </div>
    </div>
)
}

export default Footer