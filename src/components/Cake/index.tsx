import { useEffect } from "react";
import { Howl } from "howler";
import birthdaySong from "@assets/audio/happy-birthday-piano.mp3";
import "@assets/style/cake.css";

export default function Cake() {
  useEffect(() => {
    const audio = new Howl({
      src: birthdaySong,
      volume: 0.3,
      onend: function () {
        audio.stop();
        audio.unload();
      },
    });
    audio.play();
  }, []);

  return (
    <section className={`popUp chocolate-cake`}>
      <div className="plate"></div>
      <div className="layer layer-bottom"></div>
      <div className="layer layer-middle"></div>
      <div className="layer layer-top"></div>
      <div className="icing"></div>
      <div className="drip drip1"></div>
      <div className="drip drip2"></div>
      <div className="drip drip3"></div>
      <div className="candle">
        <div className="flame"></div>
      </div>
    </section>
  );
}
