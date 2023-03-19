import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DONATION_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-2xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="bg-gradient-to-br from-emerald-700 to-teal-900 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Bienvenido a un hogar para descansar.</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Techo. Cuidado. Fortaleza Espiritual.</Balancer>
        </motion.p>
        <motion.div
          className="mx-auto mt-6 flex items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-yellow-400 bg-yellow-400 px-5 py-2 font-display text-black transition-colors hover:bg-yellow-500 hover:text-black"
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Quiero ayudar</p>
          </a>
        </motion.div>
      </motion.div>
      <motion.h1
        className=" mt-10 text-center font-display text-2xl font-bold text-emerald-800 drop-shadow-sm md:text-4xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <Balancer>Nuestros Servicios.</Balancer>
      </motion.h1>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        <Card
          title="Albergados"
          description="Padres y niños que se quedan durante la noche a dormir en el albergue"
          demo
        ></Card>
        <Card
          title="Pasantes"
          description="Padres y niños que permanecen durante el dia en el albergue"
          demo
        ></Card>
        <Card
          title="Alimentos servidos"
          description="Suma de desayunos, almuerzos y cenas servidos a albergados y pasantes"
          demo
        ></Card>
        <Card
          title="Lavanderia"
          description="Numero de veces que se presta el servicio de lavanderia en el albergue"
          demo
        ></Card>
        <Card
          title="Baño"
          description="Numero de veces que se presta el servicio de ducha en el albergue"
          demo
        ></Card>
        <Card
          title="Descanso"
          description="Padres y niños que toman una siesta durante el dia en albergue"
          demo
        ></Card>
      </div>
    </Layout>
  );
}
