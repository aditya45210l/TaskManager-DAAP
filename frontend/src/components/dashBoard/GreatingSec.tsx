import { CirclePlus, History } from "lucide-react"
import Link from "next/link"

const GreatingSec = ({name}:{name:string}) => {
  return (
        <section className=" font-outfit flex lg:flex-row flex-col gap-6 max-sm:mx-auto justify-between">
          <span className="my-auto items-center ">
            <span className="flex max-sm:justify-center text-3xl md:text-4xl tracking-tight sm:tracking-wide sm:leading-relaxed flex-wrap">
              <h2>Welcome Back,&nbsp;</h2>
              <p className="text-blue-btn">{name}!</p>
            </span>
            <span>
              <p className="text-gray-400 md:tracking-wide max-sm:text-sm">
                Ready to tackle some tasks and earn crypto?
              </p>
            </span>
          </span>

          {/* Button section into greating section */}

          <span className="my-auto max-sm:mx-auto  flex gap-4 md:gap-6 flex-col sm:flex-row">
            <Link href={'/dashboard/create-task'} className="btn-primary flex flex-row gap-2">
              <CirclePlus size={17} />{" "}
              <p className="font-normal">Create Task</p>
            </Link>
            <button className="btn-primary hover:bg-light-dark bg-medium-dark shadow-2xl flex flex-row gap-2">
              <History size={17} /> <p className="font-normal">Task History</p>
            </button>
          </span>
        </section>
  )
}
export default GreatingSec