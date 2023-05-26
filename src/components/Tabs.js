import React from "react";
import './Tabs.scss'
import { Card } from "./TabCard";


const TabContent = ({title1,img1,link1,author1,update1,opt1,title2,img2,link2,author2,update2,opt2
                    ,title3,img3,link3,author3,update3,opt3,title4,img4,link4,author4,update4,opt4}) =>{
    return(
        <div className="content-tabs">
            <Card
                title={title1}
                img={img1}
                link={link1}
                author={author1}
                update={update1}
                opt={opt1}
            />
            <Card
                title={title2}
                img={img2}
                link={link2}
                author={author2}
                update={update2}
                opt={opt2}
            />
            <Card
                title={title3}
                img={img3}
                link={link3}
                author={author3}
                update={update3}
                opt={opt3}
            />
            <Card
                title={title4}
                img={img4}
                link={link4}
                author={author4}
                update={update4}
                opt={opt4}
            />
            
        </div>
    )
}

export { TabContent}