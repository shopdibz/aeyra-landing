import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShoppingBag, Sparkles, MessageSquare, Search, CreditCard, ShieldCheck } from 'lucide-react';
import styles from '../styles/AeyraLanding.module.css';

const AeyraLandingPage = () => {

  const faqContent = [
    {
      question: "What is Aeyra?",
      answer: "Aeyra is an AI-powered agentic shopping assistant that helps you discover products from high-quality Indian brands and boutiques on Shopdibz with personalized recommendations."
    },
    {
      question: "How does agentic shopping work?",
      answer: "Tell Aeyra what you need, and it searches our curated collection to find perfect matches. You can explore, compare, and complete purchases with AI guidance throughout."
    },
    {
      question: "What kind of brands can I find on Shopdibz?",
      answer: "Shopdibz features a carefully curated selection of domestic brands, traditional artisanal products, regional handlooms, and boutique apparel."
    },
    {
      question: "Is my shopping data secure with Aeyra?",
      answer: "Yes, your shopping data is protected with enterprise-grade security and privacy measures to ensure your information remains safe and private."
    }
  ];


  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.shopdibz.com/#organization",
        "name": "Shopdibz",
        "url": "https://www.shopdibz.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://aeyra.shopdibz.com/assets/images/shopdibz-circle.png",
          "width": 280,
          "height": 80,
          "description": "Shopdibz Logo"
        },
        "description": "Indian e-commerce platform featuring high-quality brands and boutiques",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "url": "https://www.shopdibz.com/contact"
        },
        "sameAs": [
          "https://www.facebook.com/shopdibz",
          "https://www.instagram.com/shopdibzofficial",
          "https://twitter.com/shopdibz"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://aeyra.shopdibz.com/#software-application",
        "name": "Aeyra",
        "description": "AI-powered agentic shopping assistant that provides personalized product recommendations and intelligent shopping guidance",
        "applicationCategory": "ShoppingApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "image": "/assets/images/aeyra-agentic-shopping.jpg",
        "screenshot": {
          "@type": "ImageObject",
          "url": "/assets/images/aeyra-agentic-shopping.jpg",
          "width": 1200,
          "height": 630
        },
        "operatingSystem": "Web, iOS, Android",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "2500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "author": {
          "@type": "Organization",
          "@id": "https://www.shopdibz.com/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://aeyra.shopdibz.com/#local-business",
        "name": "Aeyra Shopping Platform",
        "description": "Agentic AI shopping assistant specializing in personalized product discovery from Indian brands and boutiques",
        "url": "https://aeyra.shopdibz.com",
        "image": "/assets/images/aeyra-agentic-shopping.jpg",
        "priceRange": "INR",
        "sameAs": "https://www.shopdibz.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Customer Support",
          "url": "https://www.shopdibz.com/contact",
          "availableLanguage": ["en", "hi"]
        },
        "areaServed": "IN"
      },
      {
        "@type": "WebPage",
        "@id": "https://aeyra.shopdibz.com/#webpage",
        "name": "Aeyra - AI-Powered Agentic Shopping Assistant",
        "url": "https://aeyra.shopdibz.com",
        "description": "Revolutionize your shopping with Aeyra, an AI-powered agentic shopping companion offering personalized product recommendations from high-quality Indian brands and boutiques.",
        "image": {
          "@type": "ImageObject",
          "url": "/assets/images/aeyra-agentic-shopping.jpg",
          "width": 1200,
          "height": 630,
          "description": "Aeyra AI Shopping Assistant"
        },
        "isPartOf": {
          "@id": "https://www.shopdibz.com/#organization"
        },
        "datePublished": "2026-03-29",
        "dateModified": new Date().toISOString().split('T')[0],
        "inLanguage": "en-IN",
        "primaryImageOfPage": "/assets/images/aeyra-agentic-shopping.jpg"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqContent.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Aeyra - AI-Powered Agentic Shopping Assistant | Shopdibz</title>
        <meta name="description" content="Experience the future of shopping with Aeyra, your intelligent agentic shopping companion. Discover products from high-quality Indian brands and boutiques on Shopdibz with personalized AI recommendations." />
        <meta name="keywords" content="AI shopping assistant, agentic shopping, personalized recommendations, intelligent shopping, Shopdibz Aeyra, Indian brands, boutique shopping, AI product discovery, smart shopping platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1ab582" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Aeyra Shopping" />

        {/* SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Shopdibz" />
        <meta name="creator" content="Shopdibz" />
        <meta name="publisher" content="Shopdibz" />
        <meta name="lang" content="en-IN" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aeyra - AI-Powered Agentic Shopping Assistant | Shopdibz" />
        <meta property="og:description" content="Discover the power of agentic shopping with Aeyra. Your personal AI shopping assistant that understands your needs and finds the perfect products from high-quality Indian brands and boutiques on Shopdibz." />
        <meta property="og:url" content="https://aeyra.shopdibz.com" />
        <meta property="og:image" content="https://aeyra.shopdibz.com/assets/images/aeyra-agentic-shopping.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Aeyra AI Shopping Assistant - Agentic Shopping Platform" />
        <meta property="og:site_name" content="Aeyra Shopping Assistant" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aeyra - AI-Powered Agentic Shopping Assistant | Shopdibz" />
        <meta name="twitter:description" content="Revolutionize your shopping experience with Aeyra. AI-powered agentic shopping companion with personalized recommendations from Indian brands and boutiques." />
        <meta name="twitter:image" content="https://aeyra.shopdibz.com/assets/images/aeyra-agentic-shopping.jpg" />
        <meta name="twitter:image:alt" content="Aeyra AI Shopping Assistant" />
        <meta name="twitter:creator" content="@shopdibz" />
        <meta name="twitter:site" content="@shopdibz" />

        {/* LinkedIn Meta Tags */}
        <meta property="article:publisher" content="https://www.linkedin.com/company/shopdibz" />

        {/* Additional SEO Meta Tags */}
        <meta property="article:author" content="Shopdibz" />
        <meta name="image" content="https://aeyra.shopdibz.com/assets/images/aeyra-agentic-shopping.jpg" />
        <meta name="image:width" content="1200" />
        <meta name="image:height" content="630" />

        {/* Canonical and Alternative Links */}
        <link rel="canonical" href="https://aeyra.shopdibz.com" />
        <link rel="alternate" hrefLang="en-IN" href="https://aeyra.shopdibz.com" />

        {/* App Icons */}
        <link rel="icon" href="/assets/images/apple-touch-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/images/icon-512x512.png" />

        {/* Preload Critical Images */}
        <link rel="preload" as="image" href="/assets/images/aeyra-header-logo.png" />
        <link rel="preload" as="image" href="/assets/images/aeyra-agentic-shopping.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional Meta for AI/Search Engine Crawlers */}
        <meta name="ai-search-ready" content="true" />
        <meta property="schema:product-category" content="Shopping, E-commerce, AI Services" />
      </Head>

      <div className={styles.landingContainer}>
        {/* Header Navigation */}
        <header className={styles.landingHeader}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <img src="/assets/images/aeyra-header-logo.png" alt="Aeyra Logo" className={styles.aeyraLogo} />
            </div>
            <div className={styles.headerRight}>
              <span className={styles.shopdibzText}>Powered by Shopdibz</span>
              <nav className={styles.nav}>
                <Link href="https://www.shopdibz.com/aeyra/chat" className={styles.navChatBtn}>
                  Try Aeyra Chat
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Meet Aeyra, Your <span className={styles.highlight}>Agentic Shopping</span> Companion
            </h1>
            <p className={styles.heroSubtitle}>
              Revolutionize your shopping experience with AI-powered assistance. Aeyra understands your needs,
              finds the perfect products from high-quality Indian brands and boutiques listed on Shopdibz,
              and guides you through seamless purchases.
            </p>
            <div className={styles.heroActions}>
              <Link href="https://www.shopdibz.com/aeyra/chat" className={styles.primaryBtn}>
                Start Chatting with Aeyra
              </Link>
              <button className={styles.secondaryBtn} onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.aiAssistant}>
              <div className={styles.aiAvatar}>
                <img src="/assets/images/apple-touch-icon.png" alt="Aeyra AI Assistant" className={styles.avatarLogo} />
              </div>
              <div className={styles.chatBubble}>
                "Hi! I'm Aeyra. What are you looking for today?"
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Why Choose Agentic Shopping?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><ShoppingBag size={36} color="#1ab582" strokeWidth={1.5} /></div>
                <h3>Curated Indian Brands</h3>
                <p>Discover products from high-quality Indian brands and boutique stores carefully selected and listed on Shopdibz.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Sparkles size={36} color="#5b4b9d" strokeWidth={1.5} /></div>
                <h3>Intelligent Recommendations</h3>
                <p>Aeyra analyzes your preferences and browsing history to suggest products you'll love.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><MessageSquare size={36} color="#1ab582" strokeWidth={1.5} /></div>
                <h3>Instant Answers</h3>
                <p>Get immediate responses to your shopping questions, from product details to sizing guides.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><Search size={36} color="#5b4b9d" strokeWidth={1.5} /></div>
                <h3>Personalized Search</h3>
                <p>Agentic search understands context and intent, finding exactly what you need.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><CreditCard size={36} color="#1ab582" strokeWidth={1.5} /></div>
                <h3>Seamless Purchases</h3>
                <p>Complete your shopping journey with guided checkout and order tracking.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}><ShieldCheck size={36} color="#5b4b9d" strokeWidth={1.5} /></div>
                <h3>Secure & Private</h3>
                <p>Your shopping data is protected with enterprise-grade security and privacy measures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorksSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>How Agentic Shopping Works</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Tell Aeyra What You Need</h3>
                <p>Describe your requirements in natural language. Aeyra understands context and intent.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Get Recommendations</h3>
                <p>Aeyra searches our curated collection of high-quality Indian brands and boutiques on Shopdibz.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Explore & Compare</h3>
                <p>Ask questions, compare options, and get detailed product information instantly.</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Complete Purchase</h3>
                <p>Aeyra guides you through checkout and ensures a smooth shopping experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            <h2>Ready to Experience the Future of Shopping?</h2>
            <p style={{color:"#ffffff"}}>Join thousands of satisfied shoppers who have discovered the power of agentic shopping.</p>
            <Link href="https://www.shopdibz.com/aeyra/chat" className={styles.ctaBtn}>
              Start Your Journey
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {faqContent.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Invitation Section */}
        <section className={styles.brandInvitationSection}>
          <div className={styles.brandInvitationContainer}>
            <h2>Are You an Indian Brand or Boutique?</h2>
            <p>Join Shopdibz and Aeyra - the exclusive platform for Indian brands and boutiques. Register your brand, get verified as an official Indian brand, and showcase your products to discerning customers.</p>
            <Link href="https://www.brandhub.shopdibz.com" className={styles.brandInvitationBtn} target="_blank" rel="noopener noreferrer">
              Register Your Brand
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Link href="https://www.shopdibz.com">Shopdibz</Link>
            </div>
            <div className={styles.footerLinks}>
              <Link href="https://www.shopdibz.com/about-shopdibz" target='_blank'>About</Link>
              <Link href="https://www.shopdibz.com/contact" target='_blank'>Contact</Link>
              <Link href="https://www.shopdibz.com/privacypolicy" target='_blank'>Privacy</Link>
              <Link href="https://www.shopdibz.com/termsandconditions" target='_blank'>Terms</Link>
            </div>
            <div className={styles.footerCopyright}>
              © {new Date().getFullYear()} Shopdibz. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Floating Chat Button */}
        <div className={styles.floatingChatBtn}>
          <Link href="https://www.shopdibz.com/aeyra/chat" target='_blank' className={styles.floatingBtn}>
            <MessageSquare size={20} color="#ffffff" /> Chat with Aeyra
          </Link>
        </div>
      </div>
    </>
  );
};

export default AeyraLandingPage;