/**
 * NINJA TORTLES DASHBOARD - DESIGN SYSTEM
 * 
 * This file serves as the single source of truth for design tokens used across the application.
 * Note: These values are mirrored in index.html (Tailwind config).
 */

export const COLORS = {
    // Core Layout
    background: '#0D0D0F', // Deeper black/grey
    surface: '#1A1A1D',    // Dark surface for sidebars/cards

    // Text
    textPrimary: '#F2F2F2',
    textSecondary: '#9CA3AF',
    textMuted: 'rgba(242, 242, 242, 0.5)',

    // Brand Accents
    accentOrange: '#FF6B4A', // Primary Action / Highlight
    accentYellow: '#FFC062', // Warning / Secondary
    accentGreen: '#4ADE80',  // Success / Positive Trend
    accentRed: '#EF4444',    // Error / Critical
    accentBlue: '#60A5FA',   // Info / Neutral
    accentPurple: '#A855F7', // Special / Admin

    // Glassmorphism System
    glass: {
        dark: 'rgba(20, 20, 22, 0.70)',
        light: 'rgba(255, 255, 255, 0.05)',
        border: 'rgba(255, 255, 255, 0.08)',
        highlight: 'rgba(255, 255, 255, 0.1)',
    }
};

export const TYPOGRAPHY = {
    fontFamily: "'Outfit', sans-serif",
    sizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
    },
    weights: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
    }
};

export const EFFECTS = {
    shadows: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.3)',
        glow: '0 0 15px rgba(255, 107, 74, 0.2)', // Orange glow
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    },
    blur: {
        panel: '24px',
        overlay: '12px',
    },
    transitions: {
        default: 'all 0.3s ease-in-out',
        fast: 'all 0.15s ease',
    }
};
