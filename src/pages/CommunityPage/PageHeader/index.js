import './pageheader.css'
export default function PageHeader({sectionName}) {


    return (
        <div className="section-header">
            <img alt="icons" src='./assets/shapes_4.png' className="section-header-icons"/>
            <h1>{sectionName}</h1>
            <img alt="icons" src='./assets/shapes_4.png' className="section-header-icons"/>
        </div>
    )
}