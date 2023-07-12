import Layout from '../layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.grid}>
        <div className={styles.row + ' ' + styles.pic1}>
          <div className={styles.description + ' ' + styles.notMobile}>
            <div>基于AI的皮肤、毛发及头皮诊断系统。不论为了个人或商业活动，推荐选昭盈偲公司独有的多种基于AI的皮肤、头发及头皮诊断系统。</div>
          </div>
        </div>
        <div className={styles.description + ' ' + styles.isMobile}>
          <div>基于AI的皮肤、毛发及头皮诊断系统。不论为了个人或商业活动，推荐选昭盈偲公司独有的多种基于AI的皮肤、头发及头皮诊断系统。</div>
        </div>

        <div className={styles.row + ' ' + styles.pic2}>
          <div className={styles.description + ' ' + styles.des2 + ' ' + styles.notMobile}>
            昭盈偲公司是一家专门从事光学及传感器技术、硬件、软件开发等皮肤、毛发及头皮诊断技术公司。
            自2012年制造智能及移动皮肤、头发解决方案,以"为日常增加科学"为目标设立以来,构建了最尖端的智能移动解决方案,并以此为基础为顾客、产品和服务提供附加价值。
          </div>
        </div>
        <div className={styles.description + ' ' + styles.des2 + ' ' + styles.isMobile}>
          昭盈偲公司是一家专门从事光学及传感器技术、硬件、软件开发等皮肤、毛发及头皮诊断技术公司。
          自2012年制造智能及移动皮肤、头发解决方案,以"为日常增加科学"为目标设立以来,构建了最尖端的智能移动解决方案,并以此为基础为顾客、产品和服务提供附加价值。
        </div>

        <div className={styles.row + ' ' + styles.pic3}>
        </div>

        <div className={styles.row + ' ' + styles.pic4}>
          <div className={styles.description + ' ' + styles.areas + ' ' + styles.notMobile}>
            <div className={styles.head}>欧洲</div>
            <div>德国、俄罗斯（独联体）、乌克兰、意大利、英国、法国、西班牙、奥地利、比利时、希腊</div>

            <div className={styles.head}>大洋洲</div>
            <div>新西兰、澳大利亚、马来西亚、新加坡、菲律宾、印度尼西亚、圣诞岛、科科斯群岛和东帝汶
            </div>

            <div className={styles.head}>欧洲</div>
            <div>德国、俄罗斯（独联体）、乌克兰、意大利、英国、法国、西班牙、奥地利、比利时、希腊</div>

            <div className={styles.head}>美洲</div>
            <div>美国、加拿大和多米尼加共和国</div>

            <div className={styles.head}>非洲</div>
            <div>尼日利亚</div>

            <div className={styles.head}>亚洲</div>
            <div>大韩民国、缅甸、日本、中国、印度、乌兹别克斯坦、台湾、香港、伊朗</div>

            <div className={styles.head}>中南美</div>
            <div>阿根廷、厄瓜多尔、巴西、墨西哥</div>

            <div className={styles.head}>俄罗斯</div>
            <div>俄罗斯、哈萨克斯坦</div>

          </div>
          <div className={styles.hint}>* 根据国家代码分类</div>
        </div>
        <div className={styles.description + ' ' + styles.areas + ' ' + styles.isMobile}>
          <div className={styles.head}>欧洲</div>
          <div>德国、俄罗斯（独联体）、乌克兰、意大利、英国、法国、西班牙、奥地利、比利时、希腊</div>

          <div className={styles.head}>大洋洲</div>
          <div>新西兰、澳大利亚、马来西亚、新加坡、菲律宾、印度尼西亚、圣诞岛、科科斯群岛和东帝汶
          </div>

          <div className={styles.head}>欧洲</div>
          <div>德国、俄罗斯（独联体）、乌克兰、意大利、英国、法国、西班牙、奥地利、比利时、希腊</div>

          <div className={styles.head}>美洲</div>
          <div>美国、加拿大和多米尼加共和国</div>

          <div className={styles.head}>非洲</div>
          <div>尼日利亚</div>

          <div className={styles.head}>亚洲</div>
          <div>大韩民国、缅甸、日本、中国、印度、乌兹别克斯坦、台湾、香港、伊朗</div>

          <div className={styles.head}>中南美</div>
          <div>阿根廷、厄瓜多尔、巴西、墨西哥</div>

          <div className={styles.head}>俄罗斯</div>
          <div>俄罗斯、哈萨克斯坦</div>

        </div>
      </div>
    </Layout>
  )
}
