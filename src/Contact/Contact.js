import React from 'react';

import { Link } from 'react-router';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';

import styles from './Contact.css';

const Contact = () =>
   (
     <div>
       <nav>
         <Link to="/">
            Logo
         </Link>
       </nav>

       <main>
         <div className="content">
           <p>
           Contact me! My PGP Fingerprint: F1E3 83C6 264E 87FF BD96  BD68 AD1E A0DB F797 68BC
          </p>
         </div>
         <div className={styles.social}>
           <ReactGA.OutboundLink
             eventLabel="Medium"
             to="https://medium.com/@SKilgarriff"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="medium"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </ReactGA.OutboundLink>
           <ReactGA.OutboundLink
             eventLabel="Facebook"
             to="https://www.facebook.com/skilgarriff"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="facebook"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </ReactGA.OutboundLink>
           <ReactGA.OutboundLink
             eventLabel="Twitter"
             to="https://twitter.com/SeanKilgarriff"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="twitter"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </ReactGA.OutboundLink>
           <a
             href="mailto:sean@zzrot.com"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="envelope"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </a>
           <ReactGA.OutboundLink
             eventLabel="Github"
             to="https://github.com/Skilgarriff"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="github-alt"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </ReactGA.OutboundLink>
           <ReactGA.OutboundLink
             eventLabel="LinkedIn"
             to="https://www.linkedin.com/in/seankilgarriff"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="linkedin"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </ReactGA.OutboundLink>
           <ReactGA.OutboundLink
             eventLabel="Instagram"
             to="https://www.instagram.com/skilgarriff/"
             className={styles.socialLink}
           >
             <FontAwesome
               name="stack"
               size="lg"
             >
               <FontAwesome
                 name="circle"
                 size="2x"
                 stack="2x"
               />
               <FontAwesome
                 name="instagram"
                 inverse
                 stack="1x"
               />
             </FontAwesome>
           </ReactGA.OutboundLink>
         </div>

       </main>
     </div>
  )
;

export default Contact;
