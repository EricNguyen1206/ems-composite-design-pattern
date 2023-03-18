"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/employee", {
                headers: {
                    method: "GET",
                    "Content-Type": "application/json",
                },
            });
            console.log("res", res);
            alert("success!");
        } catch (e: any) {
            console.log("e", e);
        }
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Countries GraphQL</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Countries</h1>
            <div>
                <h3>Countries go here</h3>
            </div>
            <button
                onClick={handleSubmit}
                style={{ background: "red", padding: "4px" }}
            >
                Submit
            </button>
        </div>
    );
}
