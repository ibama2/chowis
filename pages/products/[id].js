import Layout from '../../layout';
import { getAllProductIds, getProductData } from '../../lib/util';
import styles from '../../styles/Products.module.css';

export async function getStaticPaths() {
    const paths = getAllProductIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // 给每一个id请求一下它的数据
    const { productData } = await getProductData(params.id);

    return {
        props: {
            productData,
        },
    };
}

export default function Product({ productData }) {
    return (
        <Layout>
            <div className={styles.grid}>
                <div className={styles.row} style={{ backgroundImage: `url(${productData.imgUrl})` }}>
                    <div className={styles.description + ' ' + styles.notMobile}>
                        {productData?.descriptions.map(des => (
                            <div key={des.id}>
                                <img src={des.icon} alt={des.description} /><div>{des.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.description + ' ' + styles.isMobile}>
                    {productData?.descriptions.map(des => (
                        <div key={des.id}>
                            <img src={des.icon} alt={des.description} /><div>{des.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
