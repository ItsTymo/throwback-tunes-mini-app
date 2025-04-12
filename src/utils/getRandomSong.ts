import { throwbackSongs } from "../data/songs";

export function getRandomSong() {
  const randomIndex = Math.floor(Math.random() * throwbackSongs.length);
  return throwbackSongs[randomIndex];
}
