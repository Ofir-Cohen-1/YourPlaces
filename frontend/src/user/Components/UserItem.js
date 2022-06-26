import React from "react";
import Avatar from "../../Shared/components/UIElements/Avatar";
import Card from "../../Shared/components/UIElements/Card";
import { Link } from "react-router-dom";
import "./UserItem.css";

const UsersItem = (props) => {
  //get users list from parent component
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>

          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount}
              {props.placeCount === 1 ? " place" : " places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
