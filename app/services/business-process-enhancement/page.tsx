'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Workflow, 
  BarChart4, 
  Settings, 
  Layers, 
  RefreshCw, 
  CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function BusinessProcessEnhancementPage() {
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
              Business Process Enhancement
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Optimize your operations and streamline workflows through intelligent process 
              automation and strategic redesign.
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
                  <h2 className="text-3xl font-bold mb-6">Process Excellence Journey</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    We help organizations identify, analyze, and optimize their business processes 
                    to achieve operational excellence and sustainable growth.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Workflow className="h-12 w-12 text-[#0B3C5D] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Process Automation</h3>
                        <p className="text-muted-foreground">
                          Implement intelligent automation solutions to streamline workflows and 
                          reduce manual intervention.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <BarChart4 className="h-12 w-12 text-[#328CC1] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                        <p className="text-muted-foreground">
                          Enhance operational efficiency through data-driven insights and 
                          continuous improvement.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Settings className="h-12 w-12 text-[#006400] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Process Integration</h3>
                        <p className="text-muted-foreground">
                          Seamlessly connect systems and workflows to create unified business 
                          processes.
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
                      <h3 className="font-medium mb-2">Process Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Thoroughly analyze current processes to identify improvement opportunities.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        2
                      </div>
                      <h3 className="font-medium mb-2">Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Create optimized process flows aligned with business objectives.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        3
                      </div>
                      <h3 className="font-medium mb-2">Implementation</h3>
                      <p className="text-sm text-muted-foreground">
                        Deploy solutions with minimal disruption to operations.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        4
                      </div>
                      <h3 className="font-medium mb-2">Continuous Improvement</h3>
                      <p className="text-sm text-muted-foreground">
                        Monitor and optimize processes for sustained performance.
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
                  <h2 className="text-3xl font-bold mb-6">Process Enhancement Solutions</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Our comprehensive solutions address the full spectrum of business process 
                    needs, from automation to optimization.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                    <Layers className="h-12 w-12 text-[#0B3C5D] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Process Mapping & Analysis</h3>
                    <p className="text-muted-foreground mb-4">
                      Detailed mapping and analysis of business processes to identify 
                      bottlenecks and improvement opportunities.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>End-to-end process visualization</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Performance metrics analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Bottleneck identification</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                    <RefreshCw className="h-12 w-12 text-[#328CC1] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Process Automation</h3>
                    <p className="text-muted-foreground mb-4">
                      Implement intelligent automation solutions to streamline operations 
                      and reduce manual intervention.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Robotic Process Automation (RPA)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Workflow automation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Integration automation</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="relative p-6 bg-[#0B3C5D] text-white rounded-lg mb-12">
                  <h3 className="text-xl font-bold mb-4">Ready to Optimize?</h3>
                  <p className="mb-4">
                    Let's discuss how our process enhancement solutions can transform your 
                    business operations.
                  </p>
                  <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                    <Link href="/contact">
                      Start Your Enhancement Journey
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
                  <h2 className="text-3xl font-bold mb-6">Our Enhancement Methodology</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    We follow a systematic, data-driven approach to process enhancement that 
                    ensures sustainable improvements and measurable results.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-[#0B3C5D]/10 flex items-center justify-center mb-4">
                          <span className="text-[#0B3C5D] font-bold text-xl">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Discovery & Analysis</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Process documentation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Performance analysis</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Gap identification</span>
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
                        <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Process redesign</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Automation planning</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Integration strategy</span>
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
                        <h3 className="text-xl font-bold mb-2">Implementation</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Phased deployment</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Change management</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                            <span>Training and support</span>
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
                  <h2 className="text-3xl font-bold mb-6">Process Enhancement Success Stories</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Discover how our process enhancement solutions have helped organizations 
                    achieve operational excellence and drive business growth.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0B3C5D]">
                    <span className="inline-block text-sm font-medium bg-[#0B3C5D]/10 text-[#0B3C5D] px-3 py-1 rounded-full mb-4">
                      Manufacturing
                    </span>
                    <h3 className="text-xl font-bold mb-4">Production Process Optimization</h3>
                    <p className="text-muted-foreground mb-4">
                      Streamlined manufacturing processes through automation and lean 
                      methodology implementation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-3 w-full bg-gray-200 rounded-full">
                          <div className="h-3 bg-[#0B3C5D] rounded-full" style={{ width: '35%' }}></div>
                        </div>
                        <span className="ml-3 font-bold">35%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Reduction in production cycle time
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#328CC1]">
                    <span className="inline-block text-sm font-medium bg-[#328CC1]/10 text-[#328CC1] px-3 py-1 rounded-full mb-4">
                      Financial Services
                    </span>
                    <h3 className="text-xl font-bold mb-4">Claims Processing Automation</h3>
                    <p className="text-muted-foreground mb-4">
                      Automated claims processing workflow resulting in faster processing 
                      and improved accuracy.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-3 w-full bg-gray-200 rounded-full">
                          <div className="h-3 bg-[#328CC1] rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <span className="ml-3 font-bold">60%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Reduction in processing time
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Processes?</h3>
                      <p className="text-white/90">
                        Let's discuss how we can help optimize your business operations.
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