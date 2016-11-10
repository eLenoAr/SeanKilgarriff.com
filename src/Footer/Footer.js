// @flow

import React from 'react';

import FontAwesome from 'react-fontawesome';

import styles from './Footer.css';

const Footer = () =>
  (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          href="https://medium.com/@SKilgarriff"
          className={styles.socialLink}
          target="_blank"
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
        </a>
        <a
          href="https://www.facebook.com/skilgarriff"
          target="_blank"
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
        </a>
        <a
          href="https://twitter.com/SeanKilgarriff"
          target="_blank"
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
        </a>
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
        <a
          href="https://github.com/Skilgarriff"
          target="_blank"
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
        </a>
        <a
          href="https://www.linkedin.com/in/seankilgarriff"
          target="_blank"
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
        </a>
        <a
          href="https://www.instagram.com/skilgarriff/"
          target="_blank"
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
        </a>
      </div>
      <div className={styles.copyright}>
        <a href="https://seankilgarriff.com/copyright">
          <p>
            &copy; Sean Kilgarriff 2016
          </p>
        </a>
        <a href="https://seankilgarriff.com/pgp" className={styles.pgp}>
          <p>
            PGP Key
          </p>
        </a>
      </div>
    </footer>
  );

export default Footer;
