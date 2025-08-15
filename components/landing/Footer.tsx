"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[rgb(var(--color-secondary))] text-white">
            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="px-4 py-1 rounded-full bg-[rgba(var(--color-primary),0.3)] text-[rgb(var(--color-primary))] font-medium text-sm mb-4 inline-block">
                                Get In Touch
                            </span>
                            <h2 className="text-3xl font-bold mb-6">
                                We'd Love to <span className="text-[rgb(var(--color-primary))]">Hear From You</span>
                            </h2>
                            <p className="text-gray-300 mb-8">
                                Have questions or need assistance with government services?
                                Our dedicated support team is ready to help you navigate the platform.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[rgba(var(--color-primary),0.2)] flex items-center justify-center text-[rgb(var(--color-primary))]">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="font-medium">Call Us</p>
                                        <p className="text-gray-300">+94 11 2123456</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[rgba(var(--color-primary),0.2)] flex items-center justify-center text-[rgb(var(--color-primary))]">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="font-medium">Email Us</p>
                                        <p className="text-gray-300">support@egramaniladhari.gov.lk</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[rgba(var(--color-primary),0.2)] flex items-center justify-center text-[rgb(var(--color-primary))]">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="font-medium">Visit Us</p>
                                        <p className="text-gray-300">Ministry of Public Administration, Colombo, Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-[rgba(255,255,255,0.05)] p-8 rounded-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-[rgb(var(--color-primary))]"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-[rgb(var(--color-primary))]"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white focus:outline-none focus:border-[rgb(var(--color-primary))]"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] font-medium rounded-lg hover:bg-[rgb(var(--color-accent))] transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Links & Copyright */}
            <div className="border-t border-[rgba(255,255,255,0.1)] py-10">
                <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-8 mb-10">
                        <div>
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-10 h-10 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center">
                                    <span className="font-bold text-[rgb(var(--color-secondary))]">GN</span>
                                </div>
                                <span className="text-2xl font-bold">
                                    E-Grama <span className="text-[rgb(var(--color-primary))]">Niladhari</span>
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                The official digital portal for Grama Niladhari services in Sri Lanka.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" title="Follow us on Facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] transition">
                                    <FaFacebookF />
                                </a>
                                <a href="#" title="Follow us on Twitter" aria-label="Twitter" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] transition">
                                    <FaTwitter />
                                </a>
                                <a href="#" title="Follow us on Instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] transition">
                                    <FaInstagram />
                                </a>
                                <a href="#" title="Subscribe to our YouTube channel" aria-label="YouTube" className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-secondary))] transition">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#services" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-6">Services</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        NIC Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Certificates
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Land Registry
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Authentication
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-6">Legal</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Disclaimer
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-gray-400 hover:text-[rgb(var(--color-primary))] transition">
                                        Accessibility
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center pt-8 border-t border-[rgba(255,255,255,0.1)]">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} E-Grama Niladhari Sri Lanka. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
