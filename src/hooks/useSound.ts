import { Howl } from "howler";

export default function useSound(src: string) {
  return new Howl({
    src: src,
    volume: 0.3,
  });
}
