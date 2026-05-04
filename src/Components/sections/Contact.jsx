import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, MessageSquare, Form, Send, Icon,  } from 'lucide-react';
import FadeIn from '../animations/Fadein';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import axios from 'axios'
import { toast } from 'react-toastify';
const Contact = () => {

    const [senderName, setSenderName] = useState("")
    const [message, setMessage] = useState("")
    const [email, setEmail] = useState("")

    const [loading, setLoading] = useState(false)
    const handleSendMessage = async (e) => {
        e.preventDefault();
        setLoading(true)
        await axios.post("http://localhost:4100/api/v1/message/send", { senderName, email, message }, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
        }).then((res) => {
            toast.success(res.data.message);
            setSenderName("");
            setEmail("");
            setMessage("");
            setLoading(false);
        }).catch((error) => {
            toast.error(error.response.data.message);
            setLoading(false)
        })
    }
   
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
   

   
    
    const socialIcons = {
        github: Github,
        linkedin: Linkedin,
        twitter:Twitter
    }
    
  return (
      <section id='contact' className='relative py-20 bg-black overflow-hidden'>
          <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn delay={0}>
                  <div className="text-center mb-16">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 ">
                          <MessageSquare className='w-4 h-4 text-primary' />
                          <span className='text-sm text-primary font-medium tracking-wider uppercase'>Get In Touch</span>
                      </div>
                      <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                          Let's Work Together
                      </h2>
                      <p className='text-lg text-white/60 max-w-2xl mx-auto'>
                          Have a project in mind? Let's discuss how we can bring your ideas to life 
                      </p>
                  </div>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-12">
                  <FadeIn delay={100}>
                      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                          <form onSubmit={handleSendMessage} className='space-y-6'>
                              <div> 
                                  <label htmlFor='name' className='block text-sm font-medium text-white/80 mb-2'>
                                      Name
                                  </label>
                                 
                                  <input type="text" id='name' value={senderName} onChange={(e) => setSenderName(e.target.value)} className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none fucus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300' placeholder='Your name' />
                              </div>

                              <div>
                                  <label htmlFor='email' className='block text-sm font-medium text-white/80 mb-2'>
                                      Email
                                  </label>
                                  <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none fucus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300' />
                              </div>
                              <div>
                                  <label htmlFor='message' className='block text-sm font-medium text-white/80 mb-2'>
                                      Message
                                  </label>
                                  <textarea id='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder='Tell me about Your project...' className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none fucus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none' />
                              </div>

                              
                              {
                                  !loading ? 
                              <button type='submit' className='w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group'>
                                  <span>Send Message</span>
                                  <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'/>
                                      </button> : <button disabled type="button" className='w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group'>
                                  <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                                  </svg>
                                  sending...
                              </button>
           }
                             
                          </form>
                      </div>
                  </FadeIn>

                  <FadeIn delay={200}>
                      <div className="space-y-8">
                          <div>
                              <h3 className='text-2xl font-semibold text-white mb-4'>
                                  Let's Connect
                              </h3>
                              <p className='text-white/60 leading-relaxed'>
                                  I'm always open to discussing new project create ideas or opportunity to by part of your vision Feel free rich out
                              </p>
                          </div>

                          <div className="space-y-4">
                              <div className="group relative bg-white/5 border border-white/10 rounder-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                  <div className="flex items-start gap-4">
                                      <div className="p-3 bg-linear-to-br form-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                                          <Mail className='w-6 h-6 text-primary'/>
                                      </div>
                                      <div className="flex-1">
                                          <p className='text-sm text-white/60 mb-1'>Email</p>
                                          <a href={`mailto:${PERSONAL_INFO}`} className='text-white hover:text-[#A8FF8D] transition-colors font-medium'>{user.email}</a>
                                      </div>
                                  </div>
                                  <div className='absolute inset-0 bg-linear-to-br form-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none'/>
                              </div>

                              <div className="group relative bg-white/5 border border-white/10 rounder-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                                  <div className="flex items-start gap-4">
                                      <div className="p-3 bg-linear-to-br form-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                                          <MapPin className='w-6 h-6 text-primary'/>
                                      </div>
                                      <div className="flex-1">
                                          <p className='text-sm text-white/60 mb-1'>Location</p>
                                          <p className='text-white font-medium'>{PERSONAL_INFO.location}</p>
                                      </div>
                                  </div>
                                  <div/>
                              </div>
                          </div>

                       <div>
                              <p className='text-sm text-white/60 mb-4'>Connect with me</p>
                              <div className="flex gap-4">
                               

                                   {
                                                  Object.entries(SOCIAL_LINKS).slice(0,3).map(([platform, url]) => {
                                                    const Icon = socialIcons[platform];
                                                    return Icon ? (
                                                        <a
                                                            key={platform}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                            className='p-4 bg-white/5 rounded-xl border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300group'
                                                            href={url}>

                                                            <Icon className='w-6 h-6 text-white/60 group-hover:text-primary transition-colors' />
                                                        </a>
                                                    ) : null;
                                                  })
                                                }
                              </div>   
                          </div>
                      </div>
                  </FadeIn>
              </div>
          </div>
    </section>
  );
}

export default Contact;
