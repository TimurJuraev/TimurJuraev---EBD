'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Cpu, 
  Cloud, 
  Code2, 
  Layers, 
  Network, 
  Shield, 
  CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DigitalTransformationPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Digital Transformation
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Accelerate your organization's digital journey with comprehensive technology 
              strategies and innovative solutions that drive growth and efficiency.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                <Link href="/contact" className="flex items-center">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <Tabs 
            defaultValue="overview" 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-white rounded-lg p-1 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="success-stories">Success Stories</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'overview' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Digital Transformation Journey</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    We help organizations embrace digital technologies to create new — or modify 
                    existing — business processes, culture, and customer experiences to meet 
                    changing business and market requirements.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Cloud className="h-12 w-12 text-[#0B3C5D] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Cloud Migration</h3>
                        <p className="text-muted-foreground">
                          Seamlessly transition your infrastructure and applications to the cloud 
                          while ensuring security and performance.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Code2 className="h-12 w-12 text-[#328CC1] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Application Modernization</h3>
                        <p className="text-muted-foreground">
                          Update legacy systems and applications with modern technologies and 
                          architectures for improved efficiency.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Network className="h-12 w-12 text-[#006400] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Digital Integration</h3>
                        <p className="text-muted-foreground">
                          Connect systems, applications, and data sources to create a unified 
                          digital ecosystem.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        1
                      </div>
                      <h3 className="font-medium mb-2">Assessment</h3>
                      <p className="text-sm text-muted-foreground">
                        Evaluate current digital maturity and identify transformation opportunities.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        2
                      </div>
                      <h3 className="font-medium mb-2">Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Develop a comprehensive roadmap aligned with business objectives.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        3
                      </div>
                      <h3 className="font-medium mb-2">Implementation</h3>
                      <p className="text-sm text-muted-foreground">
                        Execute transformation initiatives with minimal disruption.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        4
                      </div>
                      <h3 className="font-medium mb-2">Optimization</h3>
                      <p className="text-sm text-muted-foreground">
                        Continuously improve and adapt to evolving needs.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {/* Solutions Tab */}
            <TabsContent value="solutions" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'solutions' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Comprehensive Digital Solutions</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Our digital transformation solutions are designed to address the full spectrum 
                    of your organization's needs, from infrastructure to user experience.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                    <Layers className="h-12 w-12 text-[#0B3C5D] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Enterprise Architecture</h3>
                    <p className="text-muted-foreground mb-4">
                      Design and implement scalable, secure, and efficient digital infrastructure 
                      that supports your business objectives.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Cloud-native architecture design</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Microservices implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>API-first development approach</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                    <Shield className="h-12 w-12 text-[#328CC1] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Security & Compliance</h3>
                    <p className="text-muted-foreground mb-4">
                      Ensure your digital transformation journey adheres to industry standards 
                      and regulatory requirements while maintaining robust security.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Zero-trust security architecture</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Compliance automation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Continuous security monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="relative p-6 bg-[#0B3C5D] text-white rounded-lg mb-12">
                  <h3 className="text-xl font-bold mb-4">Ready to Transform?</h3>
                  <p className="mb-4">
                    Let's discuss how our digital transformation solutions can help your 
                    organization thrive in the digital age.
                  </p>
                  <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                    <Link href="/contact">
                      Start Your Transformation Journey
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {/* Methodology Tab */}
            <TabsContent value="methodology" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'methodology' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Our Transformation Methodology</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    We follow a proven, systematic approach to digital transformation that ensures 
                    successful outcomes while minimizing risks and disruptions.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-[#0B3C5D]/10 flex items-center justify-center mb-4">
                          <span className="text-[#0B3C5D] font-bold text-xl">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Discovery & Assessment</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Current state analysis</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Stakeholder interviews</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Technology stack evaluation</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-[#328CC1]/10 flex items-center justify-center mb-4">
                          <span className="text-[#328CC1] font-bold text-xl">2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Strategy & Planning</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Transformation roadmap</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Resource allocation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Risk mitigation planning</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-[#006400]/10 flex items-center justify-center mb-4">
                          <span className="text-[#006400] font-bold text-xl">3</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Execution & Delivery</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Agile implementation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Continuous integration</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Progress monitoring</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {/* Success Stories Tab */}
            <TabsContent value="success-stories" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'success-stories' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Transformation Success Stories</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Discover how our digital transformation solutions have helped organizations 
                    across various industries achieve their business objectives.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0B3C5D]">
                    <span className="inline-block text-sm font-medium bg-[#0B3C5D]/10 text-[#0B3C5D] px-3 py-1 rounded-full mb-4">
                      Financial Services
                    </span>
                    <h3 className="text-xl font-bold mb-4">Digital Banking Transformation</h3>
                    <p className="text-muted-foreground mb-4">
                      Helped a traditional bank modernize its digital infrastructure and launch 
                      innovative online banking services.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-3 w-full bg-gray-200 rounded-full">
                          <div className="h-3 bg-[#0B3C5D] rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="ml-3 font-bold">65%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Increase in digital transaction volume
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#328CC1]">
                    <span className="inline-block text-sm font-medium bg-[#328CC1]/10 text-[#328CC1] px-3 py-1 rounded-full mb-4">
                      Healthcare
                    </span>
                    <h3 className="text-xl font-bold mb-4">Telehealth Platform Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Implemented a comprehensive telehealth solution for a healthcare provider 
                      network.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-3 w-full bg-gray-200 rounded-full">
                          <div className="h-3 bg-[#328CC1] rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <span className="ml-3 font-bold">40%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Reduction in patient wait times
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">Ready to Write Your Success Story?</h3>
                      <p className="text-white/90">
                        Let's discuss how we can help transform your organization for the digital age.
                      </p>
                    </div>
                    <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                      <Link href="/contact">
                        Start Your Journey
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}