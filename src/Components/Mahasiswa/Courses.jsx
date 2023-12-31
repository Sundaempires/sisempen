import Header from "../Common/Header/Index"
import Card from "../Common/Card/Index.jsx"

const Courses = ({ toggleSidebar, titleMenu }) => {
    return (
        <div className="w-full h-screen bg-gray-100">
            <Header toggleSidebar={toggleSidebar} titleMenu="Course" />
            <Card />
        </div>
    )
}

export default Courses