import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();
  const goHome = () => router.push('/');

  const path = (id) => {
    switch(id) {
      case '0':
        return '/';
      case '7':
        return '/contact';
      case '8':
        return '/policy';
      default:
        return `/products/${id}`
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>昭盈偲</title>
        <link rel="icon" href="/images/headIcon.png" />
      </Head>

      <main>
        <div className={styles.logo}>
          <img onClick={goHome} src="/images/chowislogo.webp" fetchpriority="high" />
          <div>
            {[
              { id: '0', name: '首页' },
              { id: '1', name: 'DermoPrime' },
              { id: '2', name: 'DermoSmart' },
              { id: '3', name: 'DermoPico' },
              { id: '4', name: 'mySkin·Hair KIOSK' },
              { id: '5', name: 'mySkin FAIN' },
              { id: '6', name: 'DermoChoice' },
              { id: '7', name: '联系我们' },
              { id: '8', name: '隐私协议' },

            ].map(product => (
              <Link key={product.id} href={path(product.id)}>{product.name}</Link>
            ))}
          </div>
        </div>

        {children}

      </main>

      <footer>

      </footer>

      <style jsx>{`
        main {
          width: 100%;
          padding: 1rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
