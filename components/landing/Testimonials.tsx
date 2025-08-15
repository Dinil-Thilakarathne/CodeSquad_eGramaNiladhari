"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
    {
        name: "Lalith Perera",
        role: "Small Business Owner",
        quote: "The E-Grama Niladhari portal saved me countless hours that I would have spent traveling to government offices. I was able to get my business license renewed entirely online!",
        rating: 5,
        image: "/lalith.jpg" // These would be replaced with actual images
    },
    {
        name: "Kumari Jayawardena",
        role: "Teacher",
        quote: "The interface is so intuitive that even my elderly parents were able to request their pension certificates without any assistance. Truly a service for all citizens.",
        rating: 5,
        image: "/kumari.jpg"
    },
    {
        name: "Malith Fernando",
        role: "IT Professional",
        quote: "As someone who works in tech, I'm impressed by the security measures implemented in this system. Getting authenticated documents for my visa application was seamless.",
        rating: 4,
        image: "/malith.jpg"
    },
    {
        name: "Tharushi Silva",
        role: "University Student",
        quote: "I needed my birth certificate for university registration and got it within a day through this platform. The mobile notifications kept me updated throughout the process.",
        rating: 5,
        image: "/tharushi.jpg"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 bg-[rgb(var(--color-light))]">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1 rounded-full bg-[rgba(var(--color-primary),0.2)] text-[rgb(var(--color-secondary))] font-medium text-sm mb-4 inline-block"
                    >
                        Success Stories
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold mb-6"
                    >
                        What <span className="text-[rgb(var(--color-primary))]">Citizens</span> Say
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-600"
                    >
                        Hear from Sri Lankan citizens who have experienced the convenience
                        and efficiency of our digital government services.
                    </motion.p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    <div className="absolute -top-10 -left-10 text-[rgb(var(--color-primary))] opacity-20">
                        <FaQuoteLeft size={80} />
                    </div>

                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-10 rounded-2xl shadow-lg"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="md:w-1/3">
                                <div className="w-32 h-32 rounded-full bg-[rgb(var(--color-primary))] mx-auto overflow-hidden flex items-center justify-center">
                                    <p className="text-[rgb(var(--color-secondary))]">Photo</p>
                                    {/* Would be replaced with actual image: <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" /> */}
                                </div>
                            </div>

                            <div className="md:w-2/3 text-center md:text-left">
                                <div className="flex justify-center md:justify-start mb-4">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <FaStar key={i} className="text-[rgb(var(--color-primary))]" />
                                    ))}
                                </div>

                                <p className="text-lg italic mb-6">{testimonials[activeIndex].quote}</p>

                                <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                                <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex justify-center mt-10 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="w-12 h-12 rounded-full border-2 border-[rgb(var(--color-primary))] flex items-center justify-center text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary))] transition"
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                        </button>

                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-[rgb(var(--color-primary))]' : 'bg-gray-300'}`}
                                aria-label={`Go to testimonial ${idx + 1}`}
                            />
                        ))}

                        <button
                            onClick={nextTestimonial}
                            className="w-12 h-12 rounded-full border-2 border-[rgb(var(--color-primary))] flex items-center justify-center text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary))] transition"
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
