export const STREAMING_SERVICES = [
  { id: "netflix",   name: "Netflix",      color: "#E50914", letter: "N",  image: "/icons/netflix.png" },
  { id: "hulu",      name: "Hulu",         color: "#1CE783", letter: "H",  image: "/icons/hulu" },
  { id: "disney",    name: "Disney+",      color: "#0063E5", letter: "D",  image: "/icons/disney-plus.png" },
  { id: "max",       name: "Max",          color: "#002BE7", letter: "M",  image: "/icons/hbo-max.png" },
  { id: "apple",     name: "Apple TV+",    color: "#555555", letter: "A",  image: "/icons/apple-tv" },
  { id: "prime",     name: "Prime Video",  color: "#00A8E1", letter: "P",  image: "/icons/amazon-prime.png" },
  { id: "peacock",   name: "Peacock",      color: "#7B2FBE", letter: "Pk", image: "/icons/peacock.png" },
  { id: "paramount", name: "Paramount+",   color: "#0064FF", letter: "P+", image: "/icons/paramount-plus.png" },
] as const;

export const GENRES = [
  { id: "action",      label: "Action",      emoji: "💥", desc: "Explosions & adrenaline" },
  { id: "comedy",      label: "Comedy",       emoji: "😂", desc: "Laughs guaranteed" },
  { id: "horror",      label: "Horror",       emoji: "👻", desc: "Things that go bump" },
  { id: "romance",     label: "Romance",      emoji: "💋", desc: "Love stories & feels" },
  { id: "thriller",    label: "Thriller",     emoji: "🔪", desc: "Edge-of-your-seat tension" },
  { id: "scifi",       label: "Sci-Fi",       emoji: "🚀", desc: "Future worlds & beyond" },
  { id: "drama",       label: "Drama",        emoji: "🎭", desc: "Deep characters & story" },
  { id: "fantasy",     label: "Fantasy",      emoji: "🧙", desc: "Magic & other worlds" },
  { id: "animation",   label: "Animation",    emoji: "🎨", desc: "All ages, all styles" },
  { id: "crime",       label: "Crime",        emoji: "🕵️", desc: "Mysteries & heists" },
  { id: "documentary", label: "Documentary",  emoji: "🎬", desc: "Real stories, real impact" },
  { id: "western",     label: "Western",      emoji: "🤠", desc: "Gunslinging classics" },
] as const;

export const MOODS = [
  { id: "feel-good",         label: "Feel-Good",          emoji: "☀️",  desc: "Light, uplifting, warm" },
  { id: "intense",           label: "Intense",            emoji: "⚡",  desc: "Gripping, tense, dark" },
  { id: "relaxing",          label: "Relaxing",           emoji: "🛋️", desc: "Easy, breezy, no stress" },
  { id: "thought-provoking", label: "Thought-Provoking",  emoji: "🧠", desc: "Smart, layered, leaves you thinking" },
  { id: "emotional",         label: "Emotional",          emoji: "😭",  desc: "Move me, make me feel things" },
  { id: "fun",               label: "Fun & Silly",        emoji: "🎉",  desc: "Lighthearted, silly, pure joy" },
  { id: "dark",              label: "Dark & Edgy",        emoji: "🌑",  desc: "Gritty, uncomfortable, bold" },
  { id: "adventurous",       label: "Adventurous",        emoji: "🗺️", desc: "Epic journeys, discoveries" },
] as const;

export const WATCH_WITH = [
  { id: "solo",    label: "Solo",       emoji: "🎧", desc: "Just me" },
  { id: "date",    label: "Date Night", emoji: "🍷", desc: "Romantic evening" },
  { id: "family",  label: "Family",     emoji: "👨‍👩‍👧", desc: "Everyone welcome" },
  { id: "friends", label: "Friends",    emoji: "🍿", desc: "Group watch" },
] as const;

export const RUNTIME = [
  { id: "movie",  label: "Movie",       emoji: "🎞️", desc: "~1.5–2.5 hrs" },
  { id: "series", label: "TV Series",   emoji: "📺", desc: "Multiple episodes" },
  { id: "mini",   label: "Mini-Series", emoji: "📖", desc: "Limited run" },
  { id: "any",    label: "Either",      emoji: "🎲", desc: "Surprise me" },
] as const;