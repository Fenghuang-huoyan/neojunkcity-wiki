export const siteConfig = {
  siteName: 'Neo Junk City Guide',
  domain: 'neojunkcity.wiki',
  url: 'https://neojunkcity.wiki',
  gameTitle: 'Neo Junk City',
  steamAppId: 2378230,
  steamUrl: 'https://store.steampowered.com/app/2378230/Neo_Junk_City/',
  supportEmail: '16bitjosh@gmail.com',
  social: [
    { href: 'http://nefariouslair.com/neo-junk-city-press-kit/', label: 'Press kit' },
    { href: 'http://www.nefariouslair.com/', label: 'Nefarious Lair' },
    { href: 'https://discord.gg/nefarious', label: 'Discord' },
    { href: 'https://bsky.app/profile/jhano.bsky.social', label: 'Bluesky' },
    { href: 'https://www.reddit.com/r/NeoJunkCity/', label: 'Reddit' },
    { href: 'https://www.youtube.com/channel/UCCM8-Sb6MrkyugsYcUfbpfQ', label: 'YouTube' },
    { href: 'https://x.com/JoshHano', label: 'X' },
  ],
  developer: 'Starblade Games',
  publisher: 'Starblade Games',
  tagline: 'Unofficial English fan guide for the point-and-click action-RPG in the Drowned City.',
  locale: 'en',
  themeColor: '#07060f',
  contentRoot: 'neojunkcity',
  homeTitle: 'Neo Junk City Guide — Release, Demo, and the Drowned City',
  homeDescription:
    'Unofficial English guide to Neo Junk City (Steam AppID 2378230). Starblade Games, planned release 9 Nov 2026, a point-and-click action-RPG with shoot-outs and arcade racing. Not affiliated with the developer or Valve.',
  analytics: {
    gaId: 'G-Z2CVFHMYE5',
  },
  art: {
    hero: '/images/official/steam/library-hero.jpg',
    heroAlt:
      'Official Steam library hero for Neo Junk City: a blonde figure in a dark coat aims a handgun in a neon city, with a police car, a large green figure, and a pink sunset skyline',
    header: '/images/official/steam/header.jpg',
    headerAlt:
      'Official Steam header for Neo Junk City: the neon title beside a blonde figure aiming a handgun against a pink city skyline',
    ogImage: '/images/official/steam/library-hero.jpg',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'neojunkcity.wiki is an unofficial fan-made guide for Neo Junk City. It is not affiliated with, endorsed by, or sponsored by Starblade Games, Josh Hano, Valve, or Steam. All game content, names, artwork, and trademarks belong to their respective owners. The Steam legal notice calls Neo Junk City a trademark of Josh Hano. This site does not sell the game, recover accounts, or invent puzzle solutions. The support URL and email in the footer are the ones printed on the Steam store page. Mail sent there does not reach the people who edit this wiki.',
  nav: [
    { href: '/guide', label: 'Guide' },
    { href: '/walkthrough', label: 'Walkthrough' },
    { href: '/locations', label: 'Locations' },
  ],
  moreNav: [
    { href: '/about', label: 'About' },
  ],
  footerNav: [
    { href: '/guide', label: 'Guide' },
    { href: '/walkthrough', label: 'Walkthrough' },
    { href: '/locations', label: 'Locations' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 7 Nov 2026',
    detail:
      'Store text, platforms, languages, categories, system requirements, and the demo listing are from the Steam appdetails API and the English store page on 7 Nov 2026. The press kit on nefariouslair.com was read the same day and still prints release TBD. No launch client was played. The full-game appdetails payload did not include a public price.',
  },
  databases: [
    {
      href: 'https://store.steampowered.com/app/2378230/Neo_Junk_City/',
      label: 'Steam store page',
    },
    {
      href: 'https://store.steampowered.com/app/2474130/Neo_Junk_City_Demo/',
      label: 'Steam demo page',
    },
    {
      href: 'http://nefariouslair.com/neo-junk-city-press-kit/',
      label: 'Press kit',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
