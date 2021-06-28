import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import avatarImg from '../../public/images/avatar.svg'

import { stripe } from '../services/stripe'

import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string,
    amount: string
  }
}

export default function Home({ product }: HomeProps) {
  
  return (
    <>
      <Head>
          <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>

          <h1>
            News about <br/>
            the <span>React</span> world
          </h1>
          
          <p>
            Get acess to all publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton />
        </section>

        <Image src={avatarImg} alt="Girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1J7K39CZUobL0B9tJKGCjXgc', {
    expand: ['product']
  }) 

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {

    props: {
      product
    }
  }
}