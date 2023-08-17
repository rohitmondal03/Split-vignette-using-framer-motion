'use client';

import styles from './page.module.css'
import Gallery from '../components/gallery';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useSpring } from 'framer-motion';


const projects: Array<{ name: string, handle: string }> = [
    {
        name: "Dyal Thak",
        handle: "first"
    },
    {
        name: "Leidinger Matthias",
        handle: "second"
    },
    {
        name: "Mark Rammers",
        handle: "third"
    },
]



export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    })

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1
    }

    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring)
    }

    const mouseMove = (e: any) => {
        const { clientX, clientY } = e;
        const targetX = clientX - (window.innerWidth / 2 * 0.25);
        const targetY = clientY - (window.innerWidth / 2 * 0.30);
        mousePosition.x.set(targetX);
        mousePosition.y.set(targetY);
    }

    return (
        <main onMouseMove={mouseMove} className={styles.main}>
            {
                projects.map(({ handle }, i) => {
                    return (
                        <Gallery
                            mousePosition={mousePosition}
                            handle={handle}
                            key={i}
                        />
                    )
                })
            }
        </main>
    )
}
