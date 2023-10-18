import Image from "next/image";
import {aboutData, description} from "@/data/about";
import Avatar from "../../assets/image/avatar.png";

const AboutSection = () => {
    const renderAboutList = () => {
        return aboutData.map((abt) => (
            <li key={abt.id}>
                <strong>{abt.title}:</strong> {abt.desc}
            </li>
        ));
    };

    return (
        <div className="section about" data-scroll-target="true">
            <div className="content">
                <div className="title">
                    <div className="title_inner">About Me</div>
                </div>
                <div className="image">
                    <Image
                        src={Avatar}
                        alt="Avatar"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="desc">
                    <p>{description}</p>
                    <div className="info-list">
                        <ul>
                            {renderAboutList()}
                        </ul>
                    </div>
                    <div className="bts">
                        <a
                            href="https://drive.google.com/file/d/11hmDAS5JmTgjmmf4KoB4SjBZMwnFWsqy/view"
                            target="_blank"
                            className="btn fill link"
                            data-text="Download CV"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    );
};

export default AboutSection;
