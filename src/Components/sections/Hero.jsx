import React from 'react';
import axios from 'axios';
import FadeIn from '../animations/Fadein';
import { ChevronDown, Facebook, Github, Instagram, LucideLinkedin, Star, Twitter, Youtube } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiTelegram, SiYoutube, SiInstagram, SiGithub, SiFacebook, SiLinkedin } from 'react-icons/si'

import { scrollToSection } from '../../hooks/useScrollSpy';
import RedialGradientBackground from '../backgrounds/RedialGradientBackground';
import { useState, useEffect } from "react";
import {motion, animate, useMotionValue, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

const words = ["FullStack Developer", "Freelancer", "AI Engineer"];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) => words[index].slice(0, latest));

    const [user, setUser] = useState({});
    useEffect(() => {
        const getMyProfile = async () => {
            const { data } = await axios.get(
                "http://localhost:4100/api/v1/user/me/portfolio", { withCredentials: true }
            );
            setUser(data.user);
        };
        getMyProfile();
    }, [])
    

    useEffect(() => {
        const controls = animate(count, words[index].length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onComplete: () => {
                // Pause at the end before resetting
                setTimeout(() => {
                    const nextIndex = (index + 1) % words.length;
                    setIndex(nextIndex);
                    count.set(0); // Reset count for the next word
                }, 1000);
            },
        });
        return controls.stop;
    }, [index]);

  
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden bg-black'>
            <RedialGradientBackground variant="hero" />

            <div className=" relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left">
                        <FadeIn delay={0}>
                            <div className="inline-flex items-center gap-2.5  px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                                <Star className='w-4 h-4 text-white fill-white' />
                                <span className='text-xs md:text-sm text-white tracking-[1.2px]'>
                                    {PERSONAL_INFO.title} | based in {PERSONAL_INFO.location}
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-light'>
                                I'm <motion.span className='lg:text-6xt'>{displayText}</motion.span>
                                <span className="inline-block  bg-transparent ml-2 text-primary ">|</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <p className='text-lg text-white/70 max-w-[[550px] mb-8'>
                                Building modern, scalable web application with React js, Node js and cutting-edge technologies. Transforming ideas into exceptional digital experiences. further I create the best and most popular content creatives with social media content for my client
                            </p>
                        </FadeIn>

                        <FadeIn delay={300}>
                            <Link to={user.githubURL} target='_blank' >
                            <button className="inline-flex items-center gap-0 mb-12 group" >
                                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">Visit Github</div>
                                </button>
                                </Link>
                        </FadeIn>

                        <FadeIn delay={400}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                                {STATS.map((stat, index) => (
                                    <div className=" text-left border-r border-white/50 pr-10 last:border-r-0" key={index}>
                                        <div className=" text-2xl font-normal text-primary mb-[8px] font-mono">
                                            {stat.value}
                                        </div>
                                        <p className='text-sm text-white leading-snug'>
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={200}>
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto  group">
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl">

                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc(100%-2px)]">
                                        <img src={user.avatar && user.avatar.url} alt={user.fullName} className='w-full h-full object-cover' />
                                    </div>

                                    <div className="absolute bottom-6 left-6 z-20">
                                        <FadeIn delay={500}>
                                            <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                                                <Link to={user.linkedInURL} target='_blank'>
                                                    <div className="w-6 h-6 flex items-center justify-center    hover:scale110 transition-transform duration-300">
                                                        <SiLinkedin className="w-full h-full text-primary" />
                                                    </div>
                                                </Link>
                                                <Link to={user.facebookURL} target='_blank'>
                                                    <div className="w-6 h-6 flex items-center justify-center hover:scale110 transition-transform duration-300">
                                                        <SiFacebook  className="w-full h-full text-primary" />
                                                    </div>
                                                </Link>
                                                <Link to={user.githubURL} target='_blank'>
                                                    <div className="w-6 h-6 flex items-center justify-center hover:scale110 transition-transform duration-300">
                                                        < SiGithub className="w-full h-full text-primary" />
                                                    </div>
                                                </Link>
                                                <Link to={user.instagramURL} target='_blank'>
                                                    <div className="w-6 h-6 flex items-center justify-center hover:scale110 transition-transform duration-300">
                                                        <SiInstagram className="w-full h-full text-primary" />
                                                    </div>
                                                </Link>
                                              
                                                <Link to={user.twitterURL} target='_blank'>
                                                    <div className="w-6 h-6 flex items-center justify-center hover:scale110 transition-transform duration-300">
                                                        <Twitter className="w-full h-full text-primary cursor-pointer" />
                                                    </div>
                                                </Link>
                                                <Link to={user.telegramURL} target='_blank'>
                                                    <div className="w-6 h-6 flex items-center justify-center hover:scale110 transition-transform duration-300">
                                                        <SiTelegram className="w-full h-full text-primary cursor-pointer" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </FadeIn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            <button onClick={() => scrollToSection('about')} className="absolute bottom-8 left-1/2 -transition-x-1/2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-primary" />

            </button>

        </section>
    );
}

export default Hero;


