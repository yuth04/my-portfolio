    //   <motion.figure
    //         initial={{ opacity: 0, scale: 0.9, y: 30 }}
    //         animate={{ opacity: 1, scale: 1, y: 0 }}
    //         transition={{
    //           duration: 0.7,
    //           delay: 0.25,
    //           ease: [0.22, 1, 0.36, 1],
    //         }}
    //         whileHover={{ y: -8, transition: { duration: 0.3 } }}
    //         className="relative m-0 w-full max-w-[290px] justify-self-center lg:justify-self-end group cursor-pointer"
    //       >
    //         {/* Animated background ambient glow */}
    //         <div
    //           aria-hidden
    //           className="absolute -inset-x-6 -inset-y-4 rounded-full
    //                      bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-violet-600/30
    //                      opacity-70 blur-3xl animate-pulse"
    //         />

    //         {/* Main glassmorphism image container */}
    //         <div
    //           className="relative overflow-hidden rounded-[32px]
    //                      border border-white/20 dark:border-white/10
    //                      bg-white/10 dark:bg-[#0c0a18]/40 backdrop-blur-md
    //                      shadow-[0_22px_70px_-10px_rgba(124,58,237,0.25)]
    //                      dark:shadow-[0_22px_70px_-10px_rgba(0,0,0,0.7)]
    //                      transition-all duration-500 ease-out
    //                      group-hover:border-violet-500/40
    //                      group-hover:shadow-[0_25px_80px_-10px_rgba(124,58,237,0.4)]"
    //         >
    //           <img
    //             src={logo}
    //             alt="Phearak Yuth at his laptop"
    //             className="block w-full h-auto object-cover aspect-[4/5]
    //                        transition-transform duration-700 ease-out
    //                        group-hover:scale-105"
    //           />

    //           {/* Internal subtle lighting overlay */}
    //           <div
    //             className="absolute inset-0 rounded-[32px]
    //                        bg-gradient-to-t from-[#0C0A18]/60 via-transparent to-white/10
    //                        pointer-events-none"
    //           />
    //         </div>
    //       </motion.figure>