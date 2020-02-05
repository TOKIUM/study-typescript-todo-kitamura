import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const code = e.keyCode ? e.keyCode : e.which;
  if (code === 13) { // Enter key
    // const textValue = e.currentTarget.value;
    e.preventDefault();
    // TODO: reduxに送るところ
  }
};

const IndexPage: NextPage = () => {
  return (
    <Layout title="トドを追加するとにゃーんされるぞ">
      <h1>トド</h1>
      <form>
        <input type="text" placeholder='トドの追加' onKeyPress={ handleKeyPress } />
      </form>
      <ul>
        { /* 追加したトドが表示されるところ */ }
        <li>トド1</li>
        <li>トド2</li>
      </ul>
    </Layout>
  )
}

export default IndexPage;
