import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { motion, LazyMotion, domAnimation } from "framer-motion";

const features = [
  {
    icon: <FaLink className="text-blue-500 text-3xl shrink-0" />,
    title: "Effortless URL Shortening",
    description:
      "Quickly generate short, memorable links in just a few clicks. Our clean and intuitive interface makes link creation seamless for everyone.",
  },
  {
    icon: <FaShareAlt className="text-green-500 text-3xl shrink-0" />,
    title: "Comprehensive Analytics",
    description:
      "Monitor your link performance with real-time analytics, including click counts, geographic data, device types, and referral sources.",
  },
  {
    icon: <FaEdit className="text-purple-500 text-3xl shrink-0" />,
    title: "Enterprise-Grade Security",
    description:
      "All data is safeguarded with modern encryption and security protocols to ensure safe and reliable link sharing at all times.",
  },
  {
    icon: <FaChartLine className="text-red-500 text-3xl shrink-0" />,
    title: "Fast & Reliable Performance",
    description:
      "Enjoy lightning-fast redirects and industry-level uptime with our robust backend infrastructure built for scalability.",
  },
];

const AboutPage = () => {
  return (
    <div className="px-5 sm:px-8 lg:px-14 py-10 min-h-[calc(100vh-64px)] bg-white text-slate-800">
      <div className="max-w-5xl mx-auto">
        <LazyMotion features={domAnimation}>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold italic mb-4"
          >
            About Shortalytics
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 text-sm mb-10 leading-relaxed"
          >
            Shortalytics is your all-in-one solution for smart link management. Whether you're a developer, marketer, or casual user, Shortalytics enables you to shorten, share, and analyze URLs with ease. Designed for speed, built for security, and powered by data-driven insights — it's the smarter way to manage your links.
          </motion.p>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                {feature.icon}
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-1">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </LazyMotion>
      </div>
    </div>
  );
};

export default AboutPage;
