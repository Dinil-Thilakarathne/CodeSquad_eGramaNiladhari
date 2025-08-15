"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaShieldAlt } from 'react-icons/fa';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section id="hero" className="pt-32 pb-20 bg-white relative overflow-hidden">
            {/* Yellow decorative background element */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[rgb(var(--color-primary))] opacity-10 rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[rgb(var(--color-primary))] opacity-10 rounded-full"></div>

            <div className="container-custom flex flex-col lg:flex-row items-center">
                <motion.div
                    className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-10 lg:mb-0 z-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-block px-4 py-1 rounded-full bg-[rgba(var(--color-primary),0.2)] text-[rgb(var(--color-secondary))] font-medium text-sm mb-4"
                    >
                        Government Digital Services
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                        Welcome to Sri Lanka&apos;s{' '}
                        <span className="text-[rgb(var(--color-primary))] block">E-Grama Niladhari Portal</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg mb-8 text-gray-600 max-w-lg mx-auto lg:mx-0"
                    >
                        Access essential government services digitally with ease and confidence.
                        Save time with our secure and efficient platform designed for all citizens.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="#services"
                            className="px-8 py-3 rounded-full bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] font-medium hover:bg-[rgb(var(--color-accent))] transition flex items-center justify-center gap-2"
                        >
                            Explore Services <FaArrowRight />
                        </a>
                        <a
                            href="#about"
                            className="px-8 py-3 rounded-full border-2 border-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] font-medium hover:bg-[rgba(var(--color-primary),0.1)] transition flex items-center justify-center gap-2"
                        >
                            <FaShieldAlt /> Learn More
                        </a>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-10 bg-[rgb(var(--color-light))] p-4 rounded-xl inline-block"
                    >
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                            {' '}Trusted by over 500,000+ Sri Lankan citizens
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lg:w-1/2 relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative h-[400px] w-full">
                        {/* The image would normally go here - for now using a placeholder */}
                        <Image
                            src="/landing/hero.jpg"
                            alt="Hero Image"
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-3xl"
                        />

                        {/* Floating card elements */}
                        <motion.div
                            className="absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center">
                                    <span className="font-bold text-[rgb(var(--color-secondary))]">✓</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Verified Process</p>
                                    <p className="text-xs text-gray-500">Quick & Secure</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -top-5 -right-5 bg-white p-4 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center">
                                    <span className="font-bold text-[rgb(var(--color-secondary))]">24h</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Available 24/7</p>
                                    <p className="text-xs text-gray-500">Always accessible</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
