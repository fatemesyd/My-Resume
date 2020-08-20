import React, {Component} from "react";
import data from "../data.json";
import './AboutSection.css'
import Fullpage from "../component/Fullpage";
import DownIcon from "../component/DownIcon";
import { Link, Element } from "react-scroll";

class AboutSection extends Component{
    render(){
        return(
        <div>    
        <Fullpage className="second" id="#about">
        <h3>{data.sections[0].title}</h3>
        <div>
            {data.sections[0].items.map(p =>
            { return <p>{p.content}</p>; })}
        </div>
        </Fullpage>
         <Link
         activeClass="active"
         to="skills"
         spy={true}
         smooth={true}
         offset={0}
         duration={500}
         delay={0}
       >
         <DownIcon
           icon={data.icons.down}
           onClick={() => console.log("im working")}
       />
       </Link>
       <Element name="skills" className="element" />
       </div>
        );

    }
}

export default AboutSection;