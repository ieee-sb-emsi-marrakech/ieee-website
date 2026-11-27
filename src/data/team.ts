export interface TeamMember {
    name: string;
    role: string;
    image: string;
    links: {
        github?: string;
        linkedin?: string;
        instagram?: string;
        gmail?: string;
    };
}

export const TEAM_YEARS = ["2026/2027", "2025/2026", "2024/2025"] as const;
export type TeamYear = (typeof TEAM_YEARS)[number];
export const DEFAULT_TEAM_YEAR: TeamYear = "2026/2027";

/* =========================================================================
   2026 / 2027 Team (Current Mandate)
   ========================================================================= */
const team2026_2027: TeamMember[] = [
    // 1. President & Vice President (Leadership)
    {
        name: "Youness SBAI",
        role: "President",
        image: "/assets/team/2026-2027/youness_sbai.webp",
        links: {
            gmail: "youness.sbai.work@gmail.com",
            linkedin: "https://www.linkedin.com/in/y-sbai/",
            github: "https://github.com/SBAI-Youness",
        },
    },
    {
        name: "Nour El Houda NASSEF",
        role: "Vice President",
        image: "/assets/team/2026-2027/nour-el-houda_nassef.webp",
        links: {
            gmail: "nourelhouda.nassef@gmail.com",
            linkedin: "https://www.linkedin.com/in/nour-el-houda-nassef-b5b149280",
            instagram: "https://www.instagram.com/iug_ligh.ttt",
            github: "https://github.com/Nour-El-Houda08",
        },
    },
    {
        name: "Ayoub EL AANBRI",
        role: "Treasurer",
        image: "/assets/team/2026-2027/ayoub_el-aanbri.webp",
        links: {
            gmail: "ayoubelaanbri@gmail.com",
            linkedin: "https://www.linkedin.com/in/ayoub-el-aanbri-759a33345",
            instagram: "https://www.instagram.com/Ayoub_sud_12",
        },
    },
    {
        name: "Hiba BENRHANEM",
        role: "Secretary",
        image: "/assets/team/2026-2027/hiba_benrhanem.webp",
        links: {
            gmail: "hibabenrhanem24@gmail.com",
            linkedin: "https://www.linkedin.com/in/hiba-benrhanem-85b199422",
            instagram: "https://www.instagram.com/oukiiiii_ii_ii_ii_ii_ii_ii_iii",
        },
    },
    {
        name: "Marwane NMILI",
        role: "Secretary",
        image: "/assets/team/2026-2027/marwane_nmili.webp",
        links: {
            gmail: "marwanenmili@hotmail.com",
            linkedin: "https://www.linkedin.com/in/marwane-nmili-01a9493b8/",
            instagram: "https://www.instagram.com/marwane.nmili/",
        },
    },
    {
        name: "Hiba BETTY",
        role: "Events and Competitions Manager",
        image: "/assets/team/2026-2027/hiba_betty.webp",
        links: {
            gmail: "bettyhiba72@gmail.com",
            linkedin: "https://www.linkedin.com/in/hiba-betty-28ab62313",
            instagram: "https://www.instagram.com/be.88y",
        },
    },
    {
        name: "Abderrahmane EL ADNANI",
        role: "Events and Competitions Assistant",
        image: "/assets/team/2026-2027/abderahmane_el-adnani.webp",
        links: {
            gmail: "m.a.eladnani1@gmail.com",
            linkedin: "https://www.linkedin.com/in/mly-abderrahmane-el-adnani-b4477b298/",
            instagram: "https://www.instagram.com/m_a_eladnani/",
            github: "https://github.com/M-A-E-A",
        },
    },
    {
        name: "Salah Eddine EL KHAMSI",
        role: "Equipment and Logistics Manager",
        image: "/assets/team/2026-2027/salah-eddine_el-khamsi.webp",
        links: {
            gmail: "salah.elkhamsi@gmail.com",
            linkedin: "https://www.linkedin.com/in/salah-eddine-el-khamsi",
            instagram: "https://www.instagram.com/salah_eddine_el_khamsi",
        },
    },
    {
        name: "Fatima Ezzahare MOUHSINE",
        role: "Equipment and Logistics Assistant",
        image: "/assets/team/2026-2027/fatima-ezzahra_mouhsine.webp",
        links: {
            gmail: "fezzhra0@gmail.com",
            linkedin: "https://www.linkedin.com/in/fatima-ezzharae-mouhsine-2270b628a",
            instagram: "https://www.instagram.com/ezzhra79",
        },
    },
    {
        name: "Aya EDDANIAOUI",
        role: "Internal Coordinator",
        image: "/assets/team/2025-2026/aya_eddaniaoui.webp",
        links: {
            gmail: "eddaniaouiaya@gmail.com",
            linkedin: "https://www.linkedin.com/in/aya-eddaniaoui-464713344",
            instagram: "https://www.instagram.com/aya_ma.na",
            github: "https://github.com/aya896",
        },
    },
    {
        name: "Ouissal BELFATMI",
        role: "External Coordinator",
        image: "/assets/team/2026-2027/ouissal_belfatmi.webp",
        links: {
            gmail: "belfatmiwissal2@gmail.com",
            instagram: "https://www.instagram.com/_wissal.1034_",
        },
    },
    {
        name: "Rayan HADDI",
        role: "IT and Website Manager",
        image: "/assets/team/2026-2027/rayan_haddi.webp",
        links: {
            gmail: "rayanhaddipro2@gmail.com",
            linkedin: "https://www.linkedin.com/in/rayan-haddi",
            instagram: "https://www.instagram.com/ryn_hdi",
            github: "https://github.com/vNullptr",
        },
    },
    {
        name: "Abdellah ZAHID",
        role: "IT and Website Assistant",
        image: "/assets/team/2026-2027/abdellah_zahid.webp",
        links: {
            gmail: "zahid.abdellah01@gmail.com",
            linkedin: "https://www.linkedin.com/in/abdellah-zahid-ab7b9a321",
            instagram: "https://www.instagram.com/iv_zvh1d",
            github : "https://github.com/ZAHID-0",
        },
    },
    {
        name: "Hiba CHAOUI",
        role: "Social Media Manager",
        image: "/assets/team/2026-2027/hiba_chaoui.webp",
        links: {
            gmail: "hiba.chaoui221@gmail.com",
            linkedin: "https://www.linkedin.com/in/hiba-chaoui-661a52302",
            instagram: "https://www.instagram.com/they__call_me_hibaa",
        },
    },
    {
        name: "Rouaa ALHAREEBI",
        role: "Communication Manager",
        image: "/assets/team/2026-2027/rouaa_alhareebi.webp",
        links: {
            gmail: "rouaaalhareebi@gmail.com",
            linkedin: "https://www.linkedin.com/in/rouaa-alhoraibi-272471352",
            instagram: "https://www.instagram.com/rouaaalhoraibi",
        },
    },
    {
        name: "Akram OUDDIR",
        role: "Designer",
        image: "/assets/team/2026-2027/akram_ouddir.webp",
        links: {
            gmail: "ouddirakram@gmail.com",
            linkedin: "https://www.linkedin.com/in/akram-ouddir-a835372ab",
            instagram: "https://www.instagram.com/akghaaam._.prv",
            github: "https://akramouddir.netlify.app",
        },
    },
    {
        name: "Hiba GHADFI",
        role: "Video Editor",
        image: "/assets/team/2026-2027/hiba_ghadfi.webp",
        links: {
            gmail: "hibaghadfi0@gmail.com",
            linkedin: "https://www.linkedin.com/in/hiba-ghadfi-614844330",
            instagram: "https://www.instagram.com/hiba.gh18",
        },
    },
];

/* =========================================================================
   2025 / 2026 Team (Previous Mandate)
   ========================================================================= */
const team2025_2026: TeamMember[] = [
    // 1. President & Vice President
    {
        name: "Yahya LOUKILI",
        role: "President",
        image: "/assets/team/2025-2026/yahya_loukili.webp",
        links: {
            gmail: "loukiliyahya17@gmail.com",
            linkedin: "https://www.linkedin.com/in/loukili-yahya-009338313/",
            instagram: "https://www.instagram.com/loukyahya_",
        },
    },
    {
        name: "Imane HAJAOUI",
        role: "Vice President",
        image: "/assets/team/2025-2026/imane_hajaoui.webp",
        links: {
            gmail: "imanehajaoui194@gmail.com",
            linkedin: "https://www.linkedin.com/in/imane-hajaoui",
            instagram: "https://www.instagram.com/imane__hj04",
        },
    },
    {
        name: "Amina TAOURIRI",
        role: "Treasurer",
        image: "/assets/team/2025-2026/amina_taouriri.webp",
        links: {
            linkedin: "https://www.linkedin.com/in/taouriri-amina-557095335",
            instagram: "https://www.instagram.com/aminaa_taouriri",
        },
    },
    {
        name: "Basma LAHMIMSI",
        role: "Secretary",
        image: "/assets/team/2025-2026/basma_lahmimsi.webp",
        links: {
            gmail: "basmalahmimsi1@gmail.com",
            linkedin: "https://www.linkedin.com/in/basmalahmimsi",
            instagram: "https://www.instagram.com/basma.lahmimsi",
            github: "https://github.com/BasmaHM1",
        },
    },
    {
        name: "Hiba BETTY",
        role: "Secretary",
        image: "/assets/team/2025-2026/hiba_betty.webp",
        links: {
            gmail: "bettyhiba72@gmail.com",
            linkedin: "https://www.linkedin.com/in/hiba-betty-28ab62313",
            instagram: "https://www.instagram.com/be.88y",
        },
    },
    {
        name: "Yahya MIHNANE",
        role: "HR Manager",
        image: "/assets/team/2025-2026/yahya_mihnane.webp",
        links: {
            gmail: "yahyamihnane0@gmail.com",
            linkedin: "https://www.linkedin.com/in/yahya-mihnane-098206250",
            instagram: "https://www.instagram.com/yahyamihnane",
            github: "https://github.com/Yahyamih",
        },
    },
    {
        name: "Ikram AIT OMAR",
        role: "Coordinator",
        image: "/assets/team/2025-2026/ikram_ait-omar.webp",
        links: {
            gmail: "ikramaitomar01@gmail.com",
            linkedin: "https://www.linkedin.com/in/ikram-ait-omar-bb393b285",
            instagram: "https://www.instagram.com/_ikramaor",
        },
    },
    {
        name: "Nour El Houda NASSEF",
        role: "Events and Competitions Manager",
        image: "/assets/team/2025-2026/nour-el-houda_nassef.webp",
        links: {
            gmail: "nourelhouda.nassef@gmail.com",
        },
    },
    {
        name: "Aya EDDANIAOUI",
        role: "Events and Competitions Assistant",
        image: "/assets/team/2025-2026/aya_eddaniaoui.webp",
        links: {
            gmail: "eddaniaouiaya@gmail.com",
            linkedin: "https://www.linkedin.com/in/aya-eddaniaoui-464713344",
            instagram: "https://www.instagram.com/aya_ma.na",
            github: "https://github.com/aya896",
        },
    },
    {
        name: "Marwa BOULLY",
        role: "Equipment and Logistic Manager",
        image: "/assets/team/2025-2026/marwa_boully.webp",
        links: {
            gmail: "boullymarwa9@gmail.com",
            linkedin: "https://www.linkedin.com/in/marwa-boully-4b7717313",
            instagram: "https://www.instagram.com/_marwa_boully_",
            github: "https://github.com/MarwaBoully",
        },
    },
    {
        name: "Fatima-Ezzahra MOUHSINE",
        role: "Equipment and Logistic Assistant",
        image: "/assets/team/2025-2026/fatima-ezzahra_mouhsine.webp",
        links: {
            gmail: "fezzhra0@gmail.com",
            linkedin: "https://www.linkedin.com/in/fatima-ezzharae-mouhsine-2270b628a",
            instagram: "https://www.instagram.com/ezzhra79",
        },
    },
    {
        name: "Youness SBAI",
        role: "IT and Website Manager",
        image: "/assets/team/2025-2026/youness_sbai.webp",
        links: {
            gmail: "youness.sbai.work@gmail.com",
            linkedin: "https://www.linkedin.com/in/y-sbai/",
            github: "https://github.com/SBAI-Youness",
        },
    },
    {
        name: "Taib MOUTASAOUI",
        role: "IT and Website Assistant",
        image: "/assets/team/2025-2026/taib_moutasaoui.webp",
        links: {
            gmail: "taibmoutasaoui@gmail.com",
            linkedin: "http://linkedin.com/in/taib-moutasaoui-b03411239",
            instagram: "https://www.instagram.com/tibo_elm",
            github: "https://github.com/Tibo97",
        },
    },
    {
        name: "Rouaa ALHAREEBI",
        role: "Communication and Social Media Manager",
        image: "/assets/team/2025-2026/rouaa_alhareebi.webp",
        links: {
            gmail: "rouaaalhareebi@gmail.com",
            linkedin: "https://www.linkedin.com/in/rouaa-alhoraibi-272471352",
        },
    },
    {
        name: "Hiba CHAOUI",
        role: "Communication and Social Media Manager",
        image: "/assets/team/2025-2026/hiba_chaoui.webp",
        links: {
            gmail: "hiba.chaoui221@gmail.com",
            linkedin: "https://www.linkedin.com/in/hiba-chaoui-661a52302",
        },
    },
    {
        name: "Salah Eddine EL KHAMSI",
        role: "Designer",
        image: "/assets/team/2025-2026/salah-eddine_el-khamsi.webp",
        links: {
            gmail: "elkhamsi.conan@gmail.com",
            linkedin: "https://www.linkedin.com/in/salah-eddine-el-khamsi",
            instagram: "https://www.instagram.com/salaheddinelkhamsi",
        },
    },
    {
        name: "Abderahmane ELADNANI",
        role: "Designer",
        image: "/assets/team/2025-2026/abderahmane_el-adnani.webp",
        links: {
            gmail: "m.a.eladnani1@gmail.com",
            linkedin: "https://www.linkedin.com/in/mly-abderrahmane-el-adnani-b4477b298/",
            instagram: "https://www.instagram.com/m_a_eladnani/",
            github: "https://github.com/M-A-E-A",
        },
    },
    {
        name: "Ayoub EL AANBRI",
        role: "Photographer",
        image: "/assets/team/2025-2026/ayoub_el-aanbri.webp",
        links: {
            gmail: "ayoubelaanbri@gmail.com",
            linkedin: "https://www.linkedin.com/in/ayoub-el-aanbri-759a33345",
            instagram: "https://www.instagram.com/Ayoub_sud_12",
        },
    },
    {
        name: "Abdelqodouss HADADI",
        role: "Video Editor",
        image: "/assets/team/2025-2026/abdlqodos_hadadi.webp",
        links: {
            gmail: "hadadiabdelqodouss.2022@gmail.com",
            linkedin: "https://www.linkedin.com/in/abdelqodouss-hadadi-83a302332/",
            instagram: "https://www.instagram.com/abdelqodouss_hadadi/",
        },
    },
];

/* =========================================================================
   2024 / 2025 Team
   ========================================================================= */
const team2024_2025: TeamMember[] = [
    {
        name: "Yahya LOUKILI",
        role: "President",
        image: "/assets/team/2024-2025/yahya_loukili.webp",
        links: {
            gmail: "loukiliyahya17@gmail.com",
            linkedin: "https://www.linkedin.com/in/loukili-yahya-009338313/",
            instagram: "https://www.instagram.com/loukyahya_",
        },
    },
    {
        name: "Imane HAJAOUI",
        role: "Equipment & Logistics Manager",
        image: "/assets/team/2024-2025/imane_hajaoui.webp",
        links: {
            gmail: "imanehajaoui194@gmail.com",
            linkedin: "https://www.linkedin.com/in/imane-hajaoui",
            instagram: "https://www.instagram.com/imane__hj04",
        },
    },
    {
        name: "Amina TAOURIRI",
        role: "Treasurer",
        image: "/assets/team/2024-2025/amina_taouriri.webp",
        links: {
            linkedin: "https://www.linkedin.com/in/taouriri-amina-557095335",
            instagram: "https://www.instagram.com/aminaa_taouriri",
        },
    },
];



export const teamByYear: Record<string, TeamMember[]> = {
    "2026/2027": team2026_2027,
    "2025/2026": team2025_2026,
    "2024/2025": team2024_2025,
};

// Default export kept for backwards-compatibility
export const teamMembers: TeamMember[] = teamByYear[DEFAULT_TEAM_YEAR];
