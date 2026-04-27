import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AeyraLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Navbar scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  // FAQ Toggle Logic
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Mobile Nav Toggle Logic
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Smooth scroll for anchor links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false); // Close mobile nav after clicking
  };

  // Structured Data Schema
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
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What exactly is Aeyra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aeyra is India's first agentic shopping companion — an AI-powered assistant built on Shopdibz that helps you discover products from high-quality Indian brands and boutiques through personalised, conversational guidance. She's not a search bar. She listens, remembers, and genuinely cares about finding you the right thing."
            }
          },
          {
            "@type": "Question",
            "name": "How is Aeyra different from a regular shopping app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Regular apps give you filters and sorting. Aeyra gives you a conversation. You describe what you need — or how you're feeling — and she interprets your intent, searches contextually, and returns recommendations that feel personally chosen. She also learns your preferences over time, so the experience improves the more you interact."
            }
          },
          {
            "@type": "Question",
            "name": "What kind of Indian brands can I find through Aeyra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shopdibz features a carefully curated collection of Indian independent brands — artisan crafts, traditional handlooms, natural skincare, regional boutique fashion, heritage jewellery, and more. These are real makers, often small studios and home-grown businesses, verified and listed on Shopdibz for their quality and authenticity."
            }
          },
          {
            "@type": "Question",
            "name": "Is my data safe with Aeyra?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Your shopping data and preferences are protected with enterprise-grade security and privacy measures on Shopdibz's infrastructure. Aeyra uses your context only to personalise your experience — she never sells or shares your data with third parties."
            }
          },
          {
            "@type": "Question",
            "name": "I'm an Indian brand — how do I get listed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indian brands and boutiques can register at brandhub.shopdibz.com. Once verified, your products become discoverable by Aeyra for thousands of discerning shoppers who are actively looking for exactly what you make. No massive marketing budget needed — just real craft and real soul."
            }
          },
          {
            "@type": "Question",
            "name": "Is Aeyra free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Aeyra is completely free for shoppers. Simply visit shopdibz.com/aeyra/chat to begin your conversation. No account required to start exploring."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Aeyra — Your Companion in Indian Commerce | AI Shopping Assistant by Shopdibz</title>
        <meta name="description" content="Aeyra is India's first agentic shopping companion — discovering the finest Indian brands, boutiques and artisans for you through intelligent, personalised conversation." />
        <meta name="keywords" content="Aeyra, Indian brands, agentic shopping, AI shopping assistant, Indian boutiques, Shopdibz, artisan products, handcrafted India, curated Indian brands" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aeyra.shopdibz.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Aeyra — Your Companion in Indian Commerce" />
        <meta property="og:description" content="She listens. She remembers. She discovers. Aeyra brings back the warmth of the trusted marketplace companion — now for everyone." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aeyra.shopdibz.com/" />
        <meta property="og:image" content="https://aeyra.shopdibz.com/assets/images/aeyra-header-logo.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aeyra — Your Companion in Indian Commerce" />
        <meta name="twitter:description" content="India's first agentic shopping companion. Discover real brands, real makers, real care." />

        {/* Schema Markup Integration */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

      </Head>

      {/* FLOATING CHAT BUTTON */}
      <a href="https://www.shopdibz.com/aeyra/chat" className="float-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat with Aeyra">
        <span className="float-btn-dot"></span>
        <span className="float-btn-icon"></span>
        <span className="float-label">Chat with Aeyra</span>
      </a>

      {/* NAVIGATION */}
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <a className="nav-logo" href="#top" aria-label="Aeyra Home" onClick={(e) => handleSmoothScroll(e, '#top')}>
          <img src="https://aeyra.shopdibz.com/assets/images/aeyra-header-logo.png" alt="Aeyra Logo" loading="eager" />
        </a>
        <button className="nav-mobile-toggle" onClick={toggleNav} aria-label="Toggle menu">☰</button>
        <ul className={`nav-links ${isNavOpen ? 'open' : ''}`} id="navLinks">
          <li><a href="#story" onClick={(e) => handleSmoothScroll(e, '#story')}>Our Story</a></li>
          <li><a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>Features</a></li>
          <li><a href="#how" onClick={(e) => handleSmoothScroll(e, '#how')}>How It Works</a></li>
          <li><a href="#brands" onClick={(e) => handleSmoothScroll(e, '#brands')}>For Brands</a></li>
          <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</a></li>
          <li><a href="https://www.shopdibz.com/aeyra/chat" className="nav-cta" target="_blank" rel="noopener noreferrer">Start Chatting</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-arc"></div>
        <div className="hero-arc"></div>
        <div className="hero-arc"></div>

        <span className="hero-eyebrow">Your Companion in Indian Commerce</span>

        <div className="hero-logo">
          <img src="https://aeyra.shopdibz.com/assets/images/aeyra-header-logo.png"
            alt="Aeyra — AI Shopping Companion" width="130" height="130" loading="eager" />
        </div>

        <h1 className="hero-title">
          She knew exactly<br />what you <em>needed</em>
        </h1>
        <p className="hero-sub">Before you even finished asking.</p>

        <div className="hero-actions">
          <a href="https://www.shopdibz.com/aeyra/chat" className="btn-primary" target="_blank" rel="noopener noreferrer">
            &nbsp;Meet Aeyra
          </a>
          <a href="#story" className="btn-secondary" onClick={(e) => handleSmoothScroll(e, '#story')}>
            &nbsp;Read the Story
          </a>
        </div>

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      {/* STORY */}
      <section className="story-band section" id="story">
        {/* Chapter 1 */}
        <div className="container-narrow" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
          <div className="reveal">
            <span className="chapter-label">Chapter One</span>
            <h2 className="chapter-title">Remember her?<br />The one who <em>just knew.</em></h2>
            <div className="chapter-body">
              <p>There was always someone like her in every mohalla, every bazaar lane. The woman at the sari shop who'd say, <em>"Bhabhi, don't look at that one. Your daughter's wedding? Tell me the date."</em> Then disappear into the back and return with something wrapped in tissue that made everyone cry at the reception.</p>
              <p>Or your nani's trusted hakim, who didn't need a list of symptoms. He'd look at you once, ask about your sleep, and hand you something that actually worked.</p>
              <p>These people weren't guessing. <strong>They remembered you. They understood you. They cared about the outcome, not just the transaction.</strong></p>
              <div className="pull-quote">
                <p>"She wasn't selling. She was helping. And somehow, that felt like the most natural thing in the world."</p>
              </div>
            </div>
          </div>
        </div>

        <div className="motif-divider">
          <span className="motif-line"></span>
          <span> &nbsp; &nbsp; </span>
          <span className="motif-line right"></span>
        </div>

        {/* Chapter 2 */}
        <div style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0' }}>
          <div className="container-narrow">
            <div className="reveal">
              <span className="chapter-label">Chapter Two</span>
              <h2 className="chapter-title">Then we lost her<br />in the <em>scroll.</em></h2>
              <div className="chapter-body">
                <p>Somewhere in the race to build bigger malls, faster apps, and louder feeds, we lost that person. Shopping became a solo mission. Endless tabs. Filters that filtered nothing. Recommendations that felt like they were meant for someone else entirely.</p>
                <p>The <strong>small, brilliant Indian brands</strong> that poured their hearts into every stitch, every scent, every design; they got buried. Lost in algorithms that favoured size over soul.</p>
                <p>The block printer in Sanganer whose work rivals anything on a Paris shelf. The jewellery designer in Kolkata who creates pieces that last generations. The natural skincare formulator who spent three years perfecting her craft. <strong>They never needed a big budget. They needed someone to make the right introduction.</strong></p>
              </div>
            </div>
          </div>
        </div>

        <div className="motif-divider">
          <span className="motif-line"></span>
          <span> &nbsp; &nbsp; </span>
          <span className="motif-line right"></span>
        </div>

        {/* Chapter 3 */}
        <div className="container-narrow" style={{ paddingTop: '5rem' }}>
          <div className="reveal">
            <span className="chapter-label">Chapter Three</span>
            <h2 className="chapter-title">Meet <em>Aeyra.</em></h2>
            <div className="chapter-body">
              <p>She is not a search bar. She is not a chatbot. She is not an algorithm with a friendly face.</p>
              <p>Aeyra is <strong>the revival of that feeling</strong>, of being understood before you've fully formed the thought. Of someone leaning in, listening, and saying <em>"I know exactly what you mean."</em> Warm, personal, and finally, available to everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AEYRA */}
      <section className="what-section section" id="aeyra">
        <div className="container">
          <div className="what-grid">
            {/* Chat demo */}
            <div className="reveal">
              <div className="chat-bubble-demo updated-demo">
                <div className="chat-demo-inner">

                  {/* User Message */}
                  <div className="demo-msg-row flex-end">
                    <div className="demo-msg-user">
                      Show me some sarees i can wear at office. It should be perfect for summer weather?
                    </div>
                  </div>

                  {/* Bot Message */}
                  <div className="demo-msg-row">
                    <div className="demo-msg-bot">
                      <p className="demo-bot-text">
                        I found these gorgeous handloom cotton sarees that feel perfect for office and summer weather 🌿☀️ The <strong style={{ color: 'var(--peacock-1)' }}>Saaj Hara pastel green saree</strong> and <strong style={{ color: 'var(--peacock-1)' }}>Meethi Gulab cotton candy pink saree</strong> are soft, fresh, and super pretty, while the <strong style={{ color: 'var(--peacock-1)' }}>Nayra blue saree</strong> is a cool, easy choice for a polished everyday look. Pair them with simple flats and a neat blouse for a comfy, office vibe.
                      </p>

                      {/* Product Carousel */}
                      <div className="demo-products">
                        {/* Product Card 1 */}
                        <div className="demo-product-card">
                          <div className="demo-product-img img-1">
                            <div className="demo-product-icons">
                              <span className="demo-icon">🔗</span>
                              <span className="demo-icon">♡</span>
                            </div>
                          </div>
                          <div className="demo-product-info">
                            <h4>Saaj Hara | Pastel Green Handloom Cotton Saree..</h4>
                            <p className="demo-brand">Aakar</p>
                            <p className="demo-price">₹1,299</p>
                            <div className="demo-skeleton-lines">
                              <div className="demo-line"></div>
                              <div className="demo-line short"></div>
                            </div>
                            <div className="demo-card-btns">
                              <div className="demo-btn outline"></div>
                              <div className="demo-btn solid"></div>
                            </div>
                          </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="demo-product-card">
                          <div className="demo-product-img img-2">
                            <div className="demo-product-icons">
                              <span className="demo-icon">🔗</span>
                              <span className="demo-icon">♡</span>
                            </div>
                          </div>
                          <div className="demo-product-info">
                            <h4>Meethi Gulab | Cotton Candy Pink Handloom</h4>
                            <p className="demo-brand">Aakar</p>
                            <p className="demo-price">₹3,999</p>
                            <div className="demo-skeleton-lines">
                              <div className="demo-line"></div>
                              <div className="demo-line short"></div>
                            </div>
                            <div className="demo-card-btns">
                              <div className="demo-btn outline"></div>
                              <div className="demo-btn solid"></div>
                            </div>
                          </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="demo-product-card">
                          <div className="demo-product-img img-3">
                            <div className="demo-product-icons">
                              <span className="demo-icon">🔗</span>
                              <span className="demo-icon">♡</span>
                            </div>
                          </div>
                          <div className="demo-product-info">
                            <h4>Nayra | Blue Handloom Cotton Saree</h4>
                            <p className="demo-brand">RANGREZZWEARS</p>
                            <p className="demo-price">₹1,750</p>
                            <div className="demo-skeleton-lines">
                              <div className="demo-line"></div>
                              <div className="demo-line short"></div>
                            </div>
                            <div className="demo-card-btns">
                              <div className="demo-btn outline"></div>
                              <div className="demo-btn solid"></div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Input Overlap */}
                <div className="demo-input-container">
                  <div className="demo-input-box">
                    <span className="demo-placeholder">Type your message...</span>
                    <div className="demo-input-right">
                      <span className="demo-char-count">0/200</span>
                      <button className="demo-send-btn">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal reveal-delay-2">
              <span className="chapter-label">The Experience</span>
              <h2 className="chapter-title">A companion<br />who <em>truly cares.</em></h2>
              <div className="chapter-body">
                <p>Tell Aeyra what you need or what you feel. She listens to the intent behind the words, not just the keywords. Then she searches Shopdibz's curated collection of Indian brands and boutiques to surface exactly what you were looking for sometimes even before you knew it.</p>
                <p><strong>No scrolling alone. No algorithmic guesswork.</strong> Just warm, guided discovery the way shopping was always meant to feel.</p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://www.shopdibz.com/aeyra/chat" className="btn-primary" target="_blank" rel="noopener noreferrer">Start Your Conversation </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section section" id="features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow">What Aeyra Does</span>
            <h2 className="section-title">Four things she does<br />that no app <em>ever has.</em></h2>
          </div>
          <div className="features-grid">

            {/* Feature 1: She Listens (Audio Wave Icon) */}
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M17 7v10" />
                  <path d="M22 10v4" />
                  <path d="M7 7v10" />
                  <path d="M2 10v4" />
                </svg>
              </div>
              <h3 className="feature-title">She Listens</h3>
              <p className="feature-desc">Tell her what you're looking for or just how you're feeling. Aeyra understands the difference between the two and responds accordingly.</p>
            </div>

            {/* Feature 2: She Remembers (History/Time Icon) */}
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M12 7v5l4 2" />
                </svg>
              </div>
              <h3 className="feature-title">She Remembers</h3>
              <p className="feature-desc">Your taste, your occasions, the things that matter to you. No repeated explanations. She knows you, and she builds on that knowledge each time.</p>
            </div>

            {/* Feature 3: She Discovers (Compass Icon) */}
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="feature-title">She Discovers</h3>
              <p className="feature-desc">Real Indian brands. Real makers. Hidden gems you'd never find scrolling alone. She reaches into Shopdibz's verified collection to find the right match.</p>
            </div>

            {/* Feature 4: She Cares (Heart Icon) */}
            <div className="feature-card reveal reveal-delay-3">
              <div className="feature-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="feature-title">She Cares</h3>
              <p className="feature-desc">Not about selling you something. About sending you away with exactly the right thing, the kind of satisfaction that lasts longer than the packaging.</p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      {/* HOW IT WORKS */}
      <section className="how-section section" id="how">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-title">From first word<br />to <em>perfect find.</em></h2>
          </div>
          <div className="steps-grid">

            {/* Step 1: Tell Aeyra (Message Icon) */}
            <div className="step reveal">
              <div className="step-num">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="step-title">Tell Aeyra</h3>
              <p className="step-desc">Describe what you need in plain language. An occasion, a mood, a person you love. No filters, no forms.</p>
            </div>

            {/* Step 2: She Searches (Search Icon) */}
            <div className="step reveal reveal-delay-1">
              <div className="step-num">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="step-title">She Searches</h3>
              <p className="step-desc">Aeyra scans Shopdibz's curated collection of Indian brands and boutiques, understanding context and intent — not just keywords.</p>
            </div>

            {/* Step 3: Explore Together (Sparkles/Magic Icon) */}
            <div className="step reveal reveal-delay-2">
              <div className="step-num">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
              </div>
              <h3 className="step-title">Explore Together</h3>
              <p className="step-desc">Ask questions, compare options, learn the story behind each brand. She guides you with warmth, not upsells.</p>
            </div>

            {/* Step 4: Complete & Cherish (Gift Box Icon) */}
            <div className="step reveal reveal-delay-3">
              <div className="step-num">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                  <path d="M12 8v13"></path>
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5 A4.8 8 0 0 1 12 8 a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                </svg>
              </div>
              <h3 className="step-title">Complete & Cherish</h3>
              <p className="step-desc">Seamless checkout. And the quiet satisfaction of knowing you found something real, something made with care, just for you.</p>
            </div>

          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal">
            <a href="https://www.shopdibz.com/aeyra/chat" className="btn-primary" target="_blank" rel="noopener noreferrer"> &nbsp; Begin Shopping with Aeyra</a>
          </div>
        </div>
      </section>

      {/* FOR BRANDS */}
      <section className="brands-section section" id="brands">
        <div className="container">
          <div className="brands-inner">
            <div className="reveal">
              <span className="chapter-label">For Indian Brands & Boutiques</span>
              <h2 className="chapter-title">Every brand has a customer<br />who was <em>always meant</em> to find them.</h2>
              <div className="chapter-body">
                <p>Behind Aeyra is a deeper love story, the one between India's independent creators and the customers they were always meant to meet. <strong>Aeyra makes sure they do.</strong></p>
              </div>
              <ul className="brand-benefits">
                <li><span className="benefit-icon"></span> Get discovered by shoppers who actually want what you make</li>
                <li><span className="benefit-icon"></span> Your story told warmly by an AI who understands craftsmanship</li>
                <li><span className="benefit-icon"></span> Reach verified, intent-driven customers on Shopdibz</li>
                <li><span className="benefit-icon"></span> No need for a big marketing budget; just real work and real soul</li>
              </ul>
              <div style={{ marginTop: '2rem' }}>
                <a href="https://www.brandhub.shopdibz.com" className="btn-primary" target="_blank" rel="noopener noreferrer">Register Your Brand </a>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="brand-stats">
                <div className="stat-card">
                  <span className="stat-num"></span>
                  <span className="stat-label">Artisan Brands</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num"></span>
                  <span className="stat-label">Regional Boutiques</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num"></span>
                  <span className="stat-label">Personal Touch</span>
                </div>
                <div className="stat-card">
                  <span className="stat-num"></span>
                  <span className="stat-label">Curated Quality</span>
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', padding: '2rem', background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: '4px' }}>
                <div className="pull-quote" style={{ margin: 0 }}>
                  <p>"The woman who spent three years perfecting a natural skincare formulation in her kitchen; she deserves to be found. Aeyra makes that happen."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-eyebrow">Frequently Asked</span>
            <h2 className="section-title">Questions she'd answer<br /><em>before you finished asking.</em></h2>
          </div>
          <div className="faq-list">
            <div className={`faq-item reveal ${openFaqIndex === 0 ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(0)} aria-expanded={openFaqIndex === 0}>
                What exactly is Aeyra?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" role="region" style={{ maxHeight: openFaqIndex === 0 ? '500px' : '0' }}>
                <div className="faq-answer-inner">Aeyra is India's first agentic shopping companion, an AI-powered assistant built on Shopdibz that helps you discover products from high-quality Indian brands and boutiques through personalised, conversational guidance. She's not a search bar. She listens, remembers, and genuinely cares about finding you the right thing.</div>
              </div>
            </div>
            <div className={`faq-item reveal reveal-delay-1 ${openFaqIndex === 1 ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(1)} aria-expanded={openFaqIndex === 1}>
                How is Aeyra different from a regular shopping app?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" role="region" style={{ maxHeight: openFaqIndex === 1 ? '500px' : '0' }}>
                <div className="faq-answer-inner">Regular apps give you filters and sorting. Aeyra gives you a conversation. You describe what you need or how you're feeling and she interprets your intent, searches contextually, and returns recommendations that feel personally chosen. She also learns your preferences over time, so the experience improves the more you interact.</div>
              </div>
            </div>
            <div className={`faq-item reveal reveal-delay-2 ${openFaqIndex === 2 ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(2)} aria-expanded={openFaqIndex === 2}>
                What kind of Indian brands can I find through Aeyra?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" role="region" style={{ maxHeight: openFaqIndex === 2 ? '500px' : '0' }}>
                <div className="faq-answer-inner">Shopdibz features a carefully curated collection of Indian independent brands, artisan crafts, traditional handlooms, natural skincare, regional boutique fashion, heritage jewellery, and more. These are real makers, often small studios and home-grown businesses, verified and listed on Shopdibz for their quality and authenticity.</div>
              </div>
            </div>
            <div className={`faq-item reveal reveal-delay-1 ${openFaqIndex === 3 ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(3)} aria-expanded={openFaqIndex === 3}>
                Is my data safe with Aeyra?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" role="region" style={{ maxHeight: openFaqIndex === 3 ? '500px' : '0' }}>
                <div className="faq-answer-inner">Yes. Your shopping data and preferences are protected with enterprise-grade security and privacy measures on Shopdibz's infrastructure. Aeyra uses your context only to personalise your experience. She never sells or shares your data with third parties.</div>
              </div>
            </div>
            <div className={`faq-item reveal reveal-delay-2 ${openFaqIndex === 4 ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(4)} aria-expanded={openFaqIndex === 4}>
                I'm an Indian brand, how do I get listed?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" role="region" style={{ maxHeight: openFaqIndex === 4 ? '500px' : '0' }}>
                <div className="faq-answer-inner">Indian brands and boutiques can register at <a href="https://www.brandhub.shopdibz.com" style={{ color: 'var(--gold)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">brandhub.shopdibz.com</a>. Once verified, your products become discoverable by Aeyra for thousands of discerning shoppers who are actively looking for exactly what you make. No massive marketing budget needed, just real craft and real soul.</div>
              </div>
            </div>
            <div className={`faq-item reveal ${openFaqIndex === 5 ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(5)} aria-expanded={openFaqIndex === 5}>
                Is Aeyra free to use?
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer" role="region" style={{ maxHeight: openFaqIndex === 5 ? '500px' : '0' }}>
                <div className="faq-answer-inner">Yes, Aeyra is completely free for shoppers. Simply visit <a href="https://www.shopdibz.com/aeyra/chat" style={{ color: 'var(--gold)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">shopdibz.com/aeyra/chat</a> to begin your conversation. No account required to start exploring.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="cta-section section">
        <div className="ornament" style={{ marginBottom: '1.5rem', opacity: 0.5, fontSize: '1rem', letterSpacing: '1em' }}>  </div>
        <div className="cta-brand-name reveal">Aeyra</div>
        <p className="cta-tagline reveal reveal-delay-1">Your companion in Indian commerce</p>
        <p className="cta-quote reveal reveal-delay-2">Because shopping was never meant to be something you do alone.</p>
        <div className="cta-actions reveal reveal-delay-3">
          <a href="https://www.shopdibz.com/aeyra/chat" className="btn-primary" target="_blank" rel="noopener noreferrer"> &nbsp; Meet Aeyra</a>
          <a href="https://www.brandhub.shopdibz.com" className="btn-secondary" target="_blank" rel="noopener noreferrer"> &nbsp; List Your Brand</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="https://aeyra.shopdibz.com/assets/images/aeyra-header-logo.png" alt="Aeyra" loading="lazy" />
            <p>Aeyra is India's first agentic shopping companion built on Shopdibz to connect discerning shoppers with the finest Indian brands and boutiques.</p>
          </div>
          <div>
            <p className="footer-col-title">Explore</p>
            <ul className="footer-links">
              <li><a href="https://www.shopdibz.com/aeyra/chat" target="_blank" rel="noopener noreferrer">Chat with Aeyra</a></li>
              <li><a href="https://www.brandhub.shopdibz.com" target="_blank" rel="noopener noreferrer">Brand Hub</a></li>
              <li><a href="#features" onClick={(e) => handleSmoothScroll(e, '#features')}>Features</a></li>
              <li><a href="#how" onClick={(e) => handleSmoothScroll(e, '#how')}>How It Works</a></li>
              <li><a href="#faq" onClick={(e) => handleSmoothScroll(e, '#faq')}>FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="https://www.shopdibz.com/about-shopdibz" target="_blank" rel="noopener noreferrer">About</a></li>
              <li><a href="https://www.shopdibz.com/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
              <li><a href="https://www.shopdibz.com/privacypolicy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="https://www.shopdibz.com/termsandconditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} <a href="https://www.shopdibz.com" target="_blank" rel="noopener noreferrer">Shopdibz</a>. All rights reserved. Aeyra is powered by Shopdibz.</p>
          <p className="footer-copy" style={{ color: 'var(--gold-dk)', fontSize: '0.7rem', letterSpacing: '0.2em' }}> &nbsp; MADE WITH LOVE IN INDIA</p>
        </div>
      </footer>
    </>
  );
}
