import Layout from "@/Layout"
import Avatar from "@/components/Avatar"
import { Button, ButtonSecondary, ButtonIcon, ButtonSecondaryIcon } from "@/components/Button"
import { ArrowLeft, Download } from "@/components/Icons"
import Link from "next/link"


export default function Components() {
  return (
    <Layout>
      <h2 className="text-4xl font-bold">Components</h2>
      <section className="flex gap-8 flex-wrap py-4 max-w-4xl justify-center m-auto">
        <article className="flex flex-col border-2 rounded-md  items-start gap-4 p-4 max-w-xs w-full">
          <h2 className="font-bold text-l">&lt;Button /&gt;</h2>
          <Button description="Button" />
        </article>
        <article className="flex flex-col border-2 rounded-md  items-start gap-4 p-4 max-w-xs w-full">
          <h2 className="font-bold text-l">&lt;ButtonIcon /&gt;</h2>
          <ButtonIcon icon={<Download/>} description="Button"/>
        </article>
        <article className="flex flex-col border-2 rounded-md  items-start gap-4 p-4 max-w-xs w-full">
          <h2 className="font-bold text-l">&lt;ButtonSecondary /&gt;</h2>
          <ButtonSecondary description="Button" />
        </article>
        <article className="flex flex-col border-2 rounded-md  items-start gap-4 p-4 max-w-xs w-full">
          <h2 className="font-bold text-l">&lt;ButtonSecondaryIcon /&gt;</h2>
          <ButtonSecondaryIcon icon={<Download/>} description="Button" />
        </article>
        <article className="flex flex-col border-2 rounded-md  items-start gap-4 p-4 max-w-xs w-full">
          <h2 className="font-bold text-l">&lt;Avatar /&gt;</h2>
          <Avatar/>
        </article>
      </section>

      <section>
        <Link href={"/"}>
          <ButtonIcon description="Volver al inicio" icon={<ArrowLeft/>} />
        </Link>
      </section>
    </Layout>
  )
}
