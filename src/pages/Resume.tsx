
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Download } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Replace with actual resume file path
    const link = document.createElement('a');
    link.href = 'assets/Balaji_fullstack_developer_Resume(1).pdf';
    link.download = 'Balaji-resume.pdf';
    link.click();
  };

  return (
    <PageTransition>
      <div className="container pt-20 pb-10 mx-auto max-w-4xl text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Download
            </span>
            <br />
            <span className="text-white">My Resume</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Get the complete overview of my professional experience, skills, and achievements in a beautifully designed PDF format.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity:0,scale: 0.8 }}
          animate={{ opacity:1,scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-green-500 lg:to-blue-500 rounded-3xl lg:blur-3xl lg:opacity-30 scale-125"></div>
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 max-w-md mx-auto cursor-pointer"
            onClick={handleDownload}
          >
            <div className="space-y-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center"
              >
                <Download size={32} className="text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional Resume</h3>
                <p className="text-gray-400">PDF Format • Updated 2025</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Download Now
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3">What's Inside</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Professional Experience</li>
              <li>• Technical Skills</li>
              <li>• Education & Certifications</li>
              <li>• Notable Projects</li>
            </ul>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3">File Details</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• High-quality PDF format</li>
              <li>• ATS-friendly layout</li>
              <li>• Mobile & print optimized</li>
              <li>• Regular updates</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Resume;
