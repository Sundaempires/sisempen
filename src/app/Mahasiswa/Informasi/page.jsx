import SideBar from "@/Components/SideBar/Index"
import InfoMain from "@/Components/MainContent/InfoMain"

const Page = () => {
    return (
        <div className="flex flex-row">
            <SideBar/>
            <InfoMain/>
        </div>
    )
}

export default Page