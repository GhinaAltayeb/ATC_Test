import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { VscClose } from "react-icons/vsc";
import { IoMdPhonePortrait } from "react-icons/io";

const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Customers", href: "#customers" },
    { label: "Projects", href: "#projects" },
    { label: (<><IoMdPhonePortrait size={15} fill="var(--color-gray)" className="inline-block mr-2" /> 1-300-123-1234</>), href: "#footer" },
    { label: "Table", href: "/ATC_Test/table" }
]

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className="fixed bg-primary p-1 top-6 max-md:right-6 md:left-6 z-50 text-white"
                onClick={() => setOpen(!open)}
            >
                {open ? <VscClose size={28} /> : <HiOutlineBars3BottomRight size={28} />}
            </button>

            {/* menu */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ y: -180, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -180, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed left-1/3 w-2xl h-[100px] inset-0 z-40 font-semibold
                        bg-white flex items-center justify-center gap-5 max-md:hidden"
                    >
                        <button
                            className="absolute top-6 right-6 text-white"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                        >
                            <VscClose size={28} />
                        </button>

                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(true)}
                                className="text-primary text-small uppercase tracking-wide hover:text-secondary transition flex items-center "
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40 md:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 left-0 z-50 h-screen w-[75%] max-w-sm bg-white py-5 flex flex-col md:hidden"
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="px-8 py-3 text-primary text-small uppercase tracking-wide hover:bg-secondary hover:text-white transition flex items-center"
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}
