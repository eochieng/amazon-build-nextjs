import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Build</title>
      </Head>
      {/* Header */}
      <Header />
      <h1></h1>
    </div>
  );
}
