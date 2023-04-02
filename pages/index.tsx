import Card from "@/components/home/card";
import ShortCard from "@/components/home/short-card";
import ImageCard from "@/components/home/image-card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DONATION_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import CountUp from "react-countup";
import StatsNumber from "@/components/shared/stats-number";
import WebVitals from "@/components/home/web-vitals";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="max-w-2xl"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: false }}
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
          <Balancer>Un lugar para descansar.</Balancer>
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
          <motion.a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-yellow-400 bg-yellow-400 px-5 py-2 font-display text-black transition-colors hover:bg-yellow-500 hover:text-black"
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Quiero ayudar</p>
          </motion.a>
        </motion.div>
      </motion.div>
      {/* Servicios */}

      <motion.div
        className="max-w-2xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h3
          className=" mt-10 text-center font-display text-2xl font-bold text-emerald-800 drop-shadow-sm md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Nuestros Servicios.</Balancer>
        </motion.h3>
      </motion.div>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {services.map(({ title, description, icon }) => (
          <ShortCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
      {/* Galeria de fotos */}
      <motion.div
        className="max-w-2xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h3
          className=" mt-10 text-center font-display text-2xl font-bold text-emerald-800 drop-shadow-sm md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Galeria de fotos.</Balancer>
        </motion.h3>
      </motion.div>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-4 xl:px-0">
        {gallery.map(({ src, description }) => (
          <ImageCard key={src} src={src} description={description} />
        ))}
      </div>
      {/* Estadisticas */}
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
        <motion.h3
          className=" mt-10 text-center font-display text-2xl font-bold text-emerald-800 drop-shadow-sm md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Estadísticas 2022
        </motion.h3>
      </motion.div>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {statistics.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={demo}
          />
        ))}
      </div>
      {/* Historia */}
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
        <motion.h3
          className=" mt-10 text-center font-display text-2xl font-bold text-emerald-800 drop-shadow-sm md:text-4xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Nuestra Historia
        </motion.h3>
      </motion.div>
      <motion.div className=" max-w-5xl">
        <motion.p className=" mt-10 text-justify text-xl text-gray-800 drop-shadow-sm">
          El Hospital Nacional de Niños Benjamín Bloom en El Salvador, es el
          único hospital publico especializado en atención pediátrica y atiende
          a familias con pocos recursos en El Salvador.
        </motion.p>
        <motion.p className=" mt-10 text-justify text-xl text-gray-800 drop-shadow-sm">
          Los parientes de los niños que se encuentran en el hospital enfrentan
          la difícil tarea de pasar las noches frías y desfavorables afuera del
          hospital. Los familiares esperan, en ocasiones, entre los pasillos o
          en las afueras del hospital, con la esperanza de que cuando amanezca,
          tengan noticias positivas sobre la salud de sus seres queridos.
          Además, este problema no solo lo enfrentan las personas de diferentes
          departamentos del país, sino también las personas de países vecinos,
          como Guatemala y Honduras, que acuden a este hospital.
        </motion.p>
        <motion.p className=" mt-10 text-justify text-xl text-gray-800 drop-shadow-sm">
          Con el fin de resolver esta problemática, el 28 de octubre de 2016, un
          grupo de familias que pertenecen a la Iglesia Adventista del Séptimo
          Día de la colonia Miramonte tomó la iniciativa de crear un albergue,
          luego de recibir como donación una casa por parte de una familia muy
          especial.
        </motion.p>
        <motion.p className=" mt-10 text-justify text-xl text-gray-800 drop-shadow-sm">
          En 2016 inició la planificacion del proyecto, en 2017 iniciaron las
          obras de remodelacion y en Agosto de 2018 inicia el funcionamiento del
          albergue, para dar alivio a los padres y niños en tratamientos y con
          la ayuda de Dios este albergue seguira en funcionamiento mientras haya
          necesidad.
        </motion.p>
      </motion.div>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-4 xl:px-0">
        {historic.map(({ src, description }) => (
          <ImageCard key={src} src={src} description={description} />
        ))}
      </div>
      {/* Preguntas Frequentes */}
      {/* Donaciones */}
      {/* Contacto */}
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
    </Layout>
  );
}

const services = [
  {
    title: "Refugio",
    description:
      "Descanso para los padres que cuidan a sus hijos en tratamiento en el Hospital Bloom.",
    large: false,
    icon: "",
  },
  {
    title: "Cuidado",
    description:
      "Espacios de aseo personal, áreas de esparcimiento y aula lúdica para niños.",
  },
  {
    title: "Fortaleza",
    description:
      "Compartimos esperanza, que Dios les ama, esta con ellos y viene por segunda vez.",
  },
];

const gallery = [
  { src: "/gallery/1.jpg", description: "" },
  { src: "/gallery/2.jpeg", description: "" },
  { src: "/gallery/3.jpg", description: "" },
  { src: "/gallery/4.jpg", description: "" },
  { src: "/gallery/5.jpg", description: "" },
  { src: "/gallery/6.jpg", description: "" },
  { src: "/gallery/7.jpg", description: "" },
  { src: "/gallery/8.jpg", description: "" },
  { src: "/gallery/9.jpg", description: "" },
  { src: "/gallery/10.jpg", description: "" },
  { src: "/gallery/11.jpg", description: "" },
  { src: "/gallery/12.jpg", description: "" },
];

const historic = [
  { src: "/historic/1.jpg", description: "" },
  { src: "/historic/2.jpg", description: "" },
  { src: "/historic/3.jpg", description: "" },
  { src: "/historic/4.jpg", description: "" },
];

const statistics = [
  {
    title: "Albergados",
    description:
      "Padres y niños que se quedan durante la noche a dormir en el albergue",
    demo: <StatsNumber number="1,234" />,
  },
  {
    title: "Pasantes",
    description: "Padres y niños que permanecen durante el dia en el albergue",
    demo: <StatsNumber number="1,967" />,
  },
  {
    title: "Alimentos servidos",
    description:
      "Suma de desayunos, almuerzos y cenas servidos a albergados y pasantes",
    demo: <StatsNumber number="8,583" />,
  },
  {
    title: "Lavanderia",
    description:
      "Numero de veces que se presta el servicio de lavanderia en el albergue",
    demo: <StatsNumber number="1,464" />,
  },
  {
    title: "Duchas",
    description:
      "Numero de veces que se presta el servicio de ducha en el albergue",
    demo: <StatsNumber number="4,597" />,
  },
  {
    title: "Descansos",
    description:
      "Padres y niños que toman una siesta durante el dia en albergue",
    demo: <StatsNumber number="3,242" />,
  },
];
