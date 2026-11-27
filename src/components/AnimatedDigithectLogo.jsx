import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedDigithectLogo({
  size = "lg",
  interactive = true,
  showControls = false
}) {
  const [key, setKey] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center select-none cursor-pointer"
      onClick={handleReplay}
      title="Click to replay animation"
    >
      {/* 3D Parallax Tilt Container */}
      <motion.div
        key={key}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateY: mousePosition.x,
          rotateX: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        style={{ perspective: 1000 }}
        className="relative flex items-center justify-center"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-auto overflow-visible drop-shadow-[0_20px_50px_rgba(212,167,55,0.22)]"
        >
          <defs>
            {/* 24K Gold Metallic Gradients */}
            <linearGradient id="goldMetallicMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2BF" />
              <stop offset="25%" stopColor="#E5C163" />
              <stop offset="50%" stopColor="#F9E8A2" />
              <stop offset="75%" stopColor="#BD8B1D" />
              <stop offset="100%" stopColor="#8A600D" />
            </linearGradient>

            <linearGradient id="goldTowerLeft" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7A530E" />
              <stop offset="50%" stopColor="#D9AC3C" />
              <stop offset="90%" stopColor="#FFF1B8" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            <linearGradient id="goldTowerMid" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#8A600D" />
              <stop offset="40%" stopColor="#E2BB58" />
              <stop offset="85%" stopColor="#FFF6CD" />
              <stop offset="100%" stopColor="#FFE082" />
            </linearGradient>

            <linearGradient id="goldTowerSpire" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6C4A0A" />
              <stop offset="30%" stopColor="#D4A737" />
              <stop offset="65%" stopColor="#FFF2C2" />
              <stop offset="100%" stopColor="#FFE680" />
            </linearGradient>

            <linearGradient id="goldArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE8A3" />
              <stop offset="20%" stopColor="#F2D075" />
              <stop offset="50%" stopColor="#C99726" />
              <stop offset="80%" stopColor="#FFE79E" />
              <stop offset="100%" stopColor="#7E540C" />
            </linearGradient>

            <linearGradient id="goldWordmark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFEAA7" />
              <stop offset="50%" stopColor="#D4A737" />
              <stop offset="100%" stopColor="#FAF0BE" />
            </linearGradient>

            <filter id="goldGlow" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Foundation Line */}
          <line
            x1="120"
            y1="340"
            x2="380"
            y2="340"
            stroke="#D4A737"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.25"
          />

          {/* ========================================================= */}
          <!-- 1. TOWER 1 (Leftmost Tower - Lowest Height, Angled Top) -->
          {/* ========================================================= */}
          <g id="tower-1-group">
            <motion.g
              initial={{ transformOrigin: "153px 340px", scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <polygon
                points="142,340 142,275 164,255 164,340"
                fill="url(#goldTowerLeft)"
                stroke="#F7D885"
                strokeWidth="0.75"
              />
              <line x1="143" y1="320" x2="163" y2="320" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="143" y1="300" x2="163" y2="300" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="143" y1="280" x2="163" y2="280" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="142" y1="275" x2="164" y2="255" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>

            {/* Rising Laser Scanner Beam */}
            <motion.line
              x1="135"
              y1="340"
              x2="171"
              y2="340"
              stroke="#FFFFFF"
              strokeWidth="3"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -85], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.1, delay: 0.15, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
            />
          </g>

          {/* ========================================================= */}
          <!-- 2. TOWER 2 (Middle Tower - Intermediate Height, Angled Top) -->
          {/* ========================================================= */}
          <g id="tower-2-group">
            <motion.g
              initial={{ transformOrigin: "185px 340px", scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <polygon
                points="174,340 174,222 197,200 197,340"
                fill="url(#goldTowerMid)"
                stroke="#F7D885"
                strokeWidth="0.75"
              />
              <line x1="175" y1="315" x2="196" y2="315" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="175" y1="290" x2="196" y2="290" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="175" y1="265" x2="196" y2="265" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="175" y1="240" x2="196" y2="240" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="174" y1="222" x2="197" y2="200" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>

            {/* Rising Laser Scanner Beam */}
            <motion.line
              x1="168"
              y1="340"
              x2="203"
              y2="340"
              stroke="#FFFFFF"
              strokeWidth="3"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -140], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.2, delay: 0.75, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
            />
          </g>

          {/* ========================================================= */}
          <!-- 3. TOWER 3 (Rightmost Master Tower - Skyscraper Spire) -->
          {/* ========================================================= */}
          <g id="tower-3-group">
            <motion.g
              initial={{ transformOrigin: "219px 340px", scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.35, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <path
                d="M 207 340 L 207 195 L 186 182 L 196 160 L 231 142 L 231 340 Z"
                fill="url(#goldTowerSpire)"
                stroke="#F7D885"
                strokeWidth="0.75"
              />
              <line x1="220" y1="340" x2="220" y2="152" stroke="#FFF2BF" strokeWidth="0.8" opacity="0.5" />
              <line x1="208" y1="315" x2="230" y2="315" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="208" y1="285" x2="230" y2="285" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="208" y1="255" x2="230" y2="255" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="208" y1="225" x2="230" y2="225" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <line x1="208" y1="195" x2="230" y2="195" stroke="#030406" strokeWidth="1.2" opacity="0.35" />
              <polyline
                points="186,182 196,160 231,142"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </motion.g>

            {/* Rising Laser Scanner Beam */}
            <motion.line
              x1="180"
              y1="340"
              x2="238"
              y2="340"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -198], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.35, delay: 1.35, times: [0, 0.2, 0.8, 1], ease: "easeInOut" }}
            />
          </g>

          {/* ========================================================= */}
          <!-- 4. THE GRAND GOLDEN D-ARC -->
          {/* ========================================================= */}
          <g id="d-arc-group">
            <motion.path
              d="M 231 118 L 262 138 C 335 178, 375 220, 360 268 C 346 312, 305 340, 244 340 C 260 330, 275 315, 290 295 C 318 258, 312 215, 262 184 L 231 165 Z"
              fill="url(#goldArcGrad)"
              stroke="#FFE8A3"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 2.15, ease: [0.19, 1, 0.22, 1] }}
              filter="url(#goldGlow)"
            />
          </g>

          {/* ========================================================= */}
          <!-- 5. BRAND TYPOGRAPHY: DIGITHECT & SOFTWARE SERVICES -->
          {/* ========================================================= */}
          <motion.g
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 2.95, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* D I G I T H E C T */}
            <text x="75" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">D</text>
            <text x="126" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">I</text>
            <text x="160" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">G</text>
            <text x="215" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">I</text>
            <text x="250" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">T</text>
            <text x="296" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">H</text>

            {/* Architectural 'E' (3 Horizontal Bars) */}
            <g id="architectural-e">
              <rect x="345" y="388" width="24" height="4.5" rx="1" fill="url(#goldWordmark)" />
              <rect x="345" y="401" width="20" height="4.5" rx="1" fill="url(#goldWordmark)" />
              <rect x="345" y="414" width="24" height="4.5" rx="1" fill="url(#goldWordmark)" />
            </g>

            <text x="386" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">C</text>
            <text x="432" y="415" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="38" letterSpacing="0.22em" fill="url(#goldWordmark)">T</text>

            {/* Subtitle */}
            <line x1="65" y1="452" x2="115" y2="452" stroke="#D4A737" strokeWidth="1.2" opacity="0.65" />
            <text
              x="250"
              y="456"
              textAnchor="middle"
              fontFamily="'Inter', -apple-system, sans-serif"
              fontWeight="600"
              fontSize="14"
              letterSpacing="0.38em"
              fill="#EAD293"
            >
              SOFTWARE SERVICES
            </text>
            <line x1="385" y1="452" x2="435" y2="452" stroke="#D4A737" strokeWidth="1.2" opacity="0.65" />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
}
