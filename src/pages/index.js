import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShoppingBag, Sparkles, MessageSquare, Search, CreditCard, ShieldCheck } from 'lucide-react';
import styles from '../styles/AeyraLanding.module.css';

const AeyraLandingPage = () => {
  return (
    <>
      <Head>
        <title>Aeyra - AI-Powered Agentic Shopping Assistant | Shopdibz</title>
        <meta name="description" content="Experience the future of shopping with Aeyra, your intelligent agentic shopping companion. Discover products from high-quality Indian brands and boutiques on Shopdibz with personalized AI recommendations." />
        <meta name="keywords" content="AI shopping assistant, agentic shopping, personalized recommendations, intelligent shopping, Shopdibz Aeyra, Indian brands, boutique shopping" />
        <meta property="og:title" content="Aeyra - AI-Powered Agentic Shopping Assistant | Shopdibz" />
        <meta property="og:description" content="Discover the power of agentic shopping with Aeyra. Your personal AI shopping assistant that understands your needs and finds the perfect products from high-quality Indian brands and boutiques on Shopdibz." />
        <meta property="og:image" content="/assets/aeyra-og-image.jpg" />
        <meta property="og:url" content="https://aeyra.shopdibz.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aeyra.shopdibz.com" />
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
            <p style={{color:"#2a2a2a"}}>Join thousands of satisfied shoppers who have discovered the power of agentic shopping.</p>
            <Link href="https://www.shopdibz.com/aeyra/chat" className={styles.ctaBtn}>
              Start Your Journey
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