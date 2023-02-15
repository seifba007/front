import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import Imge from "../../assest/logo.png"
import { Facebook } from '@material-ui/icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='footer'>
    <section className="ft-main">
      <div className="ft-main-item">
        <div className="ft-title"><Link to="#"><img src={Imge} alt="logo"/></Link></div>
        <p className='text1'>
        Maktaba.tn est une plateforme de commerce <br/>
        électronique innovante reliant les réseaux de<br/>
         librairies, 
        fournisseurs, écoles et espaces<br/>
         étudiants en Tunisie, 
        offrant une solution<br/>
         tout-en-un pour tous leurs besoins.
        </p>
        <div className='iconn'>
<Link to="#"><Facebook/></Link>
<Link to="#"><TwitterIcon/></Link>
<Link to="#"><InstagramIcon/></Link>
<Link to="#"><LinkedInIcon/></Link>
</div>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Liens Rapides</h2>
        <ul>
          <li><Link to="#">À propos</Link></li>
          <li><Link to="#">Shop</Link></li>
          <li><Link to="#">Devenir partenaire</Link></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Nos Catégories</h2>
        <ul>
          <li><Link to="#">Scolaire</Link></li>
          <li><Link to="#">Para-scolaires</Link></li>
          <li><Link to="#">Outils informatiques</Link></li>
          <li><Link to="#">Divers</Link></li>
          <li><Link to="#">Jeux educatifs</Link></li>
        </ul>
      </div>
      <div className="ft-main-item">
        <h2 className="ft-title">Contact</h2>
       
        <ul>
        <div className="controle"> 
        <li><br/>
      
            <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined">location_on</span>  </div>
  <div className="item8">
             122 Rue de Makthar
            </div>  
          </div>
          </li>
          <li><br/>
          <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined">call</span>  </div>
  <div className="item8">
  (+216) 20 222 222
            </div>  
          </div>
          
          </li><br/>
          <li>

          <div className="grid-containerr">
  <div className="item7"> <span className="material-symbols-outlined">mail</span>  </div>
  <div className="item8">
  contact@maktba.com
            </div>  
          </div>
          </li>

          </div>
        </ul>
      </div>
    </section>
    <hr className='line'/>
      <p className='Copyright'>Copyright © 2022 Maktaba.tn</p>
  </div>
 

  )
}

export default Footer
