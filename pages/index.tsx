import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar';
import Footer from '../comps/footer';
import Link from "next/link";


export default function Home() {
  return (
    <div >
      <Navbar />
      <h1>Hello Dipanshu to 4 fin company</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore nesciunt libero sunt accusamus ducimus repellat architecto sed, quasi temporibus voluptas perferendis, repudiandae quis unde a soluta quos! Nulla, culpa.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore nesciunt libero sunt accusamus ducimus repellat architecto sed, quasi temporibus voluptas perferendis, repudiandae quis unde a soluta quos! Nulla, culpa.</p>
      <Link href="/ninjas">Link for Dipu list</Link>
      <Footer />
    </div>
  )
}
