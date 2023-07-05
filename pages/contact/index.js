import Layout from '../../layout';
import styles from '../../styles/Products.module.css';
import contactStyles from '../../styles/Contact.module.css';

export default function Contact() {

    return (
        <Layout>
            <div className={styles.grid}>
                <div className={styles.row + ' ' + contactStyles.contact}>
                    <div className={styles.description + ' ' + styles.notMobile}>
                        <div className={contactStyles.head}>联系我们：</div>

                        <div>邮箱 chowis@chowis.com</div>
                        <div>微博 @ChowisOfficial</div>
                        <div>小红书 @Chowis</div>
                        <div>微信公众号@Chowis</div>
                        <div>官网 www.chowis.com</div>
                        <div>Skype ID Chowisofficial</div>


                        <img className={contactStyles.code} />
                    </div>
                </div>
                <div className={styles.description + ' ' + contactStyles.isMobile}>
                    <div className={contactStyles.head}>联系我们：</div>

                    <div>邮箱 chowis@chowis.com</div>
                    <div>微博 @ChowisOfficial</div>
                    <div>小红书 @Chowis</div>
                    <div>微信公众号@Chowis</div>
                    <div>官网 www.chowis.com</div>
                    <div>Skype ID Chowisofficial</div>
                    <img className={contactStyles.code} />
                </div>
            </div>
        </Layout>
    );
}
