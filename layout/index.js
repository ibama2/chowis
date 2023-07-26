import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();
  const { asPath, query } = router;
  const { id } = query;
  const goHome = () => router.push('/');
  const goPolicy = () => router.push('/policy');

  return (
    <div className={styles.container}>
      <Head>
        <title>昭盈偲</title>
        <link rel="icon" href="/images/headIcon.png" />
      </Head>
      <nav className="navbar">
        <img className={styles.logo} onClick={goHome} src="/images/chowislogo.webp" fetchpriority="high" />

        <ul className="nav-links" key={router.asPath}>

          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          <div className="menu">
            <li><Link className={asPath == '/' ? styles.active : ''} href='/'>首页</Link></li>
            <li className="products">
              <a className={asPath.includes('/products') ? styles.active : ''} style={{ cursor: 'pointer' }}>产品</a>

              <ul className="dropdown">
                {[
                  { id: '1', name: 'DermoPrime' },
                  { id: '2', name: 'DermoSmart' },
                  { id: '3', name: 'DermoPico' },
                  { id: '4', name: 'mySkin·Hair KIOSK' },
                  { id: '5', name: 'mySkin FAIN' },
                  { id: '6', name: 'DermoChoice' }
                ].map(product => (
                  <li key={product.id}><Link className={id == product.id ? styles.active : ''} href={`/products/${product.id}`}>{product.name}</Link></li>
                ))}
              </ul>
            </li>
            <li><Link className={asPath == '/contact' ? styles.active : ''} href="/contact">联系我们</Link></li>
            <li><Link className={asPath == '/policy' ? styles.active : ''} href="/policy">隐私协议</Link></li>
            <li className="products">
              <a style={{ cursor: 'pointer' }}>语言</a>

              <ul className="dropdown offset">
                <li key={'eng'}><a href="https://www.chowis.com">英文</a></li>
                <li key={'chn'}><a href="https://www.chowis.com/zh">中文</a></li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>

      <main>
        {children}
      </main>

      <footer onClick={goPolicy}>
        Copyright © 2022 Chowis Co., Ltd. All rights reserved.
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #002e5d;
          color: white;
          font-size: 14px;
          padding: 0.8rem;
        }

        footer:hover {
          cursor: pointer;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          width: 100%;
        }
      
        /* NAVBAR MENU */
        .menu {
          display: flex;
          gap: 1em;
          font-size: 18px;
        }
        
        .menu li {
          padding: 5px 14px;
        }
        
        /* DROPDOWN MENU */
        .products {
          position: relative; 
        }
        
        .dropdown {
          background-color: rgb(246, 246, 246);
          padding: 1em 0;
          position: absolute; /*WITH RESPECT TO PARENT*/
          display: none;
          top: 35px;
        }

        .offset {
          right: 0;
          text-align: center;
        }
        
        .dropdown li + li {
          margin-top: 10px;
        }
        
        .dropdown li {
          padding: 0.5em;
          width: 8em;
        }
        
        .products:hover .dropdown {
          display: block;
        }

        /* RESPONSIVE NAVBAR MENU STARTS */

        /* CHECKBOX HACK */

        input[type=checkbox] {
          display: none;
        } 

        /* HAMBURGER MENU */
        .hamburger {
          display: none;
          font-size: 24px;
          user-select: none;
        }

        /* APPLYING MEDIA QUERIES */
        @media (max-width: 768px) {

        footer {
          height: 48px;
          font-size: 0.8rem;
        }
        .navbar {
          padding: 10px;
        }
        .navbar img {
          height: 20px;
        }
        .hamburger {
          font-size: 20px;
        }
        .menu {
            display:none;
            position: absolute;
            background-color:#e2e2e2f5;
            right: 0;
            left: 0;
            text-align: center;
            padding: 16px 0;
          }

          .menu li:hover {
            display: inline-block;
            transition: 0.3s ease;
          }

          .menu li + li {
            margin-top: 12px;
          }

          input[type=checkbox]:checked ~ .menu {
            display: block;
          }

          .hamburger {
            display: block;
          }

          .dropdown {
            left: 50%;
            top: 40px;
            transform: translateX(5%);
          }

        }

        main {
          background-color: #f6f6f6;
          width: 100%;
          padding: 0 0 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        a {
          text-decoration: none;
          color: rgb(40, 26, 57);
          font-weight: 400;
        }

        a:hover {
          color: rgb(29, 103, 205);
          transition: 0.3s ease;
        }
        
        li {
          list-style: none;
        }
      `}</style>
    </div>
  )
}
