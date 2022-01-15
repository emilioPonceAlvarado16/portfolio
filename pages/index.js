import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NavBar } from '../components//navbar/navbar'
import { About } from '../components/about/about'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Repository } from '../components/repositories/repository'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import ReactGa from 'react-ga'
import 'animate.css';

const rep_style = {
  paddingLeft: '10%',
  paddingRight: '10%',
  paddingTop: '2%'
}

export default function Home() {

  const [repositories, setRepositories] = useState([]);
  const username = "emilioPonceAlvarado16"
  const readRepos = () => {
    console.debug('Descargando repositorios');
    // await.axios.get("https://api.github.com/users/emilioPonceAlvarado16/repos").then((response)=>{
    // axios.get("https://api.github.com/search/repositories?q=user:emilioPonceAlvarado16/repos",
    axios.get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      {


      }



    ).then((response) => {
      // console.log(response);
      if (response.status == 200) {
        var repositorios = {}
        repositorios = response.data.items.reverse().map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            date: repo.created_at,
            owner: repo.owner.login
          }
        });
        console.log(repositorios);
        setRepositories(repositorios);//


      }
    })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    console.debug("first loaded of the repos");
    ReactGa.initialize('G-GPYHFQ91QD')
    ReactGa.pageview("/")
    readRepos();




  }, []);






  return (
    <html lang="en">
    <main className={styles.container}>
      <Head>

        <title>Isaias Ponce - Telematics Engineer</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="All about Isaias Ponce Alvarado as a Telematics Engineer, includes portfolio, resume, and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />


      <main className={styles.main}>


        <About />


        <p className={styles.description}>
          View my latest

          <code className={styles.code} >repositories</code>
        </p>

        <div className="columns is-gapless is-multiline 3by3 animate__animated  animate__fadeInLeft " style={rep_style}>
          {repositories.map((repo, index) => {

            return (
              <div className="column is-one-third is-two-thirds-tablet is-two-quarters-mobile card has-background-light" key={index} >
                <Repository url={repo.url} owner={repo.owner} name={repo.name} description={repo.description} date={repo.date} />
              </div>
            )
          })}


        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright <span className="icon">
            <FontAwesomeIcon icon={faCopyright} />
          </span> 2021 Isaias Ponce, All Rights Reserverd

        </a>
      </footer>
    </main>
    </html>
  )
}
