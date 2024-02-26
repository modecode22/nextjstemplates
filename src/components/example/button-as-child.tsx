import { Button } from "../ui/button";

export default function ButtonAsChild() {
  return (
    <Button asChild>
      {/* in next js make this a Link */}
      <a href="/login">Login</a>
    </Button>
  )
}
