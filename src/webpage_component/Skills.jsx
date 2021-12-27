import React from "react";
import "./style.css";

const Skills = () => {
  return (
    <>
      <div className="skill_body">
        <div className="skills">
          <p className="skl">MY SKILLS :</p>
          <p className="skl sklLine">_________</p>
          <div className="htmlProg ProgWidth">
            <div className="p">
              <p>HTML</p>
              <p>95%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar htmlBar"></span>
              </div>
            </div>
          </div>
          <div className="cssProg ProgWidth">
            <div className="p">
              <p>CSS</p>
              <p>90%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar cssBar"></span>
              </div>
            </div>
          </div>
          <div className="jsProg ProgWidth">
            <div className="p">
              <p>JavaScript</p>
              <p>75%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar jsBar"></span>
              </div>
            </div>
          </div>
          <div className="javaProg ProgWidth">
            <div className="p">
              <p>Java</p>
              <p>85%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar javaBar"></span>
              </div>
            </div>
          </div>
          <div className="reactProg ProgWidth">
            <div className="p">
              <p>React</p>
              <p>80%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar reactBar"></span>
              </div>
            </div>
          </div>
          <div className="nodeProg ProgWidth">
            <div className="p">
              <p>Node.js</p>
              <p>55%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar nodeBar"></span>
              </div>
            </div>
          </div>
          <div className="sqlProg ProgWidth">
            <div className="p">
              <p>MongoDB</p>
              <p>65%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar MongoBar"></span>
              </div>
            </div>
          </div>
          <div className="sqlProg ProgWidth">
            <div className="p">
              <p>Sql</p>
              <p>85%</p>
            </div>
            <div className="pp">
              <div className="skillDiv">
                <span className="skillBar sqlBar"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
