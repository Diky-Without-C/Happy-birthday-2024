export default function FrontSection() {
  return (
    <div className="cardFront relative h-full w-full origin-left overflow-hidden bg-red-600 transition-all duration-500">
      <div className="front-text absolute bottom-0 w-full -translate-y-1/2 text-center text-white">
        <h1 className="font-mono text-2xl font-bold">HAPPY</h1>
        <h1 className="font-mono text-3xl font-bold leading-3">BIRTHDAY</h1>
        <h1 className="font-mono text-lg font-bold">to you!</h1>
      </div>
      <div className="wrap-deco absolute">
        <div className="decorations absolute"></div>
        <div className="decorationsTwo"></div>
      </div>
      <div className="wrap-decoTwo absolute">
        <div className="decorations absolute"></div>
        <div className="decorationsThree"></div>
      </div>
      <div className="plate absolute">
        <div className="cake absolute"></div>
        <div className="flame absolute"></div>
      </div>
    </div>
  );
}
