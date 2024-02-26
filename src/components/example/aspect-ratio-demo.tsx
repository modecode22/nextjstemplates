import { AspectRatio } from "../ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
    {/* in next js make this an Image component */}
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        // fill // this is for next js 
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
