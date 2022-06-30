import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Found.module.scss";

const { mainFound, save, donation, take } = styles;
export default function Found(): JSX.Element {
  return (
    <>
      <Head>
        <title>Хандив</title>
      </Head>
      <div className={ mainFound }>
        <div>
          <Link href="donate">
            <section className={ donation }>
              <p className="title">Хандив өгөх</p>
            </section>
          </Link>
          <Link href="take">
            <section className={ take }>
              <p className="title">Хандив авах</p>
            </section>
          </Link>
        </div>
        <Link href="leftlist">
          <section className={ save }>
            <p className="title">Хадгалсан</p>
          </section>
        </Link>
      </div>
    </>
  );
}
