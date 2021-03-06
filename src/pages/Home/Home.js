import React from 'react';
import Feed from '../../components/Feed/Feed';
import Head from '../../components/Head/Head';

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site dogs" />
      <Feed />
    </section>
  );
};

export default Home;
