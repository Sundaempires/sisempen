import Header from "../Header/Index"
import Card from "../Card/Index.jsx"

const CourseMain = ({ toggleSidebar }) => {

    return (
        <div className="w-full sm:h-screen bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <Card />
        </div>
    )
}

export default CourseMain