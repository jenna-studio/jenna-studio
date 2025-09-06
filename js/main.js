/**
 * Jenna Studio - Main JavaScript File
 * Interactive portfolio website with custom cursor, particles, and smooth animations
 *
 * Features:
 * - Custom animated cursor
 * - Particle background system
 * - Smooth navigation and scrolling
 * - Intersection Observer animations
 * - Theme toggle functionality
 * - Performance optimizations
 * - Accessibility support
 */

// ===== GLOBAL VARIABLES =====
let mouseX = 0,
    mouseY = 0;
let cursorX = 0,
    cursorY = 0;
let isTouch = false;
let effectsEnabled = true;
let animationFrameId = null;

// ===== DOM ELEMENTS =====
const cursor = document.getElementById("cursor");
const particles = document.getElementById("particles");
const themeToggle = document.getElementById("themeToggle");
const loadingOverlay = document.getElementById("loadingOverlay");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

// ===== UTILITY FUNCTIONS =====

/**
 * Debounce function to limit the rate of function execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Execute immediately
 * @returns {Function} Debounced function
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

/**
 * Throttle function to limit function execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Check if device supports touch
 * @returns {boolean} True if touch device
 */
function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if reduced motion preferred
 */
function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ===== CURSOR FUNCTIONALITY =====
class CustomCursor {
    constructor() {
        this.element = cursor;
        this.isVisible = false;
        this.isHovering = false;
        this.isLoading = false;
        this.sparkleTimer = 0;
        this.sparkleDelay = 50; // milliseconds between sparkles
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.isMoving = false;

        this.init();
    }

    init() {
        if (isTouchDevice() || prefersReducedMotion()) {
            this.hide();
            return;
        }

        this.bindEvents();
        this.show();
        this.animate();
    }

    bindEvents() {
        // Mouse move event
        document.addEventListener("mousemove", (e) => {
            this.lastMouseX = mouseX;
            this.lastMouseY = mouseY;
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Detect if mouse is actually moving
            const moveThreshold = 2; // minimum pixels to consider movement
            this.isMoving =
                Math.abs(mouseX - this.lastMouseX) > moveThreshold ||
                Math.abs(mouseY - this.lastMouseY) > moveThreshold;
        });

        // Mouse enter/leave events
        document.addEventListener("mouseenter", () => this.show());
        document.addEventListener("mouseleave", () => this.hide());

        // Hover effects for interactive elements
        const hoverElements = document.querySelectorAll(
            "a, button, .card, .nav-link, .btn, input, textarea, select"
        );
        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", () => this.setHover(true));
            el.addEventListener("mouseleave", () => this.setHover(false));
        });

        // Loading effects for form submissions and links
        const formElements = document.querySelectorAll("form");
        formElements.forEach((form) => {
            form.addEventListener("submit", () => this.setLoading(true));
        });

        const linkElements = document.querySelectorAll("a[href^='http'], a[href$='.html']");
        linkElements.forEach((link) => {
            link.addEventListener("click", () => {
                this.setLoading(true);
                setTimeout(() => this.setLoading(false), 2000); // Reset after 2 seconds
            });
        });
    }

    animate() {
        if (!this.isVisible) return;

        const speed = 1; // Instant response
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;

        // Use translate3d for better performance
        const transform = this.isLoading
            ? `translate3d(${cursorX}px, ${cursorY}px, 0) ${
                  this.element.style.transform.includes("rotate") ? "" : ""
              }`
            : `translate3d(${cursorX}px, ${cursorY}px, 0)`;

        this.element.style.transform = transform;

        // Create sparkle trail effect
        this.createSparkleTrail();

        animationFrameId = requestAnimationFrame(() => this.animate());
    }

    createSparkleTrail() {
        // Only create sparkles when the cursor is moving
        if (!this.isMoving) return;

        // Create sparkles at regular intervals
        this.sparkleTimer += 14;
        if (this.sparkleTimer >= this.sparkleDelay) {
            this.sparkleTimer = 0;
            this.createSparkle();
        }
    }

    createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.className = "cursor-sparkle";

        // Add rainbow gradient colors
        const colors = ["pink", "yellow", "green", "skyblue", "purple"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.classList.add(`sparkle-${randomColor}`);

        // Position sparkle at the end/tail of the cursor (bottom part)
        // Cursor is 32x50px, so offset to the bottom area
        const cursorBottomOffsetX = (Math.random() - 0.5) * 15; // smaller random spread
        const cursorBottomOffsetY = 35 + Math.random() * 10; // position at cursor bottom + random

        sparkle.style.left = cursorX + cursorBottomOffsetX + "px";
        sparkle.style.top = cursorY + cursorBottomOffsetY + "px";

        document.body.appendChild(sparkle);

        // Remove sparkle after animation completes
        setTimeout(() => {
            if (document.body.contains(sparkle)) {
                document.body.removeChild(sparkle);
            }
        }, 800); // matches animation duration
    }

    setHover(isHovering) {
        if (this.isLoading) return; // Don't change state while loading

        this.isHovering = isHovering;
        this.element.classList.toggle("hover", isHovering);
    }

    setLoading(isLoading) {
        this.isLoading = isLoading;
        this.element.classList.toggle("loading", isLoading);

        // Remove hover state while loading
        if (isLoading) {
            this.element.classList.remove("hover");
        }
    }

    show() {
        this.isVisible = true;
        this.element.style.opacity = "1";
        this.animate();
    }

    hide() {
        this.isVisible = false;
        this.element.style.opacity = "0";
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        // Clean up any remaining sparkles
        this.cleanupSparkles();
    }

    cleanupSparkles() {
        const sparkles = document.querySelectorAll(".cursor-sparkle");
        sparkles.forEach((sparkle) => {
            if (document.body.contains(sparkle)) {
                document.body.removeChild(sparkle);
            }
        });
    }
}

// ===== PARTICLE SYSTEM =====
class ParticleSystem {
    constructor() {
        this.container = particles;
        this.particleCount = this.getParticleCount();
        this.particles = [];

        this.init();
    }

    getParticleCount() {
        const width = window.innerWidth;
        if (width < 768) return 10;
        if (width < 1024) return 16;
        return 22;
    }

    init() {
        this.bindEvents();
        this.startRandomSpawning();
    }

    createParticles() {
        this.container.innerHTML = "";
        this.particles = [];

        for (let i = 0; i < this.particleCount; i++) {
            const particle = this.createParticle();
            this.particles.push(particle);
            this.container.appendChild(particle);
        }
    }

    createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Random horizontal positioning, start above screen
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = "-50px"; // Start above the viewport

        // Random animation delay and duration
        const delay = Math.random() * 6;
        const duration = 4 + Math.random() * 4;
        particle.style.animationDelay = delay + "s";
        particle.style.animationDuration = duration + "s";

        // Random size variation - bigger particles
        const size = Math.random() * 8 + 16; // 16-24px range
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        return particle;
    }

    bindEvents() {
        // Resize handler
        window.addEventListener(
            "resize",
            debounce(() => {
                const newCount = this.getParticleCount();
                if (newCount !== this.particleCount) {
                    this.particleCount = newCount;
                    this.createParticles();
                }
            }, 250)
        );
    }

    toggleEnhanced(enabled) {
        this.container.classList.toggle("enhanced", enabled);
    }

    startRandomSpawning() {
        // Spawn random hearts at a moderate frequency
        const spawnRandomHeart = () => {
            this.createRandomParticle();
            const nextSpawnTime = 600 + Math.random() * 900; // 0.6-1.5 seconds (moderate frequency)
            setTimeout(spawnRandomHeart, nextSpawnTime);
        };

        // Start the first spawn quickly
        setTimeout(spawnRandomHeart, Math.random() * 750);
    }

    createRandomParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle", "random-spawn");

        // Random positioning anywhere on screen
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        // Random animation delay and duration
        const delay = 0; // Start immediately
        const duration = 2 + Math.random() * 3; // 2-5 seconds
        particle.style.animationDelay = delay + "s";
        particle.style.animationDuration = duration + "s";

        // Random size variation - bigger particles
        const size = Math.random() * 9 + 18; // 18-27px range
        particle.style.width = size + "px";
        particle.style.height = size + "px";

        // Add random colors with hue rotation
        const hueRotations = [0, 60, 120, 180, 240, 300];
        const randomHue = hueRotations[Math.floor(Math.random() * hueRotations.length)];
        const saturation = 1.4 + Math.random() * 0.6; // 1.4-2.0
        const brightness = 1.1 + Math.random() * 0.3; // 1.1-1.4

        particle.style.filter = `hue-rotate(${randomHue}deg) saturate(${saturation}) brightness(${brightness})`;

        this.container.appendChild(particle);

        // Remove particle after animation
        setTimeout(() => {
            if (this.container.contains(particle)) {
                this.container.removeChild(particle);
            }
        }, duration * 1000 + 1000); // Duration + 1 second buffer
    }
}

// ===== NAVIGATION FUNCTIONALITY =====
class Navigation {
    constructor() {
        this.navLinks = navLinks;
        this.sections = sections;
        this.currentSection = "home";

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateActiveLink();
    }

    bindEvents() {
        // Smooth scroll for navigation links
        this.navLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                this.scrollToSection(targetId);
            });
        });

        // Scroll handler for active link updates
        window.addEventListener(
            "scroll",
            throttle(() => {
                this.updateActiveLink();
            }, 16)
        );
    }

    scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;

        const headerOffset = 100;
        const elementPosition = targetSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    }

    updateActiveLink() {
        const scrollPos = window.scrollY + 150;

        this.sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                if (this.currentSection !== sectionId) {
                    this.currentSection = sectionId;
                    this.setActiveLink(sectionId);
                }
            }
        });
    }

    setActiveLink(sectionId) {
        this.navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }
}

// ===== LOADING ANIMATIONS =====
class LoadingAnimations {
    constructor() {
        this.isFirstLoad = true;
        this.init();
    }

    init() {
        // Add animation classes on page load
        this.setupLoadAnimations();

        // Trigger animations after a short delay
        setTimeout(() => {
            this.triggerLoadAnimations();
        }, 500);
    }

    setupLoadAnimations() {
        // Add animation classes to elements below the title
        const heroTitle = document.querySelector(".hero-title");
        if (heroTitle) {
            // Get all elements after the hero title
            const heroSection = heroTitle.closest(".hero-section, .hero, section");
            if (heroSection) {
                const elementsToAnimate = heroSection.querySelectorAll(
                    ".hero-subtitle, .hero-description, .hero-buttons, .btn, .hero-stats, .hero-image, .hero-content > *:not(.hero-title)"
                );
                elementsToAnimate.forEach((el, index) => {
                    el.classList.add("animate-on-load");
                });
            }
        }

        // Add animations to other sections
        const sections = document.querySelectorAll("section:not(.hero-section):not(.hero)");
        sections.forEach((section, sectionIndex) => {
            const elements = section.querySelectorAll(
                ".card, .section-title, .project-card, .skill-item, .timeline-item, .stat-card, .testimonial-card"
            );
            elements.forEach((el, index) => {
                if (sectionIndex === 0) {
                    el.classList.add("animate-fade-up");
                } else if (sectionIndex === 1) {
                    el.classList.add("animate-slide-left");
                } else {
                    el.classList.add("animate-scale");
                }
            });
        });
    }

    triggerLoadAnimations() {
        // Animate hero elements first
        const heroElements = document.querySelectorAll(".animate-on-load");
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add("animate-in");
            }, index * 150 + 300); // Staggered with delay
        });

        // Animate section elements with longer delay
        setTimeout(() => {
            const sectionElements = document.querySelectorAll(
                ".animate-fade-up, .animate-slide-left, .animate-scale"
            );
            sectionElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("animate-in");
                }, index * 100);
            });
        }, 800);
    }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class AnimationObserver {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        const options = {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px",
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);

        this.observeElements();
    }

    observeElements() {
        // Observe sections and cards for scroll animations
        const elementsToObserve = document.querySelectorAll(
            "section:not(#home), .card, .project-card, .portfolio-item, .section-title"
        );
        elementsToObserve.forEach((el, index) => {
            el.classList.add("animate-fade-up"); // Add the animation class
            el.style.transitionDelay = `${index * 0.1}s`; // Stagger animations
            this.observer.observe(el);
        });
    }

    animateElement(element) {
        element.classList.add("animate-in");
        this.observer.unobserve(element);
    }
}

// ===== THEME TOGGLE FUNCTIONALITY =====
class ThemeToggle {
    constructor() {
        this.button = themeToggle;
        this.icon = this.button.querySelector(".toggle-icon");
        this.effectsEnabled = true;

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateButton();
    }

    bindEvents() {
        this.button.addEventListener("click", () => {
            this.toggle();
        });

        // Keyboard accessibility
        this.button.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    toggle() {
        this.effectsEnabled = !this.effectsEnabled;
        effectsEnabled = this.effectsEnabled;

        // Toggle particle effects
        if (window.particleSystem) {
            window.particleSystem.toggleEnhanced(this.effectsEnabled);
        }

        this.updateButton();
        this.showFeedback();
    }

    updateButton() {
        if (this.effectsEnabled) {
            this.icon.textContent = "✨";
            this.button.setAttribute("aria-label", "Disable particle effects");
            this.button.title = "Disable Effects";
        } else {
            this.icon.textContent = "🌙";
            this.button.setAttribute("aria-label", "Enable particle effects");
            this.button.title = "Enable Effects";
        }
    }

    showFeedback() {
        const feedback = document.createElement("div");
        feedback.className = "toggle-feedback";
        feedback.textContent = this.effectsEnabled ? "Effects enabled!" : "Effects disabled";
        document.body.appendChild(feedback);

        setTimeout(() => {
            feedback.classList.add("show");
        }, 10);

        setTimeout(() => {
            feedback.classList.remove("show");
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
}

// ===== LOADING SCREEN =====
class LoadingScreen {
    constructor(customCursor = null) {
        this.overlay = loadingOverlay;
        this.customCursor = customCursor;
        this.init();
    }

    init() {
        // Set cursor to loading state initially
        this.setLoadingCursor(true);

        // Hide loading screen after initial load
        window.addEventListener("load", () => {
            setTimeout(() => {
                this.hide();
            }, 1000);
        });
    }

    hide() {
        if (this.overlay) {
            this.overlay.classList.add("fade-out");
            setTimeout(() => {
                this.overlay.style.display = "none";
                // Reset cursor from loading state
                this.setLoadingCursor(false);
            }, 500);
        }
    }

    setLoadingCursor(isLoading) {
        if (this.customCursor) {
            if (isLoading) {
                // Hide custom cursor during loading screen to prevent conflicts
                this.customCursor.element.style.display = "none";
                this.customCursor.element.style.opacity = "0";
                this.customCursor.isVisible = false;
            } else {
                // Restore custom cursor after loading
                this.customCursor.setLoading(false);
                this.customCursor.element.style.display = "block";
                this.customCursor.element.style.opacity = "1";
                this.customCursor.isVisible = true;
                this.customCursor.show();
                this.customCursor.animate();
            }
        }
    }
}

// ===== PAGE LINK HANDLING =====
class PageLinkHandler {
    constructor() {
        this.init();
    }

    init() {
        const pageLinks = document.querySelectorAll('a[href$=".html"]');
        pageLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                this.handlePageNavigation(e, link);
            });
        });
    }

    handlePageNavigation(event, link) {
        const href = link.getAttribute("href");

        // Add loading state
        document.body.style.transition = "opacity 0.3s ease";
        document.body.style.opacity = "0.7";

        // Navigate to the actual page
        setTimeout(() => {
            window.location.href = href;
        }, 300);
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.preloadCriticalResources();
        this.setupVisibilityAPI();
    }

    optimizeImages() {
        // Lazy load images when they come into view
        const images = document.querySelectorAll("img[data-src]");
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach((img) => imageObserver.observe(img));
    }

    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            "styles/main.css",
            "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
        ];

        criticalResources.forEach((resource) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = resource.includes(".css") ? "style" : "font";
            link.href = resource;
            if (link.as === "font") {
                link.crossOrigin = "anonymous";
            }
            document.head.appendChild(link);
        });
    }

    setupVisibilityAPI() {
        // Pause animations when page is not visible
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                // Pause animations
                document.documentElement.style.setProperty("--animation-play-state", "paused");
            } else {
                // Resume animations
                document.documentElement.style.setProperty("--animation-play-state", "running");
            }
        });
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupScreenReaderSupport();
        this.respectUserPreferences();
    }

    setupKeyboardNavigation() {
        // Focus management for modals and overlays
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                // Close any open modals or overlays
                const activeModal = document.querySelector(".modal.active");
                if (activeModal) {
                    this.closeModal(activeModal);
                }
            }
        });
    }

    setupScreenReaderSupport() {
        // Add proper ARIA labels and descriptions
        const interactiveElements = document.querySelectorAll("button, a, [tabindex]");
        interactiveElements.forEach((el) => {
            if (!el.getAttribute("aria-label") && !el.getAttribute("aria-labelledby")) {
                const text = el.textContent.trim();
                if (text) {
                    el.setAttribute("aria-label", text);
                }
            }
        });

        // Announce route changes to screen readers
        const announcer = document.createElement("div");
        announcer.setAttribute("aria-live", "polite");
        announcer.setAttribute("aria-atomic", "true");
        announcer.className = "sr-only";
        document.body.appendChild(announcer);
        window.announcer = announcer;
    }

    respectUserPreferences() {
        // Respect reduced motion preference
        if (prefersReducedMotion()) {
            document.documentElement.style.setProperty("--transition-fast", "0.01ms");
            document.documentElement.style.setProperty("--transition-normal", "0.01ms");
            document.documentElement.style.setProperty("--transition-slow", "0.01ms");

            // Disable particle animations
            if (particles) {
                particles.style.display = "none";
            }
        }

        // Respect high contrast preference
        if (window.matchMedia("(prefers-contrast: high)").matches) {
            document.documentElement.classList.add("high-contrast");
        }
    }

    closeModal(modal) {
        modal.classList.remove("active");
        // Return focus to trigger element if available
        const trigger = modal.dataset.trigger;
        if (trigger) {
            const triggerElement = document.getElementById(trigger);
            if (triggerElement) {
                triggerElement.focus();
            }
        }
    }
}

// ===== ERROR HANDLING =====
class ErrorHandler {
    constructor() {
        this.init();
    }

    init() {
        // Global error handling
        window.addEventListener("error", (e) => {
            console.error("JavaScript Error:", e.error);
            this.logError(e.error);
        });

        // Promise rejection handling
        window.addEventListener("unhandledrejection", (e) => {
            console.error("Unhandled Promise Rejection:", e.reason);
            this.logError(e.reason);
        });
    }

    logError(error) {
        // In production, send errors to logging service
        const errorData = {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
        };

        // For development, just log to console
        console.group("Error Report");
        console.table(errorData);
        console.groupEnd();
    }
}

// ===== MAIN APPLICATION CLASS =====
class JennaStudio {
    constructor() {
        this.components = {};
        this.isInitialized = false;

        this.init();
    }

    async init() {
        try {
            // Wait for DOM to be ready first
            if (document.readyState === "loading") {
                await new Promise((resolve) => {
                    document.addEventListener("DOMContentLoaded", resolve);
                });
            }

            // Initialize cursor for loading screen
            this.components.customCursor = new CustomCursor();

            this.initializeComponents();
            this.bindGlobalEvents();
            this.isInitialized = true;

            console.log("🎨 Jenna Studio initialized successfully!");
        } catch (error) {
            console.error("Failed to initialize Jenna Studio:", error);
        }
    }

    initializeComponents() {
        // Initialize all components (cursor already initialized)
        this.components.errorHandler = new ErrorHandler();
        this.components.loadingScreen = new LoadingScreen(this.components.customCursor);
        this.components.loadingAnimations = new LoadingAnimations();
        this.components.particleSystem = new ParticleSystem();
        this.components.navigation = new Navigation();
        this.components.animationObserver = new AnimationObserver();
        this.components.themeToggle = new ThemeToggle();
        this.components.pageLinks = new PageLinkHandler();
        this.components.performanceOptimizer = new PerformanceOptimizer();
        this.components.accessibilityEnhancer = new AccessibilityEnhancer();

        // Make particle system globally available for theme toggle
        window.particleSystem = this.components.particleSystem;
    }

    bindGlobalEvents() {
        // Window resize handler
        window.addEventListener(
            "resize",
            debounce(() => {
                this.handleResize();
            }, 250)
        );

        // Orientation change handler
        window.addEventListener("orientationchange", () => {
            setTimeout(() => {
                this.handleResize();
            }, 100);
        });

        // Page visibility change handler
        document.addEventListener("visibilitychange", () => {
            this.handleVisibilityChange();
        });

        // Scroll animation handler
        window.addEventListener(
            "scroll",
            throttle(() => {
                this.handleScrollAnimations();
            }, 16)
        );
    }

    handleScrollAnimations() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Animate sections based on scroll position
        const sections = document.querySelectorAll("section");
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Calculate visibility percentage - trigger much earlier
            const visibilityStart = windowHeight + 200; // Start 200px before entering viewport
            const visibilityEnd = -sectionHeight;
            const visibility = Math.max(
                0,
                Math.min(1, (visibilityStart - sectionTop) / (visibilityStart - visibilityEnd))
            );

            // Apply transform based on visibility
            if (visibility > 0) {
                const translateY = (1 - visibility) * 30; // Subtle move up
                const opacity = Math.min(1, visibility * 6); // Much faster fade in

                section.style.transform = `translateY(${translateY}px)`;
                section.style.opacity = opacity;
            }
        });
    }

    handleResize() {
        // Emit custom resize event for components
        const resizeEvent = new CustomEvent("jennaResize", {
            detail: {
                width: window.innerWidth,
                height: window.innerHeight,
            },
        });
        window.dispatchEvent(resizeEvent);
    }

    handleVisibilityChange() {
        if (document.hidden) {
            // Page is hidden - pause animations, stop timers
            this.pauseAnimations();
        } else {
            // Page is visible - resume animations
            this.resumeAnimations();
        }
    }

    pauseAnimations() {
        document.documentElement.style.setProperty("--animation-play-state", "paused");
    }

    resumeAnimations() {
        document.documentElement.style.setProperty("--animation-play-state", "running");
    }

    // Public API for external use
    scrollToSection(sectionId) {
        if (this.components.navigation) {
            this.components.navigation.scrollToSection(sectionId);
        }
    }

    toggleEffects() {
        if (this.components.themeToggle) {
            this.components.themeToggle.toggle();
        }
    }

    showNotification(message, type = "info") {
        const notification = document.createElement("div");
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add("show");
        }, 10);

        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// ===== INITIALIZATION =====
// Initialize the application when script loads
const jennaStudio = new JennaStudio();

// Make it globally available for debugging
window.jennaStudio = jennaStudio;

// ===== UTILITY FUNCTIONS FOR EXTERNAL USE =====
window.JennaStudioUtils = {
    // Scroll to section
    scrollTo: (sectionId) => jennaStudio.scrollToSection(sectionId),

    // Toggle effects
    toggleEffects: () => jennaStudio.toggleEffects(),

    // Show notification
    notify: (message, type) => jennaStudio.showNotification(message, type),

    // Check if touch device
    isTouchDevice: isTouchDevice,

    // Check if reduced motion
    prefersReducedMotion: prefersReducedMotion,

    // Debounce utility
    debounce: debounce,

    // Throttle utility
    throttle: throttle,
};

// ===== DEVELOPMENT HELPERS =====
if (process?.env?.NODE_ENV === "development") {
    // Development-only code
    console.log("👩🏻‍💻 Jenna Studio running in development mode");

    // Performance monitoring
    window.addEventListener("load", () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType("navigation")[0];
            console.group("⚡ Performance Metrics");
            console.log("Page Load Time:", perfData.loadEventEnd - perfData.loadEventStart + "ms");
            console.log(
                "DOM Content Loaded:",
                perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart + "ms"
            );
            console.log("First Paint:", performance.getEntriesByType("paint")[0]?.startTime + "ms");
            console.groupEnd();
        }, 0);
    });
}

// ===== EXPORT FOR MODULE SYSTEMS =====
if (typeof module !== "undefined" && module.exports) {
    module.exports = { JennaStudio, JennaStudioUtils };
}

if (typeof define === "function" && define.amd) {
    define(() => ({ JennaStudio, JennaStudioUtils }));
}
