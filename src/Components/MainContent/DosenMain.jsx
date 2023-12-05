import Header from "../Header/Index"

const dosenMain = ({ toggleSidebar, dashContent }) => {
    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            {dashContent}
        </div>
    )
}

export default dosenMain