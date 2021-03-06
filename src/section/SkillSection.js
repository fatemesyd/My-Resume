import React, {Component} from "react";
import Fullpage from "../component/Fullpage";
import data from "../data.json";
import SkillCard from '../component/SkillCard';
import "./SkillSection.css";

class SkillSection extends Component{
    render(){
        
        return(
         
            <Fullpage className="third">
                <h3>{data.sections[1].title}</h3>
                <div className="cards-wrapper">
                    {data.sections[1].items.map(eachSkill => {
                        return(
                            <SkillCard skill={eachSkill}/>
                        );
                    })}
                </div>
            </Fullpage>
            
        );
    }
}

export default SkillSection;