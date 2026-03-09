import React from 'react';
import './SocialProfileButton.css';

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
);

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const icons = {
    tiktok: TikTokIcon,
    youtube: YouTubeIcon,
};

const brandStyles = {
    tiktok: {
        background: 'linear-gradient(135deg, #010101 60%, #ff0050 100%)',
        color: '#fff',
        border: '1px solid rgba(255,0,80,0.4)',
        glow: 'rgba(255,0,80,0.25)',
    },
    youtube: {
        background: 'linear-gradient(135deg, #1a1a1a 60%, #ff0000 100%)',
        color: '#fff',
        border: '1px solid rgba(255,0,0,0.4)',
        glow: 'rgba(255,0,0,0.25)',
    },
};

const SocialProfileButton = ({ platform, url }) => {
    const Icon = icons[platform];
    const style = brandStyles[platform];
    if (!Icon || !url) return null;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-profile-btn"
            style={{
                background: style.background,
                border: style.border,
                '--glow': style.glow,
            }}
        >
            <Icon />
            <span>Ver perfil aquí</span>
        </a>
    );
};

export default SocialProfileButton;
