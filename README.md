# Video-Splicer
---
An API that takes in two videos and concatenates them into a single video
---
This version of the backend is a server side rendering of the system rather than just an API.

## Design Decisions

<p>It utilizes Express, multer and ffmpeg to take up to 100 videos and return a concatenated video. The video will be downloaded immediately.</p>

<p>Express - was used because it is a popular library for nodejs projects</p>

<p>multer - was used in order to handle multipart/form data more easily.</p>

<p>ffmpeg - was used because it is a fast</p>

<p>Server-side rendering allows you to handle everything from one repository.</p>

<p>This was built following a tutorial by [Coding Shiksha](https://www.youtube.com/watch?v=9SO-V3MCCNE&ab_channel=CodingShiksha)
<p>

<p>With both this implementation and the implementation on the main branch I ran into the problem where ffmpeg or ffprobe aren't recognized commands and I haven't yet found a solution</p>

## How to run it locally

1. npm i
2. npm start

