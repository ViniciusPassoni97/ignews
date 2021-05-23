import Head from 'next/head'
import { GetStaticProps } from 'next'
import SubscribeButton from '../components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface PropsProduct {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: PropsProduct) {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.amount / 100);
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            Hey, welcome
            </span>
          <h1>News about the <span>React </span>world</h1>
          <p>
            Get acess te all the publications <br />
            <span>for {price} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="gril coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Iu9sxDlTlj24fYcIE2xV2SJ', {
    expand: ['product']
  });
  console.log('acessei');
  const product = {
    priceId: price.id,
    amount: (price.unit_amount),
  };

  return {
    props: {
      product,
    },
    revalidate: 10,
  }
}
