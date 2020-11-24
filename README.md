An API that takes in two videos and concatenates them into a single video
---
This is simply an API with no UI.

## Design Decisions

<p>It utilizes Express, and ffmpeg-concat to take 2 videos and return a single concatenated video.</p>

<p>Express - was used because it is a popular library for nodejs projects</p>

<p>ffmpeg-concat - was used because it is a more compact version of ffmpeg and was has the exact functionality necessary for the application</p>


<p>With both this implementation and the implementation on the main branch I ran into the problem where ffmpeg or ffprobe aren't recognized commands and I haven't yet found a solution</p>

## How to run it locally

1. npm i
2. npm start
