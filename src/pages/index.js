import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Head from 'next/head';

const Home = () => {

  return (<>
    <Head>

      <title>Isaias Ponce - Software Engineer</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="All about Isaias Ponce - Software Engineer graduated at ESPOL, includes portfolio, resume, and much more. " />
      <meta name="google-site-verification" content="nsfIBKQGOA0Z--PzXE6AsSRYdHTf4o8KfcdEg2q6ezo" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Section grid>

        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />

    </Layout>
  </>
  );
};

export default Home;
