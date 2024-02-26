
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded  bg-white border border-dashed dark:bg-dark-800 dark:border-dark-700 border-light-300">
      <div className="p-4">
        <h4 className="mb-4 text-sm label-text font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm muted-text">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
