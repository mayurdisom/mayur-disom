
/*
========================================
MAYUR DISOM - WEBSITE CONFIGURATION
========================================

1. Add your YouTube channel URL.
2. Add your Instagram profile URL.
3. Add your actual YouTube video IDs.

Example:
https://www.youtube.com/watch?v=AbCdEf12345

Video ID:
AbCdEf12345
*/


// SOCIAL MEDIA LINKS

const SITE_CONFIG = {

    youtubeUrl: "https://www.youtube.com/",

    instagramUrl: "https://www.instagram.com/"

};


// MUSIC VIDEOS

const musicVideos = [

    {
        title: "Jigar Wala",

        category: "Santali Lofi • Love & Romantic",

        description: "A romantic Santali music edit.",

        videoId: "",

        label: "LOFI"
    },

    {
        title: "Aljhaw Ena Nowa Mone",

        category: "Santali Traditional • 2026",

        description: "A Santali traditional song feature.",

        videoId: "",

        label: "TRADITIONAL"
    },

    {
        title: "More Santali Music",

        category: "Songs • Remixes • Music Videos",

        description: "Add your next music release here.",

        videoId: "",

        label: "MUSIC"
    }

];


// YOUTUBE SHORTS

const shortsVideos = [

    {
        title: "Jigar Wala",
        videoId: ""
    },

    {
        title: "Aljhaw Ena Nowa Mone",
        videoId: ""
    },

    {
        title: "Santali Love Status",
        videoId: ""
    },

    {
        title: "Santali Music Shorts",
        videoId: ""
    }

];


// SET SOCIAL MEDIA LINKS

function setExternalLink(id, url) {

    const element = document.getElementById(id);

    if (!element) return;

    element.href = url;

    element.target = "_blank";

    element.rel = "noopener noreferrer";

}


// GENERATE YOUTUBE VIDEO URL

function youtubeWatchUrl(videoId) {

    return videoId
        ? `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`
        : SITE_CONFIG.youtubeUrl;

}


// DISPLAY MUSIC VIDEOS

function renderMusic() {

    const grid = document.getElementById("music-grid");

    if (!grid) return;

    grid.innerHTML = musicVideos.map((video) => {

        const href = youtubeWatchUrl(video.videoId);

        const actionLabel = video.videoId
            ? "Watch Video ↗"
            : "Add Video Link ↗";

        return `

            <article class="music-card">

                <a class="music-thumb"
                   href="${href}"
                   target="_blank"
                   rel="noopener noreferrer">

                    <span class="thumb-mark">MD</span>

                    <span class="play-icon">▶</span>

                </a>


                <div class="music-info">

                    <p class="!mt-0 !text-[10px] !font-bold !uppercase !tracking-[.2em] !text-amber-300">

                        ${video.label}

                    </p>


                    <h3 class="mt-2">

                        ${video.title}

                    </h3>


                    <p>

                        ${video.category}

                    </p>


                    <p>

                        ${video.description}

                    </p>


                    <a class="music-link"
                       href="${href}"
                       target="_blank"
                       rel="noopener noreferrer">

                        ${actionLabel}

                    </a>

                </div>

            </article>

        `;

    }).join("");

}


// DISPLAY YOUTUBE SHORTS

function renderShorts() {

    const grid = document.getElementById("shorts-grid");

    if (!grid) return;

    grid.innerHTML = shortsVideos.map((video) => {

        const href = video.videoId
            ? `https://www.youtube.com/shorts/${encodeURIComponent(video.videoId)}`
            : SITE_CONFIG.youtubeUrl;

        return `

            <a class="short-card"
               href="${href}"
               target="_blank"
               rel="noopener noreferrer">

                <span class="short-title">

                    ${video.title}

                </span>

                <span class="short-play">

                    ▶

                </span>

            </a>

        `;

    }).join("");

}


// MOBILE NAVIGATION

function initializeNavigation() {

    const toggle = document.getElementById("menu-toggle");

    const nav = document.getElementById("nav-links");

    if (!toggle || !nav) return;


    toggle.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("open");

        toggle.setAttribute("aria-expanded", String(isOpen));

        toggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });


    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            toggle.setAttribute("aria-expanded", "false");

            toggle.setAttribute("aria-label", "Open navigation");

        });

    });

}


// INITIALIZE WEBSITE

document.addEventListener("DOMContentLoaded", () => {


    // YouTube links

    [
        "hero-youtube",
        "all-videos-link",
        "connect-youtube"

    ].forEach((id) => {

        setExternalLink(id, SITE_CONFIG.youtubeUrl);

    });


    // Instagram links

    [
        "hero-instagram",
        "connect-instagram"

    ].forEach((id) => {

        setExternalLink(id, SITE_CONFIG.instagramUrl);

    });


    // Current year

    document.getElementById("current-year").textContent =
        new Date().getFullYear();


    // Load videos

    renderMusic();

    renderShorts();


    // Initialize mobile navigation

    initializeNavigation();

});
