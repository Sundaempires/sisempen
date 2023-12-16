import Header from "../Common/Header/Index"
import Card from "../Common/Card/Index.jsx"

const Courses = ({ toggleSidebar }) => {
    return (
        <div className="w-full h-screen bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <Card />
        </div>
    )
}

export default Courses