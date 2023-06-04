type Props = {
  title: string
  post: string
  update: string
}

const PageHeader = ({ title, post, update }: Props ) => {
  return (
    <div>
      <h2>{title}</h2>

      <p>
        <time>投稿日 : {post}</time>
      </p>
      <p>
        <time>更新日 : {update}</time>
      </p>
    </div>
  )
}

export default PageHeader
