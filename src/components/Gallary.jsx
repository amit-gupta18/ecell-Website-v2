import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GiPolarStar } from "react-icons/gi";

// Your image imports...
import TEC from "../assets/iitb.jpg";
import iitr from "../assets/groupPhotoiitrevent.webp";
import Tes4 from "../assets/tes4.0.jpg";
import bizzniti from "../assets/bizznitiIms.jpg";
import Ab from "../assets/aboutUs1.jpg";
import ims from "../assets/ims.webp";
import nv from '../assets/nv.jpg';
import Momento from '../assets/momentotospeaker.webp';
import tes3 from '../assets/tes3.webp';
import bizz from '../assets/bizz1.jpg';
import NDT from '../assets/nationalTechDay25.webp';
import NEC from '../assets/nec25.webp';
import yugantra from "../assets/yugantra25.webp";
import iiid from "../assets/VisitsTO.webp";

const images = [
  { id: 1,  src: iiid    },
  { id: 2,  src: NEC     },
  { id: 3,  src: NDT     },
  { id: 4,  src: bizz    },
  { id: 5,  src: tes3    },
  { id: 6,  src: Momento },
  { id: 7,  src: TEC     },
  { id: 8,  src: nv      },
  { id: 9,  src: Ab      },
  { id: 10, src: iitr    },
  { id: 11, src: Tes4    },
  { id: 12, src: ims     },
  { id: 13, src: bizzniti},
  { id: 14, src: yugantra},
];

/*
  Modern Bento pattern for a 4-column grid using grid-flow-dense
  This creates a highly varied, aesthetically pleasing mosaic layout.
*/
const bentoSpan = (index) => {
  const spans = [
    'md:col-span-2 md:row-span-2', // Large Square
    'md:col-span-1 md:row-span-1', // Small Square
    'md:col-span-1 md:row-span-2', // Tall Rectangle
    'md:col-span-2 md:row-span-1', // Wide Rectangle
    'md:col-span-1 md:row-span-1', // Small Square
    'md:col-span-1 md:row-span-1', // Small Square
    'md:col-span-2 md:row-span-2', // Large Square
  ];
  return spans[index % 7];
};

const BentoCard = ({ img, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const isBig = bentoSpan(index).includes('row-span-2');

  // Smooth, lightweight modern entrance (no heavy springs or rotation)
  const modernFadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier
        delay: (index % 7) * 0.1, 
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={modernFadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      // Group for hover effect and overflow hidden
      className={`group relative overflow-hidden rounded-2xl ${bentoSpan(index)}`}
      style={{
        border: '1px solid #322d22',
        backgroundColor: '#0a0a0a' // Solid fallback color
      }}
    >
      {/* Image with hover zoom instead of infinite loop to save performance.
        will-change-transform forces the browser to hardware-accelerate this.
      */}
      <motion.img
        src={img.src}
        alt={`ecell-moment-${img.id}`}
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
        loading="lazy" // Lazy load images to improve initial performance
      />

      {/* Subtle gold hover overlay */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20 z-10 pointer-events-none" />

      {/* Subtle gold corner accent on big cards */}
      {isBig && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: (index % 7) * 0.1 + 0.6, duration: 1 }}
          className="absolute top-0 left-0 w-20 h-20 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255,237,89,0.2) 0%, transparent 60%)',
          }}
        />
      )}
    </motion.div>
  );
};

const Gallery = () => {
  return (
        <section className="w-full px-4 pt-32 pb-24 bg-black md:px-8 lg:px-16 overflow-hidden relative">

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[120px] opacity-15"
        style={{ background: 'radial-gradient(ellipse, #ffed59 0%, transparent 70%)' }}
      />

      {/* Header */}
      <div className="container max-w-screen-xl mx-auto mb-14 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1 m-auto mb-4 rounded-full w-fit"
          style={{ backgroundColor: '#141412', color: '#ffde59', border: '1px solid #26250F' }}
        >
          <span className="flex items-center gap-2 text-sm font-medium tracking-wide">
            <GiPolarStar /> GALLERY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-4xl font-bold text-white md:text-6xl"
        >
          E-Cell <span className="text-[#ffed59]">Moments</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 h-px w-24 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, #ffed59, transparent)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Explore memorable moments from our events, where aspiring entrepreneurs,
          industry experts, and innovators come together to inspire and learn.
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="container mx-auto max-w-screen-xl relative z-10 grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] grid-flow-dense gap-4 md:gap-6">
        {images.map((img, index) => (
          <BentoCard key={img.id} img={img} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Gallery;