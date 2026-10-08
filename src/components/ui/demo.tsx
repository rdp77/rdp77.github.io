import Loader from "@/components/ui/loader"

/** Where the loader sends the user after `REDIRECT_DELAY`. */
const REDIRECT_TO = "https://ravidwiputra.pages.dev/"
/** How long the loader (and its animation) stays on screen, in milliseconds. */
const REDIRECT_DELAY = 3000

export default function LoaderDemo() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background">
      <Loader to={REDIRECT_TO} delay={REDIRECT_DELAY} />
    </div>
  )
}
