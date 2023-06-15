import styles from "../styles/loading.module.css"

const Loading = () => (
  <section className={styles.wrapper}>
    <h3 className={styles.heading3}>データ取得中...</h3>
    <p>開発期間中につき、Saasの無料プランを利用しています。<br />サーバー立ち上げまで1分ほどかかります。もう少々お待ちください🙏</p>
  </section>
)

export default Loading
