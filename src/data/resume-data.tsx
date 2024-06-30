import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "邱妤倢  Irene Qiu",
  initials: "IQ",
  location: "桃園市桃園區",
  locationLink: "https://www.google.com/maps/place/%E6%A1%83%E5%9C%92%E5%B8%82%E6%A1%83%E5%9C%92%E5%8D%80%E6%A1%83%E5%9C%92/@24.9745216,121.0459194,11z/data=!3m1!4b1!4m6!3m5!1s0x34681fac88406db3:0xf59b6aeea3edf81d!8m2!3d24.9917033!4d121.2989587!16zL20vMDIzMmho?entry=ttu",
  about:
    "Fake it Till You Make it.",
  summary:
    "過去半年我在緯育前端班學習，熟練掌握HTML、CSS、JavaScript和Vue等前端技術。在食品公司擔任專案助理期間，我負責數據分析和專案管理，培養了細心和分析能力。此前在醫療機構工作，我積累了優秀的行政管理和組織協調能力。我具有強烈的學習熱情和團隊合作精神，擅長解決問題並追求卓越，希望將這些特質和技能應用於前端開發，為貴公司貢獻力量。",
  avatarUrl: "https://i.pinimg.com/736x/37/f7/c0/37f7c01094522ede96ec0c334df664fd.jpg",
  //personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "iren870907@gmail.com",
    tel: "0912825273",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Irene907",
        icon: GitHubIcon,
      },
      {//考慮改成cakeresume
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "嘉南藥理大學",
      degree: "學士",
      start: "2017",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Tibame緯育中壢職訓中心",
      link: "https://www.tibame.com/",
      badges: [""],
      title: "前端工程師養成班",
      logo: ConsultlyLogo,
      start: "2023/03",
      end: "2023/07",
      description:
        "主要負責收",
    },
    {
      company: "英屬食品公司",
      //link: "https://film.io",
      badges: [""],
      title: "專案專員 (商務領導暨通路策略)",
      logo: ConsultlyLogo,
      start: "2023/06",
      end: "2023/12",
      description:
        "主要負責收集外部競品資料，系統性地收集並分析競品信息，為公司制定競爭策略提供依據。此外，我統整每月的促銷分析，並製作易於理解的簡報供內部使用。同時，我與業務團隊緊密合作，確保每月促銷價格和方案的準確執行。內部資料庫的維護和更新也是我的職責之一，我確保數據的準確性和完整性。最後，我還協助組內的日常行政事務，確保團隊運作順暢。",
    },
    {
      company: "衛生福利部桃園醫院 ",
      link: "https://www.tygh.mohw.gov.tw/",
      badges: [""],
      title: "初級專員 (企劃管理中心)",
      logo: ParabolLogo,
      start: "2022/10",
      end: "2023/05",
      description:
        "主要負責協助科內各種行政業務，確保日常運作順利進行，這包括處理病人資料管理、會議安排和檔案整理等工作。此外，我還負責準備並提交教學醫院評鑑所需資料，確保評鑑順利通過，並與相關部門協調，達成各項評鑑標準。我也撰寫和處理各類公文，確保信息的準確傳遞，並負責公文的簽署和歸檔，確保文件的規範化管理。",
    },
  ],
  skills: [
    "JavaScript",
    "Vue3",
    "Git Flow",
    "HTML5",
    "SASS",
    "Bootstrap5",
    "MySQL",
  ],
  projects: [
    {
      title: "藍色警戒 BlueAlert",
      techStack: [
        "Side Project",
        "Vue3",
        "Sass",
        "GSAP",
        "Fullcalendar",
        "PHP",
        "MySQL",
        "Git flow",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },

  ],
} as const;
