import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const AnimatedSocialButton = ({ 
  href, 
  label, 
  icon: Icon,
  children 
}) => {
  const { isDark } = useTheme();

  return (
    <StyledWrapper isDark={isDark}>
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        aria-label={label}
      >
        <span>{label}</span>
        <div className="container">
          <Icon size={20} />
          <Icon size={20} />
          <Icon size={20} />
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
    position: relative;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    width: 120px;
    height: 45px;
    background-color: ${props => props.isDark ? '#334155' : '#f1f5f9'};
    border-radius: 80px;
    border: none;
    padding: 0 60px;
    transition: all .3s ease;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .btn:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.isDark 
      ? '0 8px 25px rgba(59, 130, 246, 0.3)' 
      : '0 8px 25px rgba(59, 130, 246, 0.2)'
    };
  }

  .btn span {
    position: absolute;
    z-index: 99;
    width: 120px;
    height: 45px;
    border-radius: 80px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    line-height: 45px;
    letter-spacing: 1px;
    color: ${props => props.isDark ? '#f1f5f9' : '#1e293b'};
    background: ${props => props.isDark 
      ? 'linear-gradient(135deg, #1e293b, #0f172a)' 
      : 'linear-gradient(135deg, #ffffff, #f8fafc)'
    };
    border: ${props => props.isDark 
      ? '1px solid rgba(59, 130, 246, 0.3)' 
      : '1px solid rgba(59, 130, 246, 0.2)'
    };
    padding: 0 10px;
    transition: all 1.2s ease;
    box-shadow: ${props => props.isDark 
      ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
      : '0 4px 15px rgba(0, 0, 0, 0.1)'
    };
  }

  .btn .container {
    display: flex;
    width: 120px;
    border-radius: 80px;
    line-height: 45px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .btn svg {
    opacity: 0;
    color: ${props => props.isDark ? '#60a5fa' : '#3b82f6'};
    transition: all 0.6s ease;
  }

  .btn .container svg:nth-of-type(1) {
    transition-delay: 0.65s;
  }

  .btn .container svg:nth-of-type(2) {
    transition-delay: 0.8s;
  }

  .btn .container svg:nth-of-type(3) {
    transition-delay: 0.5s;
  }

  .btn:hover span {
    opacity: 0;
    transform: translateY(-10px);
  }

  .btn:hover svg {
    opacity: 1;
    transform: translateY(0);
  }

  .btn:hover svg:nth-of-type(2) {
    transform: scale(1.2);
  }
`;

export default AnimatedSocialButton;
