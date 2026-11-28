import { motion } from "framer-motion";
import { galaxyArmA, galaxyArmB, galaxyDust } from "../data/galaxy";

export default function HeroGalaxy() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        e.currentTarget.style.setProperty("--rx", `${-y * 8}deg`);
        e.currentTarget.style.setProperty("--ry", `${x * 8}deg`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.setProperty("--rx", "0deg");
        e.currentTarget.style.setProperty("--ry", "0deg");
      }}
      style={{ perspective: 1100 }}
      className="relative m-0 w-full max-w-[420px] aspect-square
                 justify-self-center lg:justify-self-end group cursor-pointer select-none
                 [transform-style:preserve-3d]"
    >
      <div
        className="relative h-full w-full [transform-style:preserve-3d]
                   [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]
                   transition-transform duration-300 ease-out will-change-transform"
      >
        {/* ===== NEBULA CLOUDS ===== */}
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full blur-3xl opacity-70
                     bg-[conic-gradient(from_0deg,
                         rgba(124,58,237,0.0)_0deg,
                         rgba(124,58,237,0.55)_45deg,
                         rgba(236,72,153,0.35)_120deg,
                         rgba(34,211,238,0.45)_200deg,
                         rgba(139,92,246,0.5)_300deg,
                         rgba(124,58,237,0.0)_360deg)]"
        />
        <motion.div
          aria-hidden
          animate={{ rotate: -360 }}
          transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
          className="absolute inset-6 rounded-full blur-3xl opacity-50
                     bg-[conic-gradient(from_180deg,
                         rgba(236,72,153,0.5),
                         transparent_40%,
                         rgba(34,211,238,0.5),
                         transparent_80%)]"
        />

        {/* ===== DUST PARTICLES (extra tech as faint stars) ===== */}
        {galaxyDust.map((s, i) => {
          const angle = (i / galaxyDust.length) * 360;
          const radius = 44 + (i % 3) * 2;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * radius;
          const y = 50 + Math.sin(rad) * radius;
          const Icon = s.icon;
          return (
            <motion.div
              key={s.name}
              aria-hidden
              className="absolute -translate-x-1/2 -translate-y-1/2
                         grid h-6 w-6 place-items-center rounded-full
                         bg-white/40 dark:bg-white/5
                         backdrop-blur-sm opacity-60"
              style={{ top: `${y}%`, left: `${x}%` }}
              animate={{ opacity: [0.25, 0.6, 0.25] }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              <Icon size={11} className={s.color} />
            </motion.div>
          );
        })}

        {/* ===== ARM A — main stack (clockwise) ===== */}
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {galaxyArmA.map((s, i) => {
            const angle = (i / galaxyArmA.length) * 360;
            const radius = 42;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * radius;
            const y = 50 + Math.sin(rad) * radius;
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`flex items-center gap-1.5 rounded-full
                              border px-2 py-1 backdrop-blur-md
                              ${s.bg}
                              shadow-[0_0_18px_rgba(139,92,246,0.55)]`}
                  title={s.name}
                >
                  <Icon size={13} className={s.color} />
                  <span
                    className="text-[10px] font-bold
                               text-slate-800 dark:text-slate-100
                               whitespace-nowrap"
                  >
                    {s.name}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* ===== ARM B — secondary stack (counter-clockwise) ===== */}
        <motion.div
          aria-hidden
          animate={{ rotate: -360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {galaxyArmB.map((s, i) => {
            const angle = (i / galaxyArmB.length) * 360 + 22.5;
            const radius = 34;
            const rad = (angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * radius;
            const y = 50 + Math.sin(rad) * radius;
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${y}%`, left: `${x}%` }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 48,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`flex items-center justify-center rounded-full
                              border p-1.5 backdrop-blur-md
                              ${s.bg}
                              shadow-[0_0_14px_rgba(236,72,153,0.5)]`}
                  title={s.name}
                >
                  <Icon size={14} className={s.color} />
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* ===== OUTER DASHED ORBIT ===== */}
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full
                     border border-dashed
                     border-violet-400/30 dark:border-violet-300/20"
        />

        {/* ===== SHOOTING STARS ===== */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            aria-hidden
            className="absolute h-px w-20 origin-left
                       bg-gradient-to-r from-transparent via-white to-transparent
                       shadow-[0_0_8px_1px_rgba(255,255,255,0.8)]"
            style={{ top: `${20 + i * 25}%`, left: "8%", rotate: "-25deg" }}
            animate={{ x: ["-40px", "360px"], opacity: [0, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 3.5,
              repeatDelay: 6,
              ease: "easeOut",
            }}
          />
        ))}

        {/* ===== GALACTIC CORE (no text — rotating tech prism) ===== */}
        <div className="absolute inset-[30%] grid place-items-center">
          {/* outer pulsing violet glow */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full blur-2xl
                       bg-[radial-gradient(circle,#a78bfa_0%,#7c3aed_40%,transparent_70%)]"
          />
          {/* pink secondary glow */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute inset-0 rounded-full blur-3xl
                       bg-[radial-gradient(circle,#ec4899_0%,transparent_70%)]"
          />

          {/* glass core */}
          <div
            className="relative grid h-24 w-24 md:h-28 md:w-28 place-items-center rounded-full
                       border border-white/50 dark:border-white/25
                       bg-white/90 dark:bg-[#0c0a18]/85 backdrop-blur-xl
                       shadow-[0_0_50px_14px_rgba(139,92,246,0.55)]
                       transition-transform duration-500
                       group-hover:scale-110 overflow-hidden"
          >
            {/* inner highlight */}
            <div
              aria-hidden
              className="absolute inset-1 rounded-full
                         bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),transparent_55%)]
                         dark:bg-[radial-gradient(circle_at_30%_25%,rgba(167,139,250,0.5),transparent_55%)]"
            />

            {/* rotating conic gradient ring inside the glass */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full opacity-40
                         bg-[conic-gradient(from_0deg,
                             #7c3aed, #ec4899, #22d3ee, #7c3aed)]
                         blur-[6px]"
            />

            {/* three orbiting tech icons in a tiny triangle */}
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              {[galaxyArmA[0], galaxyArmA[1], galaxyArmA[2]].map((s, i) => {
                const angle = (i / 3) * 360 - 90; // start at top
                const rad = (angle * Math.PI) / 180;
                const r = 26; // % radius inside the core
                const x = 50 + Math.cos(rad) * r;
                const y = 50 + Math.sin(rad) * r;
                const Icon = s?.icon;
                if (!Icon) return null;
                return (
                  <div
                    key={s.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: `${y}%`, left: `${x}%` }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="grid h-6 w-6 place-items-center rounded-full
                                 bg-white/80 dark:bg-white/10 backdrop-blur-sm
                                 border border-white/60 dark:border-white/20"
                      title={s.name}
                    >
                      <Icon size={12} className={s.color} />
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* center pulsing spark */}
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.4, 1], opacity: [0.9, 0.4, 0.9] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-2.5 w-2.5 rounded-full bg-violet-500
                         shadow-[0_0_14px_4px_rgba(139,92,246,0.9)]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}