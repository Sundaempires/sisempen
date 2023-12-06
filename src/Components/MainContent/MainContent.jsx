import Header from "../Header/Index"

const MainContent = ({ toggleSidebar, MainContent }) => {
    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            {MainContent}
        </div>
    )
}

export default MainContent