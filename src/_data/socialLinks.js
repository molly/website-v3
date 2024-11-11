const sortBy = require("lodash.sortby");

const data = [
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/molly.wiki",
    username: "@molly.wiki",
    active: true,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/298979974029901827",
    username: "molly0xfff",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/molly0xfff/",
    username: "molly0xfff",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mollyawhite/",
    username: "mollyawhite",
  },
  {
    label: "Mastodon",
    href: "https://hachyderm.io/@molly0xfff",
    username: "@molly0xfff@hachyderm.io",
    active: true,
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/user/watchfulprotector",
    username: "watchfulprotector",
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@molly0xfff",
    username: "molly0xfff",
    active: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@molly0xfff",
    username: "molly0xfff",
    active: true,
  },
  {
    label: "Twitch",
    href: "https://twitch.tv/molly0xFFF",
    username: "molly0xfff",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/molly0xFFF",
    username: "molly0xfff",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@molly0xfff",
    username: "molly0xfff",
    active: true,
  },
];

module.exports = sortBy(data, "label");
