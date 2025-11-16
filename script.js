// Load transcript data
fetch("podcast_episode_transcript.json")
    .then((response) => response.json())
    .then((transcriptData) => {
        const transcriptEl = document.getElementById("transcript");
        const audioEl = document.getElementById("podcast");

        // Render the transcript with each segment on a new line
        transcriptEl.innerHTML = transcriptData
            .map((seg, i) => `<p class="segment" data-index="${i}">${seg.text}</p>`)
            .join("");

        // Listen to playback
        audioEl.addEventListener("timeupdate", () => {
            const currentTime = audioEl.currentTime;
            transcriptData.forEach((seg, i) => {
                const el = transcriptEl.querySelector(`[data-index="${i}"]`);
                if (currentTime >= seg.start && currentTime <= seg.end) {
                    el.classList.add("active");
                    el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
                } else {
                    el.classList.remove("active");
                }
            });
        });

        // Clickable transcript - jump to audio time
        transcriptEl.addEventListener("click", (e) => {
            const seg = e.target.closest(".segment");
            if (seg) {
                const index = +seg.dataset.index;
                audioEl.currentTime = transcriptData[index].start;
                audioEl.play();
            }
        });
    })
    .catch((error) => {
        console.error("Error loading transcript:", error);
    });
