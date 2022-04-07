import React from 'react'

 function Footer() {
  return (
 <>
 
<footer>
<div className="container-fluid  h-section-5">
   <div className="row rowsection-5">
       <div className="col-xl-3 col-2"><img src="./img/logo-footer2.png" alt="" className="footerlogo"/></div>
       <div className="col-xl-3 col-3 right-side-text"><span className="copyright">
                           ©2022 Mayer Brown. All rights reserved.
                         </span>
         </div>
       <div className="col-xl-6 col-7 right-side-text">
         <ul className="nav__items footer__nav">
             <li className="menu-item-f"><a href="#" title="Remote Access">Remote Access</a></li>
              <li className="menu-item-f"><a href="#">Legal Notices</a></li> 
              <li className="menu-item-f"><a href="#" title="Privacy Notice">Privacy Notice</a></li>
              <li className="menu-item-f"><a href="#" title="Contact Us">Contact Us</a></li>
              <li className="menu-item-f"><button id="ot-sdk-btn">Cookie Preferences</button></li>
         </ul>
       </div>
   </div>
   <div className="row">
       <dic className="col-12">
           <div className="pdivf">
               <p>Mayer Brown is a global services provider comprising associated legal practices that are separate entities, including Mayer Brown LLP (Illinois, USA), Mayer Brown International LLP (England), Mayer Brown (a Hong Kong partnership) and Tauil & Chequer Advogados (a Brazilian law partnership) (collectively the “Mayer Brown Practices”) and non-legal service providers, which provide consultancy services (the “Mayer Brown Consultancies”). The Mayer Brown Practices and Mayer Brown Consultancies are established in various jurisdictions and may be a legal person or a partnership. Details of the individual Mayer Brown Practices and Mayer Brown Consultancies can be found in the Legal Notices section of our website.</p>
               <p>“Mayer Brown” and the Mayer Brown logo are trademarks of Mayer Brown.</p>
               <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
           </div>
       </dic>
   </div>

</div>
</footer>

 </>
  )
}
export default Footer;



