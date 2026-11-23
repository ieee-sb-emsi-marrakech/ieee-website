import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface YearSelectorProps {
    years: readonly string[] | string[];
    currentYear: string;
    onYearChange: (year: string) => void;
    className?: string;
}

export default function YearSelector({
    years,
    currentYear,
    onYearChange,
    className = "",
}: YearSelectorProps) {
    const currentIndex = years.indexOf(currentYear);
    // Assuming years are ordered from newest to oldest: e.g. ["2026/2027", "2025/2026", "2024/2025"]
    // Left arrow goes back in time (older year: index + 1)
    // Right arrow goes forward in time (newer year: index - 1)
    const canGoOlder = currentIndex < years.length - 1 && currentIndex !== -1;
    const canGoNewer = currentIndex > 0;

    const handleOlder = () => {
        if (canGoOlder) {
            onYearChange(years[currentIndex + 1]);
        }
    };

    const handleNewer = () => {
        if (canGoNewer) {
            onYearChange(years[currentIndex - 1]);
        }
    };

    return (
        <div className={`inline-flex items-center justify-center gap-3 sm:gap-5 bg-ieee-navy-light/60 border border-white/10 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 backdrop-blur-md shadow-soft ${className}`}>
            <button
                type="button"
                onClick={handleOlder}
                disabled={!canGoOlder}
                aria-label="Previous academic year"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-ieee-gold/30 bg-ieee-navy/80 text-ieee-gold hover:bg-ieee-gold hover:text-ieee-navy hover:border-ieee-gold transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:shadow-gold-glow active:scale-95 cursor-pointer"
            >
                <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div className="min-w-[120px] sm:min-w-[140px] text-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentYear}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="block font-black text-xl sm:text-2xl text-ieee-gold tracking-widest select-none"
                    >
                        {currentYear}
                    </motion.span>
                </AnimatePresence>
            </div>

            <button
                type="button"
                onClick={handleNewer}
                disabled={!canGoNewer}
                aria-label="Next academic year"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-ieee-gold/30 bg-ieee-navy/80 text-ieee-gold hover:bg-ieee-gold hover:text-ieee-navy hover:border-ieee-gold transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:shadow-gold-glow active:scale-95 cursor-pointer"
            >
                <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
        </div>
    );
}
