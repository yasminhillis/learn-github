import Aside from "./Aside"
import Content from "./Content"; 

export default function Main(){
    return <section className="bg-orange-300 flex-1 items-stretch w-full text-center text-white grid grid-cols-[1fr_2fr]">
        <Aside />
        <Content />
    </section>
}