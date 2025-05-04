'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  LineChart, 
  BarChart4, 
  Sigma, 
  PieChart,
  TrendingUp,
  Bot,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

export default function AnalyticsModelingPage() {
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
              Analytics, Modeling & Automation
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform raw data into actionable insights with our advanced analytics, 
              predictive modeling, and intelligent automation solutions.
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
              <TabsTrigger value="data-visualization">Data Visualization</TabsTrigger>
              <TabsTrigger value="risk-assessment">Risk Assessment</TabsTrigger>
              <TabsTrigger value="success-metrics">Success Metrics</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'overview' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">How We Transform Your Data</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Our analytics and modeling services help organizations unlock the hidden value in their data,
                    providing actionable insights that drive strategic decision-making and operational excellence.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <LineChart className="h-12 w-12 text-[#0B3C5D] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                        <p className="text-muted-foreground">
                          Leverage machine learning and statistical models to forecast trends, 
                          identify opportunities, and mitigate risks before they materialize.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <BarChart4 className="h-12 w-12 text-[#328CC1] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Business Intelligence</h3>
                        <p className="text-muted-foreground">
                          Transform complex data into clear, actionable insights with customized 
                          dashboards and reports that align with your business objectives.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Bot className="h-12 w-12 text-[#006400] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Intelligent Automation</h3>
                        <p className="text-muted-foreground">
                          Deploy AI-powered automation solutions that streamline processes, 
                          reduce manual work, and ensure consistent quality outcomes.
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
                      <h3 className="font-medium mb-2">Discovery & Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        We analyze your current data landscape, business goals, and challenges.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        2
                      </div>
                      <h3 className="font-medium mb-2">Solution Design</h3>
                      <p className="text-sm text-muted-foreground">
                        We architect a tailored analytics and automation solution for your needs.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        3
                      </div>
                      <h3 className="font-medium mb-2">Implementation</h3>
                      <p className="text-sm text-muted-foreground">
                        We develop and deploy the solution with minimal disruption to operations.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] mb-4">
                        4
                      </div>
                      <h3 className="font-medium mb-2">Continuous Optimization</h3>
                      <p className="text-sm text-muted-foreground">
                        We monitor, measure, and refine the solution to ensure lasting value.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {/* Data Visualization Tab */}
            <TabsContent value="data-visualization" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'data-visualization' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Interactive Data Visualization</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Our powerful data visualization tools transform complex datasets into intuitive, 
                    interactive visuals that reveal patterns, trends, and insights at a glance.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                    <PieChart className="h-12 w-12 text-[#0B3C5D] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Executive Dashboards</h3>
                    <p className="text-muted-foreground mb-4">
                      Custom-designed dashboards that present critical KPIs and business metrics 
                      in real-time, enabling faster and more informed decision-making.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Real-time data integration from multiple sources</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Customizable views for different stakeholders</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Interactive filtering and drill-down capabilities</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm">
                    <TrendingUp className="h-12 w-12 text-[#328CC1] mb-4" />
                    <h3 className="text-xl font-bold mb-4">Advanced Reporting</h3>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive reporting solutions that automate data collection, analysis, 
                      and presentation, saving time and ensuring accuracy.
                    </p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Automated report generation and distribution</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Exception-based alerts and notifications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[#006400] mr-2 shrink-0 mt-0.5" />
                          <span>Historical trend analysis and benchmarking</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="relative p-6 bg-[#0B3C5D] text-white rounded-lg mb-12">
                  <h3 className="text-xl font-bold mb-4">Interactive Demo</h3>
                  <p className="mb-4">
                    Experience our data visualization capabilities with this interactive demonstration.
                    Select different datasets and visualization types to see how we transform data into insights.
                  </p>
                  <div className="bg-[#0B3C5D]/50 p-8 rounded-lg flex items-center justify-center">
                    <p className="text-white/80">
                      Interactive visualization demo would be displayed here.
                      Contact us for a personalized demonstration.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                      <Link href="/contact">
                        Request a Demo
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {/* Risk Assessment Tab */}
            <TabsContent value="risk-assessment" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'risk-assessment' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Risk Assessment Methodology</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Our comprehensive risk assessment framework combines advanced analytics with 
                    domain expertise to identify, quantify, and mitigate risks across your organization.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Sigma className="h-12 w-12 text-[#0B3C5D] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Quantitative Analysis</h3>
                        <p className="text-muted-foreground">
                          Rigorous statistical models that quantify risk exposure and potential 
                          impacts across various scenarios and time horizons.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <ShieldCheck className="h-12 w-12 text-[#328CC1] mb-4" />
                        <h3 className="text-xl font-bold mb-2">Compliance Monitoring</h3>
                        <p className="text-muted-foreground">
                          Automated systems to track regulatory requirements, identify gaps, 
                          and ensure continuous compliance with evolving standards.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <Card>
                      <CardContent className="p-6">
                        <Bot className="h-12 w-12 text-[#006400] mb-4" />
                        <h3 className="text-xl font-bold mb-2">AI-Powered Detection</h3>
                        <p className="text-muted-foreground">
                          Machine learning algorithms that detect anomalies and potential issues 
                          before they escalate into significant problems.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg mb-12">
                  <h3 className="text-xl font-bold mb-4">Our Five-Step Risk Assessment Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3C5D] text-white mr-4 shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Risk Identification</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive scanning of internal and external environments to identify potential risks.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3C5D] text-white mr-4 shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Risk Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed assessment of risk likelihood and potential impact using quantitative and qualitative methods.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3C5D] text-white mr-4 shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Risk Evaluation</h4>
                        <p className="text-sm text-muted-foreground">
                          Prioritization of risks based on organizational risk appetite and strategic objectives.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3C5D] text-white mr-4 shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Risk Mitigation</h4>
                        <p className="text-sm text-muted-foreground">
                          Development of targeted strategies to address high-priority risks.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3C5D] text-white mr-4 shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Monitoring & Review</h4>
                        <p className="text-sm text-muted-foreground">
                          Continuous assessment of risk landscape and effectiveness of mitigation strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            {/* Success Metrics Tab */}
            <TabsContent value="success-metrics" className="px-4">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={activeTab === 'success-metrics' ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Client Success Metrics</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                    Our analytics and automation solutions deliver measurable business value
                    across key performance indicators. Here's how our clients measure success.
                  </p>
                </motion.div>
                
                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#0B3C5D]">
                    <h3 className="text-xl font-bold mb-4">Financial Services</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Risk Reduction</h4>
                        <div className="flex items-center">
                          <div className="h-3 w-full bg-gray-200 rounded-full">
                            <div className="h-3 bg-[#0B3C5D] rounded-full" style={{ width: '37%' }}></div>
                          </div>
                          <span className="ml-3 font-bold">37%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Average reduction in risk exposure through predictive analytics and early warning systems.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Compliance Efficiency</h4>
                        <div className="flex items-center">
                          <div className="h-3 w-full bg-gray-200 rounded-full">
                            <div className="h-3 bg-[#328CC1] rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <span className="ml-3 font-bold">45%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Increased efficiency in regulatory reporting and compliance monitoring processes.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Decision Accuracy</h4>
                        <div className="flex items-center">
                          <div className="h-3 w-full bg-gray-200 rounded-full">
                            <div className="h-3 bg-[#006400] rounded-full" style={{ width: '62%' }}></div>
                          </div>
                          <span className="ml-3 font-bold">62%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Improvement in credit decision accuracy through enhanced customer analytics.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#328CC1]">
                    <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Production Optimization</h4>
                        <div className="flex items-center">
                          <div className="h-3 w-full bg-gray-200 rounded-full">
                            <div className="h-3 bg-[#0B3C5D] rounded-full" style={{ width: '22%' }}></div>
                          </div>
                          <span className="ml-3 font-bold">22%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Average increase in production output through optimized scheduling and process improvements.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Downtime Reduction</h4>
                        <div className="flex items-center">
                          <div className="h-3 w-full bg-gray-200 rounded-full">
                            <div className="h-3 bg-[#328CC1] rounded-full" style={{ width: '43%' }}></div>
                          </div>
                          <span className="ml-3 font-bold">43%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Reduction in unplanned downtime through predictive maintenance analytics.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Quality Improvement</h4>
                        <div className="flex items-center">
                          <div className="h-3 w-full bg-gray-200 rounded-full">
                            <div className="h-3 bg-[#006400] rounded-full" style={{ width: '18%' }}></div>
                          </div>
                          <span className="ml-3 font-bold">18%</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Increase in product quality metrics through automated inspection and quality control.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] text-white p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-2">Ready to transform your data strategy?</h3>
                      <p className="text-white/90">
                        Let's discuss how our analytics solutions can drive meaningful outcomes for your business.
                      </p>
                    </div>
                    <Button className="bg-white text-[#0B3C5D] hover:bg-white/90">
                      <Link href="/contact">
                        Book a Discovery Call
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