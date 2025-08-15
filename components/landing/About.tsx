"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const features = [
    "Secure digital identity verification",
    "24/7 access to government services",
    "Transparent process tracking",
    "Bilingual support (Sinhala, Tamil, English)",
    "Integrated payment system for fees",
    "Automated document verification"
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-[rgb(var(--color-light))]">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image/Visual Side */}
                    <motion.div
                        className="lg:w-1/2 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative h-[400px] w-full">
                            {/* Main image/placeholder */}
                            <Image
                                src="/landing/hero3.jpg"
                                alt="About Image"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-3xl"
                            />

                            {/* Statistics card */}
                            <motion.div
                                className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <div className="flex gap-6">
                                    <div className="text-center">
                                        <h3 className="text-4xl font-bold text-[rgb(var(--color-primary))]">500K+</h3>
                                        <p className="text-sm text-gray-600">Citizens Served</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-4xl font-bold text-[rgb(var(--color-primary))]">95%</h3>
                                        <p className="text-sm text-gray-600">Satisfaction</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content Side */}
                    <motion.div
                        className="lg:w-1/2 order-1 lg:order-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="px-4 py-1 rounded-full bg-[rgba(var(--color-primary),0.2)] text-[rgb(var(--color-secondary))] font-medium text-sm mb-4 inline-block"
                        >
                            About Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold mb-6"
                        >
                            Transforming Government <span className="text-[rgb(var(--color-primary))]">Services</span> Digitally
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gray-600 mb-8"
                        >
                            The E-Grama Niladhari portal bridges the gap between citizens and government services
                            through innovative digital solutions. Our platform eliminates the need for physical visits
                            to government offices, saving time and resources for everyone.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center text-[rgb(var(--color-secondary))]">
                                            <FaCheck size={10} />
                                        </div>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            href="#features"
                            className="px-8 py-3 rounded-full bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] font-medium hover:bg-[rgb(var(--color-accent))] transition inline-flex items-center gap-2"
                        >
                            Discover Features
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
