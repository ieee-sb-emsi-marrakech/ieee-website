import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { teamByYear, TEAM_YEARS, DEFAULT_TEAM_YEAR } from "@/data/team";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Mail, ArrowLeft, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YearSelector from "@/components/YearSelector";

export default function TeamPage() {
    const [selectedYear, setSelectedYear] = useState<string>(DEFAULT_TEAM_YEAR);
    const members = teamByYear[selectedYear] || [];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
            <Navbar />
            <main className="pt-24 bg-ieee-navy min-h-screen">
                <section className="py-12 md:py-24">
                    <div className="container px-4 mx-auto">
                        <div className="mb-8">
                            <Link to="/#team" className="inline-flex items-center text-ieee-gold hover:text-white transition-colors">
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </Link>
                        </div>
                        <div className="text-center mb-16">
                            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                Our <span className="text-ieee-gold">Full Team</span>
                            </h1>
                            <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-6">
                                Meet all the dedicated students leading the IEEE Student Branch EMSI Marrakech.
                            </p>
                            <div className="flex justify-center mt-6">
                                <YearSelector
                                    years={TEAM_YEARS}
                                    currentYear={selectedYear}
                                    onYearChange={setSelectedYear}
                                />
                            </div>
                        </div>

                        {members.length > 0 ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedYear}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
                                >
                                    {members.map((member, index) => (
                                        <motion.div
                                            key={`${selectedYear}-${member.name}-${index}`}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: index * 0.03 }}
                                        >
                                            <Card className="overflow-hidden border-none bg-ieee-navy-light shadow-soft group transition-all hover:-translate-y-2 hover:shadow-gold-glow rounded-3xl h-full border border-transparent hover:border-ieee-gold/20">
                                                <CardContent className="p-0">
                                                    <div className="relative aspect-square overflow-hidden bg-ieee-navy">
                                                        <div className="absolute inset-0 flex items-center justify-center text-ieee-gold/10 font-black text-6xl select-none">
                                                            {member.name.charAt(0)}
                                                        </div>
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            loading="lazy"
                                                            className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-ieee-navy-light via-transparent to-transparent opacity-60" />
                                                    </div>
                                                    <div className="p-6 text-center">
                                                        <h3 className="text-xl font-bold text-white mb-1 transition-colors group-hover:text-ieee-gold">{member.name}</h3>
                                                        <p className="text-sm font-medium text-ieee-gold/80 mb-6 uppercase tracking-wider">{member.role}</p>

                                                        <div className="flex justify-center gap-4">
                                                            {member.links.gmail && (
                                                                <a href={`mailto:${member.links.gmail}`} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition-all border border-white/5 hover:border-red-500/40">
                                                                    <Mail className="w-5 h-5" />
                                                                </a>
                                                            )}
                                                            {member.links.linkedin && member.links.linkedin !== "#" && (
                                                                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ieee-blue/20 transition-all border border-white/5 hover:border-ieee-blue/40">
                                                                    <Linkedin className="w-5 h-5" />
                                                                </a>
                                                            )}
                                                            {member.links.github && member.links.github !== "#" && (
                                                                <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20">
                                                                    <Github className="w-5 h-5" />
                                                                </a>
                                                            )}
                                                            {member.links.instagram && member.links.instagram !== "#" && (
                                                                <a href={member.links.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 transition-all border border-white/5 hover:border-pink-500/40">
                                                                    <Instagram className="w-5 h-5" />
                                                                </a>
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <div className="text-center py-16 px-4 bg-ieee-navy-light/40 border border-white/5 rounded-3xl max-w-lg mx-auto">
                                <Users className="w-12 h-12 text-ieee-gold/40 mx-auto mb-3" />
                                <h3 className="text-lg font-bold text-white mb-2">No team members listed for {selectedYear}</h3>
                                <p className="text-gray-400 text-sm">
                                    Team records for this mandate year are currently being updated.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
