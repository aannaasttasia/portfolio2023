import * as React from "react";
import "./css/Title.scss";

export default class Title extends React.Component<{}> {
  render() {
    return (
      <div className="title">
        <div className="name-data">
          <p className="name">Anastasiia</p>
          <span className="surname">Havryliuk</span>
        </div>
        <p className="job">Junior Front-End Developer</p>
      </div>
    );
  }
}
