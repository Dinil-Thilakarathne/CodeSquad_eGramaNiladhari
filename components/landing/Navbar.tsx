"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUser, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed w-full bg-white shadow-lg z-50"
        >
            <div className="container-custom flex justify-between items-center py-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[rgb(var(--color-primary))] flex items-center justify-center">
                        <span className="font-bold text-[rgb(var(--color-secondary))]">GN</span>
                    </div>
                    <span className="text-2xl font-bold text-[rgb(var(--color-secondary))]">
                        E-Grama <span className="text-[rgb(var(--color-primary))]">Niladhari</span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="#services" className="hover:text-[rgb(var(--color-primary))] font-medium transition-colors">Services</Link>
                    <Link href="#about" className="hover:text-[rgb(var(--color-primary))] font-medium transition-colors">About</Link>
                    <Link href="#features" className="hover:text-[rgb(var(--color-primary))] font-medium transition-colors">Features</Link>
                    <Link href="#testimonials" className="hover:text-[rgb(var(--color-primary))] font-medium transition-colors">Testimonials</Link>
                    <Link href="#contact" className="hover:text-[rgb(var(--color-primary))] font-medium transition-colors">Contact</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link
                        href="/login"
                        className="px-5 py-2 rounded-full bg-[rgb(var(--color-primary))] text-[rgb(var(--color-secondary))] font-medium hover:bg-[rgb(var(--color-accent))] transition flex items-center space-x-2"
                    >
                        <FaUser size={14} />
                        <span>Login</span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-[rgb(var(--color-secondary))]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        title="Toggle mobile menu"
                    >
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100"
                >
                    <div className="container-custom py-4 flex flex-col space-y-4">
                        <Link href="#services" className="hover:text-[rgb(var(--color-primary))] font-medium py-2">Services</Link>
                        <Link href="#about" className="hover:text-[rgb(var(--color-primary))] font-medium py-2">About</Link>
                        <Link href="#features" className="hover:text-[rgb(var(--color-primary))] font-medium py-2">Features</Link>
                        <Link href="#testimonials" className="hover:text-[rgb(var(--color-primary))] font-medium py-2">Testimonials</Link>
                        <Link href="#contact" className="hover:text-[rgb(var(--color-primary))] font-medium py-2">Contact</Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
