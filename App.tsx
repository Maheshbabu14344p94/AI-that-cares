import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, MessageCircle, Users, Sparkles, ChevronDown, BrainCircuit as Circuit, Cpu, Network } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-white/10 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-3 rounded-lg inline-block mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">{title}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const Testimonial = ({ text, author, image }: { text: string, author: string, image: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 flex items-start space-x-4"
    >
      <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <p className="text-gray-200 italic mb-2">{text}</p>
        <p className="text-purple-300 font-semibold">{author}</p>
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: any, className: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 0.2, scale: 1 }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    className={className}
  >
    <Icon className="w-full h-full" />
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingIcon icon={Circuit} className="absolute text-purple-300/20 w-24 h-24 top-1/4 left-1/4 transform -translate-x-1/2" delay={0} />
          <FloatingIcon icon={Cpu} className="absolute text-blue-300/20 w-32 h-32 top-1/3 right-1/4 transform translate-x-1/2" delay={0.5} />
          <FloatingIcon icon={Network} className="absolute text-purple-400/20 w-40 h-40 bottom-1/4 left-1/3" delay={1} />
          <FloatingIcon icon={Brain} className="absolute text-blue-400/20 w-36 h-36 bottom-1/3 right-1/3" delay={1.5} />
          
          {/* Abstract Lines */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent top-1/3 transform -rotate-45"></div>
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent bottom-1/3 transform rotate-45"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            AI That Cares
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of AI assistance with empathy and understanding at its core
          </p>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300"
          >
            Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="Advanced AI"
              description="Powered by cutting-edge machine learning for natural conversations"
            />
            <FeatureCard
              icon={MessageCircle}
              title="24/7 Support"
              description="Always available to help with your questions and concerns"
            />
            <FeatureCard
              icon={Sparkles}
              title="Personalized Experience"
              description="Adapts to your needs and preferences over time"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Testimonial
              text="This AI assistant has transformed how I handle my daily tasks. It's incredibly intuitive and helpful!"
              author="Sarah Johnson"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
            />
            <Testimonial
              text="The level of understanding and empathy shown by this AI is remarkable. It feels like talking to a real person."
              author="Michael Chen"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80"
            />
          </div>
        </div>
      </section>

      {/* Chat Widget Trigger */}
      <div className="fixed bottom-6 right-6">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-500 rounded-full animate-pulse opacity-50"></div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-colors duration-300 chat-launch-button">
            <MessageCircle className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default App;