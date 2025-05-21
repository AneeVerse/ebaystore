"use client";
import Layout from "../common/Layout";
import { useEffect, useState, useRef } from "react";
import { Heading } from "../common/typography/Heading";
import { AccentText } from "../common/typography/AccentText";
import { UiSubheading } from "../common/typography/UiSubheading";

const SupportSection = () => {
  const vimeoVideoId = "347119375"; // Replace with your Vimeo video ID
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const playerRef = useRef(null); // Ref to store the Vimeo player instance

  // Initialize Vimeo Player
  useEffect(() => {
    const loadVimeoScript = () => {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if (typeof window !== "undefined") {
      loadVimeoScript();
    }
  }, []);

  // Handle Play/Pause
  const handlePlayPause = async () => {
    if (playerRef.current) {
      if (isPlaying) {
        await playerRef.current.pause();
      } else {
        await playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle Mute/Unmute
  const handleMuteUnmute = async () => {
    if (playerRef.current) {
      const muted = await playerRef.current.setMuted(!isMuted);
      setIsMuted(muted);
    }
  };

  // Initialize the player when the iframe is loaded
  const initializePlayer = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      playerRef.current = new window.Vimeo.Player(iframe);

      // Listen for play/pause events to update the state
      playerRef.current.on("play", () => setIsPlaying(true));
      playerRef.current.on("pause", () => setIsPlaying(false));
    }
  };

  return (
    <section className="bg-primary-500 py-16">
      <Layout className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <UiSubheading border={true}className="text-secondary-500 mb-2">
  A New Era of Creative Work
</UiSubheading>
          <Heading
          level="h2"
          color="dark"
          spacing="lg"
          className="text-left font-semibold"
        >
          The support your team{' '}
          <AccentText 
            size="lg" 
            className={"block text-orange-500 mt-1 "}
          >
            has been asking for
          </AccentText>
        </Heading>
          <p className="text-lg text-secondary-500 mb-4">
            Aneeverse is your dedicated, on-call creative team to expand your
            production capacity and extend your team’s creative capabilities.
          </p>
          <p className="text-gray-500 mb-6">
            See us as an extension of your team, freeing you to focus on your
            most impactful and creative work.
          </p>
          <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold text-md rounded-full transition-colors">
            Get Started
          </button>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoVideoId}?loop=1&controls=0&title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Aneeverse Demo Video"
              onLoad={initializePlayer} // Initialize player when iframe loads
            ></iframe>

            {/* Custom Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="absolute bottom-4 left-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? (
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Custom Mute/Unmute Button */}
            <button
              onClick={handleMuteUnmute}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
            >
              {isMuted ? (
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default SupportSection;