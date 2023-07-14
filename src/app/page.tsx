import Image from 'next/image'

export default function Page() {
  return (
    <section className="relative mx-auto grid min-h-full w-full max-w-4xl items-center gap-6">
      <div className="relative flex flex-row items-center justify-center gap-2">
        <span className="relative h-8 w-[200px]">
          <Image src="/next.svg" alt="Next.js" fill priority />
        </span>
        <div className="relative flex h-16 w-16 items-center rounded border border-gray-50 bg-gradient-to-b from-white/40 via-white to-white/40 p-4">
          <Image
            src="/thirteen.svg"
            alt="Thirteen"
            width={180}
            height={31}
            priority
          />
        </div>
      </div>

      <div
        className="absolute left-0 top-0 z-[-2] h-full w-full origin-top"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-[10%] h-4/6 w-2/3 rounded-[50%] bg-blue-200 blur-[200px]"></div>
        <div className="absolute right-0 top-[10%] h-4/6 w-2/3 rounded-[50%] bg-purple-200 blur-[200px]"></div>
      </div>
    </section>
  )
}
