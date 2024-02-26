import { toast } from "sonner";

import { Button } from "../ui/button";

export default function SonnerDemo() {
  return (
    <Button
      variant="dark-outline"
      onClick={() =>
        toast.custom((t) => {
          return (
            <section className="w-full gap-3 items-center flex rounded border border-dashed border-light-200 dark:border-dark-700 shadow-sm   p-3 bg-white dark:bg-dark-800">
              <section>
                <h1 className="text-lg">this is the title</h1>
                <p className="text-sm font-mono">
                  this is the the description of the title and the thing that
                  I'm talking about
                </p>
              </section>
              <Button
                onClick={() => {
                  toast.dismiss(t);
                }}
                variant={"light-ghost"}
              >
                Close
              </Button>
            </section>
          );
        })
      }
    >
      Show Toast
    </Button>
  );
}
