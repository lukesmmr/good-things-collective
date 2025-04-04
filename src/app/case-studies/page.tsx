"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { config } from '@/lib/config';
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import TestimonialCard from "@/components/case-studies/TestimonialCard";
import FeaturedCaseStudy from "@/components/case-studies/FeaturedCaseStudy";

export default function Page() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-collective-beige/30">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">Our Work</h1>
              <p className="text-lg opacity-75 max-w-xl">
                Explore our case studies showcasing our expertise in secure and ethical digital solutions.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline">
                <Link href="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section pt-16">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <CaseStudyCard 
              title="StoryBird.io: Product Storytelling Platform"
              category="Supply Chain & Consumer Engagement"
              description="A platform that enables brands to connect consumers with their product stories through transparent supply chain narratives. Consumers can access detailed product information via QR codes on packaging, store displays, or menus, creating an engaging and transparent shopping experience."
              image="/uploads/SCR-20250404-koot.png"
              technologies={["React", "Node.js", "QR Code API", "AWS"]}
              projectUrl="https://storybird.io/"
            />
            <CaseStudyCard 
              title="NuMundo.org: Global Regenerative Living Network"
              category="Sustainability & Community"
              description="A platform connecting people with regenerative living projects worldwide, facilitating knowledge sharing and community building for sustainable living."
              image="/uploads/SCR-20250404-kprt.png"
              technologies={["React", "Node.js", "PostgreSQL", "Mapbox", "Stripe"]}
              projectUrl="https://numundo.org/"
            />
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <FeaturedCaseStudy
        title="Producers Market: Global B2B Marketplace"
        description="A B2B platform connecting buyers directly with a global network of farmers, makers, and producers, enabling transparent and sustainable supply chains."
        challenge="Building a scalable platform to connect buyers with producers across 100+ countries while ensuring supply chain transparency and sustainability tracking."
        solution="Developed a B2B marketplace connecting buyers directly to source, featuring a 4M+ farmer ecosystem with sustainability tracking and supply chain traceability."
        results="Established a global network of farmers and producers across 100+ countries, enabling direct B2B connections with full sustainability and supply chain visibility."
        image="/uploads/SCR-20250404-kqsg.png"
        projectUrl="https://producersmarket.com/"
      />

      {/* More Case Studies Grid */}
      <section className="section">
        <div className="section-inner">
          <h2 className="text-3xl font-bold mb-12">More Case Studies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <CaseStudyCard 
              title="Enterprise Reporting Platform with Metabase"
              category="Data Analytics & Business Intelligence"
              description="A scalable enterprise reporting solution that simplifies complex data structures through denormalization, enabling efficient business intelligence across multiple data sources."
              image="/uploads/metabase-reports.png"
              technologies={["Metabase", "AWS Athena", "AWS DMS", "AWS Glue", "Serverless Architecture"]}
            />
            <CaseStudyCard 
              title="Grafana Loki Stack: Open-Source Logging Solution"
              category="DevOps & Monitoring"
              description="An open-source logging solution built on Grafana Loki, providing real-time log aggregation, analysis, and visualization for AWS servers."
              image="/uploads/SCR-20250404-kttc.png"
              technologies={["Grafana", "Loki", "Prometheus", "Node Exporter", "AWS"]}
              projectUrl="https://github.com/lukesmmr/grafana-loki-stack"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      {config.testimonialsEnabled && (
        <section className="section bg-collective-beige/50">
          <div className="section-inner">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-lg opacity-75 max-w-2xl mx-auto">
                What our clients say about working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard 
                quote="The team at Good Things Collective delivered a robust and scalable solution that exceeded our expectations. Their attention to security and ethical considerations was particularly impressive."
                author="Sarah Johnson"
                role="CTO, TechCorp"
                image="/uploads/testimonial-1.jpg"
              />
              <TestimonialCard 
                quote="Working with Good Things Collective was a game-changer for our business. Their expertise in sustainable technology solutions helped us achieve our environmental goals while improving our bottom line."
                author="Michael Chen"
                role="CEO, GreenTech Solutions"
                image="/uploads/testimonial-2.jpg"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section">
        <div className="section-inner">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-75 max-w-2xl mx-auto mb-8">
              Let's work together to create something amazing.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 