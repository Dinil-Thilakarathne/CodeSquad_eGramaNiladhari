"use client";
import { motion } from 'framer-motion';
import { FaMobileAlt, FaLock, FaLanguage, FaHeadset, FaBolt, FaAccessibleIcon } from 'react-icons/fa';

const features = [
    {
        icon: <FaMobileAlt size={24} />,
        title: "Mobile Friendly",
        description: "Access all services from any device with our responsive design that works on smartphones, tablets, and computers."
    },
    {
        icon: <FaLock size={24} />,
        title: "Secure Platform",
        description: "Your data is protected with enterprise-grade security protocols and regular security audits."
    },
    {
        icon: <FaLanguage size={24} />,
        title: "Multilingual Support",
        description: "Available in Sinhala, Tamil, and English to serve all citizens in their preferred language."
    },
    {
        icon: <FaHeadset size={24} />,
        title: "24/7 Support",
        description: "Get help anytime with our dedicated support team available through multiple channels."
    },
    {
        icon: <FaBolt size={24} />,
        title: "Fast Processing",
        description: "Automated workflows ensure your requests are processed quickly and efficiently."
    },
    {
        icon: <FaAccessibleIcon size={24} />,
        title: "Accessibility",
        description: "Designed for everyone, including citizens with disabilities, following WCAG guidelines."
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1 rounded-full bg-[rgba(var(--color-primary),0.2)] text-[rgb(var(--color-secondary))] font-medium text-sm mb-4 inline-block"
                    >
                        Why Choose Us
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-6"
                    >
                        Platform <span className="text-[rgb(var(--color-primary))]">Features</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-600"
                    >
                        Our digital platform is designed with citizens in mind, making government
                        services more accessible, efficient, and user-friendly.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-gray-100 hover:border-[rgb(var(--color-primary))] hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[rgba(var(--color-primary),0.1)] flex items-center justify-center text-[rgb(var(--color-primary))] mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
