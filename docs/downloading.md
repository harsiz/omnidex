# Downloading

There's more than one way to get a file. This page covers everything from direct downloads to torrents, debrids, and automation — and the tools that make all of it faster and safer.

---

## ⚡ Download Managers

Downloading straight from your browser is fine for small files. For anything serious, a download manager is a must.

> **Why?**
>
> Browsers download files as a single connection — if it drops, you start over. Download managers split files into parallel chunks, resume broken transfers, queue hundreds of files at once, and integrate directly with file hosts. The difference in speed and convenience is night and day.

- **🏆 [JDownloader 2](https://jdownloader.org/)** — The gold standard. Handles premium file hosts, auto-solves CAPTCHAs, extracts archives, and can be controlled remotely. Free and open source.

- **💎 [Internet Download Manager (IDM)](https://www.internetdownloadmanager.com/)** — Splits downloads into segments for maximum speed. Deep browser integration. Paid (~$25), but one of the fastest options available.

- **💎 [Free Download Manager](https://www.freedownloadmanager.org/)** — A genuinely capable free alternative to IDM. Segmented downloads, built-in torrent support, and browser integration. Open source.

- **💎 [aria2](https://aria2.github.io/)** — Lightweight command-line downloader. Supports HTTP, FTP, BitTorrent, and Metalink. Scriptable and extremely fast. Open source.

- **🔗 [Motrix](https://motrix.app/)** — A clean GUI built on top of aria2. Cross-platform, open source, no fuss.

- **🔗 [Xtreme Download Manager (XDM)](https://xtremedownloadmanager.com/)** — Open source IDM alternative with browser integration and a built-in video grabber.

---

## 🗂️ Direct Download (DDL)

Direct downloads are straightforward — a link, a click, a file. No client needed.

> **Why use DDL over torrenting?**
>
> DDLs are simpler, faster to start, and don't require a VPN to use safely. They're best for one-off files where you just want something now. The downside is that links go dead and file hosts throttle free users. For large or popular content, torrenting or debrid services often beat DDL in reliability.

:::warning
General DDL sites are best for **video, audio, books, and magazines**. Avoid them for software and games — use dedicated verified sources for those.
:::

- **🏆 [Internet Archive](https://archive.org/)** — A non-profit digital library preserving the internet. Video, audio, books, software, ROMs, magazines, and historical documents. Completely free and legal.

- **💎 [SoftArchive](https://sanet.st/)** — Long-running DDL index for audio, books, comics, newspapers, and magazines.

- **🔗 [MaxRelease](https://maxrelease.net/)** — Video, audio, and magazines from scene releases.

- **🔗 [SCNLOG](https://scnlog.me/)** — Scene release tracker. Video, audio, ROMs, books.

- **🔗 [DirtyWarez](https://dirtywarez.org/)** — Video, audio, books, and comics DDL index.

### 🔍 DDL Search Engines

Search across multiple DDL sources at once instead of checking sites individually.

- **🏆 [Download CSE](https://cse.google.com/cse?cx=006516753008110874046:ohkk8gmukdu)** — Google custom search engine scoped to DDL sites. Often the fastest way to find a direct link.

- **💎 [FilePursuit](https://filepursuit.com/)** — Indexes open FTP and HTTP file servers. Surprisingly good for obscure files.

- **🔗 [Napalm FTP](https://www.searchftps.net/)** — FTP server search engine.

- **🔗 [Mamont](https://www.mmnt.ru/)** — Another FTP search engine. Use with a translator.

---

## 🌊 Torrenting

Torrenting is a peer-to-peer file sharing protocol. Instead of downloading from a single server, you pull pieces of the file from many people simultaneously.

> **Why torrent?**
>
> Torrents don't go dead. As long as someone is seeding, the file is available — sometimes for years after it disappeared everywhere else. Speeds scale with the number of seeders, and there's no file host throttling your connection. The tradeoff is that your IP is visible to other peers, which is why a VPN is strongly recommended.

:::warning
**Bind your VPN to your torrent client.** This prevents your real IP from leaking if the VPN drops. Most clients support kill switches or interface binding natively.
:::

### Torrent Clients

- **🏆 [qBittorrent](https://www.qbittorrent.org/)** — The best free, open source torrent client. No ads, no bloat, actively maintained. Available on all platforms. Supports VPN binding, RSS, and sequential downloading.

- **💎 [Deluge](https://deluge-torrent.org/)** — Lightweight and highly extensible via plugins. Great for headless or server setups.

- **💎 [Transmission](https://transmissionbt.com/)** — Minimal, fast, and open source. The default choice on Linux and macOS.

- **🔗 [rTorrent](https://github.com/rakshasa/rtorrent)** — Powerful CLI client. Pair with [Flood](https://flood.js.org/) for a clean web UI.

- **🔗 [BiglyBT](https://www.biglybt.com/)** — Feature-packed open source client with I2P support for anonymous torrenting.

### Torrent Sites

- **🏆 [1337x](https://1337x.to/)** — Large, well-organised torrent site. Video, audio, games, and software. Has multiple mirrors.

- **💎 [RuTracker](https://rutracker.org/)** — Russian tracker with an enormous, well-maintained library including rare and niche content. Free sign-up required. Use a translator.

- **💎 [RARBG Dump](https://rarbggo.org/)** — Archive of the now-defunct RARBG. Video, audio, games, books.

- **🔗 [LimeTorrents](https://www.limetorrents.lol/)** — Clean general torrent index. Video, audio, books.

### Torrent Aggregators

Search across multiple trackers simultaneously without visiting each site.

- **🏆 [Knaben](https://knaben.eu/)** — One of the best multi-tracker search engines. Fast and comprehensive.

- **💎 [BTDigg](https://btdig.com/)** — DHT-based search. Finds torrents that aren't on any indexed site.

- **🔗 [Torrent CSE](https://cse.google.com/cse?cx=006516753008110874046:--3lqvhkstk)** — Google custom search across major torrent sites.

### Private Trackers

Private trackers are invite-only communities with better speeds, content quality, and retention than public sites.

> **Why bother with private trackers?**
>
> Public torrent sites are a free-for-all. Private trackers vet their members, enforce seeding ratios, and maintain their libraries carefully. You get faster speeds, healthier torrents, and content that simply doesn't exist elsewhere — especially for music, old films, and niche media. The entry barrier is the point.

- **💎 [r/trackers](https://www.reddit.com/r/trackers/)** — Community hub for private tracker discussion, invite threads, and news.

- **💎 [OpenSignups](https://opensignups.net/)** — Lists private trackers currently open for public registration — no invite needed during open windows.

- **🔗 [Private Tracker Spreadsheet](https://hdvinnie.github.io/Private-Tracker-Spreadsheet/)** — Comprehensive breakdown of trackers by category and quality tier.

- **🔗 [Tracker Pathways](https://rentry.org/private-trackers)** — Guide to moving up through invite tiers across the ecosystem.

---

## 🔑 Debrid Services

Debrid services are one of the best-kept secrets in the downloading world.

> **What is a debrid?**
>
> A debrid service acts as a middleman between you and file hosts. You give it a link — from a premium file host, or even a magnet/torrent — and it downloads it to their high-speed servers, then serves it back to you at full speed with no throttling or waiting. It effectively turns free-tier file host speeds into premium speeds, and can stream cached torrents as instant HTTP downloads without you ever running a torrent client.
>
> For ~€3/month, Real-Debrid is arguably the best value tool in this entire guide.

- **🏆 [Real-Debrid](https://real-debrid.com/)** — The most widely supported debrid. Unlocks 50+ file hosts and caches torrents for instant HTTP downloads. ~€3/mo. Works with JDownloader, Stremio/Torrentio, Kodi, and most media apps.

- **💎 [TorBox](https://torbox.app/)** — Modern debrid with torrent, Usenet, and web download support. Has a free tier (10GB/mo). Rapidly growing app support.

- **💎 [Premiumize](https://www.premiumize.me/)** — Debrid + cloud storage combo. Supports many file hosts, includes a clean file manager. ~€9.99/mo.

- **🔗 [AllDebrid](https://alldebrid.com/)** — Similar to Real-Debrid, wide host support. ~€3/mo.

- **🔗 [Debrid-Link](https://debrid-link.com/)** — French debrid service with competitive pricing.

### Debrid Apps

- **💎 [Debrid Media Manager](https://debridmediamanager.com/)** — Browser-based UI for browsing, searching, and streaming your Real-Debrid/AllDebrid library.

- **💎 [Stremio](https://www.stremio.com/) + [Torrentio](https://torrentio.strem.fun/)** — Pair with Real-Debrid to stream cached torrents directly. No downloading required — it just plays like Netflix.

---

## ☁️ Usenet

Usenet is a decades-old discussion network that became one of the fastest and most private ways to download files.

> **Why Usenet?**
>
> Downloads happen over encrypted HTTPS at your full connection speed — no peers, no seeding ratios, no ISP flags. Files are split across binary newsgroups and retained for years. The catch: it costs money. You need a provider (~$3–10/mo) and an indexer (some are free) to find content. It's the enthusiast's choice for maximum speed and privacy.

- **🏆 [SABnzbd](https://sabnzbd.org/)** — The best Usenet downloader. Web UI, automation-ready, integrates with Sonarr/Radarr. Open source.

- **💎 [NZBGet](https://nzbget.net/)** — Lightweight, fast, and low on resources. Great for low-power devices. Open source.

- **💎 [NZBHydra2](https://github.com/theotherp/nzbhydra2)** — Meta-search across multiple NZB indexers in one interface. Open source.

- **🔗 [r/usenet](https://www.reddit.com/r/usenet/)** — Community hub for provider recommendations, deals, and setup guides.

---

## 🤖 Download Automation

Why manually search for things when software can do it for you?

> **How it works**
>
> Tools like Sonarr and Radarr monitor your media library and automatically search, download, and organise new content the moment it's available. Point them at your torrent client or Usenet downloader, connect an indexer via Prowlarr, and your library manages itself. Add Jellyfin on top and you have a self-hosted streaming setup that rivals any subscription service — for free.

- **🏆 [Sonarr](https://sonarr.tv/)** — Automatic TV show downloader and library manager. Monitors for new episodes and grabs them automatically. Works with torrents, Usenet, and debrids. Open source.

- **🏆 [Radarr](https://radarr.video/)** — Same as Sonarr but for movies. Open source.

- **💎 [Prowlarr](https://github.com/Prowlarr/Prowlarr)** — Centralised indexer manager for Sonarr and Radarr. Manages all your torrent and Usenet indexers in one place. Open source.

- **💎 [Lidarr](https://lidarr.audio/)** — Automated music collection manager. Open source.

- **🔗 [Readarr](https://readarr.com/)** — Automated ebook and audiobook downloader. Open source.

- **🔗 [Bazarr](https://www.bazarr.media/)** — Automatically downloads subtitles for your Sonarr and Radarr libraries.

:::info The full stack
**Sonarr + Radarr + Prowlarr + Jellyfin + Real-Debrid** is one of the most popular setups for a completely free, self-hosted streaming experience. Everything is automatic — shows and movies appear in Jellyfin as soon as they release.
:::

---

## 🛡️ Safety

> **Why does this matter?**
>
> DDL and torrent sites are full of malicious ads and fake download buttons designed to trick you into running malware. A single wrong click can install a keylogger or ransomware. An ad blocker and a quick VirusTotal scan before running any executable are non-negotiable habits.

- **🏆 [uBlock Origin](https://ublockorigin.com/)** — Essential for any DDL or torrent site. Blocks malicious ads, fake download buttons, and pop-ups. Available for Firefox and all Chromium-based browsers.

- **💎 [VirusTotal](https://www.virustotal.com/)** — Scan any file or URL against 70+ antivirus engines instantly. Free.

- **💎 [Triage](https://tria.ge/)** — Online sandbox. Run a suspicious file in an isolated environment and watch exactly what it does. More thorough than VirusTotal.

- **🔗 [T2M](https://torrent2magnet.com/)** — Convert torrent files to magnet links without opening a client first.

- **🔗 [IKnowWhatYouDownload](https://iknowwhatyoudownload.com/)** — See what torrents are publicly visible from your IP address. Good motivation to use a VPN.
