import Head from 'next/head'
import React from 'react';
import Tabs from "../components/tabs/Tabs";

const about = () => {
  return (
    <div>
      <Head>
        <title>Abouts Us</title>
      </Head>
      <h1>About Us</h1>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  )
}

export default about