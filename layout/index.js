import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();
  const goHome = () => router.push('/');
  const goPolicy = () => router.push('/policy');

  return (
    <div className={styles.container}>
      <Head>
        <title>昭盈偲</title>
        <link rel="icon" href="/images/headIcon.png" />
      </Head>
      <nav className="navbar">
        <img onClick={goHome} src="/images/chowislogo.webp" fetchpriority="high" />

        <ul className="nav-links">

          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

          <div className="menu">
            <li><Link href='/'>首页</Link></li>
            <li className="products">
              <Link href='#'>产品</Link>
              
              <ul className="dropdown">
                {[
                  { id: '1', name: 'DermoPrime' },
                  { id: '2', name: 'DermoSmart' },
                  { id: '3', name: 'DermoPico' },
                  { id: '4', name: 'mySkin·Hair KIOSK' },
                  { id: '5', name: 'mySkin FAIN' },
                  { id: '6', name: 'DermoChoice' }
                ].map(product => (
                  <li key={product.id}><Link href={`/products/${product.id}`}>{product.name}</Link></li>
                ))}
              </ul>
            </li>
            <li><Link href="/contact">联系我们</Link></li>
            <li><Link href="/policy">隐私协议</Link></li>
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

        .navbar img {
          cursor: pointer;
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
          background-color: #e6e6e6;
          padding: 1em 0;
          position: absolute; /*WITH RESPECT TO PARENT*/
          display: none;
          top: 35px;
        }
        
        .dropdown li + li {
          margin-top: 10px;
        }
        
        .dropdown li {
          padding: 0.5em;
          width: 8em;
        }

        .dropdown li:hover {
          background-color: #ffffff91;
          transition: 0.3s ease;
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
            background-color:#e2e2e2;
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
          color: black;
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
