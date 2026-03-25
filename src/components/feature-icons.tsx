export function IconGasFees() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <circle cx="32" cy="32" r="28" fill="url(#gasBgGlow)" opacity="0.15" />

      {/* Blockchain blocks — crossed out */}
      <rect x="12" y="18" width="12" height="12" rx="2" stroke="rgba(114,162,240,0.4)" strokeWidth="1" />
      <rect x="12" y="34" width="12" height="12" rx="2" stroke="rgba(114,162,240,0.25)" strokeWidth="1" />
      <rect x="28" y="18" width="12" height="12" rx="2" stroke="rgba(114,162,240,0.4)" strokeWidth="1" />
      <rect x="28" y="34" width="12" height="12" rx="2" stroke="rgba(114,162,240,0.25)" strokeWidth="1" />

      {/* Chain links between blocks */}
      <line x1="24" y1="24" x2="28" y2="24" stroke="rgba(114,162,240,0.3)" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <line x1="24" y1="40" x2="28" y2="40" stroke="rgba(114,162,240,0.2)" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <line x1="18" y1="30" x2="18" y2="34" stroke="rgba(114,162,240,0.2)" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <line x1="34" y1="30" x2="34" y2="34" stroke="rgba(114,162,240,0.2)" strokeWidth="1" strokeDasharray="1.5 1.5" />

      {/* Inner block detail dots */}
      <circle cx="16" cy="22" r="1" fill="rgba(114,162,240,0.3)" />
      <circle cx="20" cy="22" r="1" fill="rgba(114,162,240,0.3)" />
      <circle cx="16" cy="26" r="1" fill="rgba(114,162,240,0.2)" />
      <circle cx="32" cy="22" r="1" fill="rgba(114,162,240,0.3)" />
      <circle cx="36" cy="22" r="1" fill="rgba(114,162,240,0.3)" />
      <circle cx="32" cy="26" r="1" fill="rgba(114,162,240,0.2)" />

      {/* Prohibition circle */}
      <circle cx="26" cy="30" r="20" stroke="url(#gasProhibit)" strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* Diagonal strike */}
      <line x1="12" y1="44" x2="40" y2="16" stroke="url(#gasStrike)" strokeWidth="2" strokeLinecap="round" />

      {/* Small sparkle — zero cost */}
      <circle cx="46" cy="14" r="1.5" fill="rgba(114,162,240,0.6)" />
      <line x1="46" y1="10" x2="46" y2="18" stroke="rgba(114,162,240,0.3)" strokeWidth="0.5" />
      <line x1="42" y1="14" x2="50" y2="14" stroke="rgba(114,162,240,0.3)" strokeWidth="0.5" />

      <defs>
        <radialGradient id="gasBgGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="gasProhibit" x1="6" y1="10" x2="46" y2="50">
          <stop offset="0%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="rgb(139,92,246)" />
        </linearGradient>
        <linearGradient id="gasStrike" x1="12" y1="44" x2="40" y2="16">
          <stop offset="0%" stopColor="rgb(139,92,246)" />
          <stop offset="50%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="rgb(0,229,255)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconTrace() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <circle cx="32" cy="32" r="28" fill="url(#traceBgGlow)" opacity="0.12" />

      {/* Outer shield shape */}
      <path
        d="M32 8L50 18V32C50 42.5 42 51 32 56C22 51 14 42.5 14 32V18L32 8Z"
        stroke="rgba(114,162,240,0.25)"
        strokeWidth="1"
        fill="rgba(114,162,240,0.03)"
      />

      {/* Inner shield */}
      <path
        d="M32 14L44 21V32C44 39.5 39 46 32 50C25 46 20 39.5 20 32V21L32 14Z"
        stroke="rgba(114,162,240,0.15)"
        strokeWidth="0.8"
        fill="none"
      />

      {/* Eye */}
      <path
        d="M20 32C20 32 24.5 24 32 24C39.5 24 44 32 44 32C44 32 39.5 40 32 40C24.5 40 20 32 20 32Z"
        stroke="rgba(114,162,240,0.5)"
        strokeWidth="1.2"
        fill="rgba(114,162,240,0.04)"
      />

      {/* Iris */}
      <circle cx="32" cy="32" r="5" stroke="rgba(114,162,240,0.5)" strokeWidth="1" fill="rgba(114,162,240,0.06)" />

      {/* Pupil */}
      <circle cx="32" cy="32" r="2" fill="rgba(114,162,240,0.3)" />

      {/* Light reflection */}
      <circle cx="34" cy="30.5" r="1" fill="rgba(114,162,240,0.5)" />

      {/* Privacy slash */}
      <line x1="16" y1="46" x2="48" y2="18" stroke="url(#traceSlash)" strokeWidth="2" strokeLinecap="round" />

      {/* Scatter particles — data disappearing */}
      <circle cx="46" cy="20" r="1" fill="rgba(114,162,240,0.4)" />
      <circle cx="50" cy="16" r="0.7" fill="rgba(114,162,240,0.3)" />
      <circle cx="48" cy="14" r="0.5" fill="rgba(114,162,240,0.2)" />
      <circle cx="52" cy="18" r="0.5" fill="rgba(114,162,240,0.15)" />

      <defs>
        <radialGradient id="traceBgGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="traceSlash" x1="16" y1="46" x2="48" y2="18">
          <stop offset="0%" stopColor="rgb(139,92,246)" />
          <stop offset="50%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="rgb(0,229,255)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconSpeed() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <circle cx="32" cy="32" r="28" fill="url(#speedBgGlow)" opacity="0.12" />

      {/* Outer ring — speedometer */}
      <circle cx="32" cy="34" r="22" stroke="rgba(114,162,240,0.2)" strokeWidth="1" strokeDasharray="3 3" />

      {/* Speed arc — filled portion */}
      <path
        d="M14 46A22 22 0 0 1 50 46"
        stroke="url(#speedArc)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Tick marks */}
      <line x1="14" y1="34" x2="18" y2="34" stroke="rgba(114,162,240,0.3)" strokeWidth="1" />
      <line x1="17" y1="22" x2="20" y2="24" stroke="rgba(114,162,240,0.3)" strokeWidth="1" />
      <line x1="32" y1="14" x2="32" y2="18" stroke="rgba(114,162,240,0.3)" strokeWidth="1" />
      <line x1="47" y1="22" x2="44" y2="24" stroke="rgba(114,162,240,0.4)" strokeWidth="1" />
      <line x1="50" y1="34" x2="46" y2="34" stroke="rgba(114,162,240,0.5)" strokeWidth="1" />

      {/* Needle — pointing to fast */}
      <line x1="32" y1="34" x2="45" y2="24" stroke="url(#speedNeedle)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="34" r="3" fill="rgba(114,162,240,0.15)" stroke="rgba(114,162,240,0.4)" strokeWidth="1" />
      <circle cx="32" cy="34" r="1.5" fill="rgba(114,162,240,0.4)" />

      {/* Lightning bolt overlay */}
      <path
        d="M28 20L24 32H30L26 44L38 28H31L35 20Z"
        fill="rgba(114,162,240,0.08)"
        stroke="rgba(114,162,240,0.35)"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />

      {/* Speed lines */}
      <line x1="4" y1="30" x2="8" y2="30" stroke="rgba(114,162,240,0.2)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="3" y1="34" x2="9" y2="34" stroke="rgba(114,162,240,0.15)" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="4" y1="38" x2="7" y2="38" stroke="rgba(114,162,240,0.1)" strokeWidth="0.8" strokeLinecap="round" />

      <defs>
        <radialGradient id="speedBgGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="speedArc" x1="14" y1="46" x2="50" y2="46">
          <stop offset="0%" stopColor="rgba(114,162,240,0.15)" />
          <stop offset="100%" stopColor="rgb(114,162,240)" />
        </linearGradient>
        <linearGradient id="speedNeedle" x1="32" y1="34" x2="45" y2="24">
          <stop offset="0%" stopColor="rgb(139,92,246)" />
          <stop offset="100%" stopColor="rgb(0,229,255)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconKey() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background glow */}
      <circle cx="32" cy="32" r="28" fill="url(#keyBgGlow)" opacity="0.12" />

      {/* Left shard — key head fragment */}
      <g opacity="0.9">
        <circle cx="20" cy="22" r="9" stroke="rgba(114,162,240,0.4)" strokeWidth="1.2" fill="rgba(114,162,240,0.04)" />
        <circle cx="20" cy="22" r="4" stroke="rgba(114,162,240,0.3)" strokeWidth="0.8" fill="rgba(114,162,240,0.06)" />
        <circle cx="20" cy="22" r="1.5" fill="rgba(114,162,240,0.3)" />
        {/* Partial key shaft */}
        <line x1="27" y1="28" x2="32" y2="33" stroke="rgba(114,162,240,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Break zone — gap with particles */}
      <circle cx="34" cy="35" r="1" fill="rgba(114,162,240,0.5)" />
      <circle cx="33" cy="33" r="0.6" fill="rgba(139,92,246,0.5)" />
      <circle cx="35" cy="34" r="0.4" fill="rgba(0,229,255,0.5)" />
      <circle cx="32" cy="36" r="0.5" fill="rgba(114,162,240,0.3)" />
      <circle cx="36" cy="33" r="0.3" fill="rgba(114,162,240,0.4)" />

      {/* Fracture lines */}
      <path d="M31 32L33 35L32 37" stroke="url(#keyFracture)" strokeWidth="0.8" strokeDasharray="1.5 1" opacity="0.6" />

      {/* Right shard — key teeth fragment */}
      <g opacity="0.7">
        <line x1="36" y1="37" x2="48" y2="49" stroke="rgba(114,162,240,0.35)" strokeWidth="1.2" strokeLinecap="round" />
        {/* Teeth */}
        <line x1="40" y1="41" x2="44" y2="39" stroke="rgba(114,162,240,0.3)" strokeWidth="1" strokeLinecap="round" />
        <line x1="43" y1="44" x2="47" y2="42" stroke="rgba(114,162,240,0.3)" strokeWidth="1" strokeLinecap="round" />
        <line x1="46" y1="47" x2="50" y2="45" stroke="rgba(114,162,240,0.25)" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Orbiting shard particles — pieces floating away */}
      <circle cx="14" cy="34" r="2" stroke="rgba(114,162,240,0.2)" strokeWidth="0.6" fill="rgba(114,162,240,0.04)" />
      <circle cx="42" cy="18" r="1.5" stroke="rgba(139,92,246,0.25)" strokeWidth="0.6" fill="rgba(139,92,246,0.04)" />
      <circle cx="50" cy="28" r="1" stroke="rgba(0,229,255,0.2)" strokeWidth="0.5" fill="none" />

      {/* Connecting dotted arcs — shards separated */}
      <path d="M25 30C28 38 38 40 44 36" stroke="rgba(114,162,240,0.12)" strokeWidth="0.6" strokeDasharray="2 3" fill="none" />

      {/* Shield outline around left shard */}
      <path
        d="M20 10L30 15V22C30 28 26 32 20 35C14 32 10 28 10 22V15L20 10Z"
        stroke="rgba(114,162,240,0.12)"
        strokeWidth="0.6"
        fill="none"
      />

      <defs>
        <radialGradient id="keyBgGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgb(114,162,240)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="keyFracture" x1="31" y1="32" x2="32" y2="37">
          <stop offset="0%" stopColor="rgb(0,229,255)" />
          <stop offset="100%" stopColor="rgb(139,92,246)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
