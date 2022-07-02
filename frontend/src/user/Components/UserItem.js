import React from "react";
import Avatar from "../../Shared/components/UIElements/Avatar";
import Card from "../../Shared/components/UIElements/Card";
import { Link } from "react-router-dom";
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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
            <h2>{props.artist}</h2>
            <h3>
              {props.like}
              {props.like && " Likes"}
            </h3>
            <h3>
              {props.dislike}
              {props.dislike && " dislikes"}
            </h3>
            <button src=''>play</button>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
