import Layout from "@/Layout"
import Avatar from "@/components/Avatar"
import { Button, ButtonSecondary, ButtonIcon } from "@/components/Button"
import { Download } from "@/components/Icons"


export default function Components() {
  return (
    <Layout>
      <section>
        <article>
          <h2>Button</h2>
          <Button description="Button" />
        </article>
        <article>
          <h2>ButtonSecondary</h2>
          <ButtonSecondary description="Button" />
        </article>
        <article>
          <h2>ButtonIcon</h2>
          <ButtonIcon icon={<Download/>} description="Button"/>
        </article>
        <article>
          <h2>Avatar</h2>
          <Avatar/>
        </article>
      </section>
    </Layout>
  )
}
