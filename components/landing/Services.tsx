"use client";
import { motion } from 'framer-motion';
import { FaIdCard, FaFileSignature, FaUsers, FaLandmark, FaCertificate, FaPassport } from 'react-icons/fa';

const services = [
    {
        icon: <FaIdCard size={40} />,
        title: "NIC Services",
        desc: "Apply for a new NIC, report loss or update your National Identity Card details online.",
        color: "from-[#FFEB3B] to-[#FFC107]",
        link: "#"
    },
    {
        icon: <FaFileSignature size={40} />,
        title: "Certificates",
        desc: "Request birth, marriage, death certificates, and other official documents with ease.",
        color: "from-[#FFCC80] to-[#FFB74D]",
        link: "#"
    },
    {
        icon: <FaUsers size={40} />,
        title: "Community Services",
        desc: "Access community programs, welfare services, and local development initiatives.",
        color: "from-[#FFF176] to-[#FFEE58]",
        link: "#"
    },
    {
        icon: <FaLandmark size={40} />,
        title: "Land Registry",
        desc: "Verify land ownership, apply for title deeds, and access property related services.",
        color: "from-[#FFD54F] to-[#FFCA28]",
        link: "#"
    },
    {
        icon: <FaCertificate size={40} />,
        title: "Authentication",
        desc: "Get official documents authenticated and certified for legal or international use.",
        color: "from-[#FFE082] to-[#FFD54F]",
        link: "#"
    },
    {
        icon: <FaPassport size={40} />,
        title: "Identity Verification",
        desc: "Verify identity for banking, employment, and other institutional requirements.",
        color: "from-[#FFECB3] to-[#FFE082]",
        link: "#"
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-1 rounded-full bg-[rgba(var(--color-primary),0.2)] text-[rgb(var(--color-secondary))] font-medium text-sm mb-4 inline-block"
                    >
                        Digital Government
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl font-bold mb-6"
                    >
                        Our <span className="text-[rgb(var(--color-primary))]">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-600"
                    >
                        Access a comprehensive range of government services from the comfort of your home.
                        Save time and effort with our digital-first approach.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className={`h-3 bg-gradient-to-r ${service.color}`}></div>
                            <div className="p-8">
                                <div className="bg-[rgba(var(--color-primary),0.1)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[rgb(var(--color-primary))]">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6">{service.desc}</p>
                                <a
                                    href={service.link}
                                    className="text-[rgb(var(--color-secondary))] font-medium hover:text-[rgb(var(--color-primary))] transition flex items-center gap-2"
                                >
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
