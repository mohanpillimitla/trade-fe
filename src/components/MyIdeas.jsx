import { React, useEffect } from "react";
import { useNavigate } from "react-router";
import IdeaCard from "./IdeaCard";
import Button from "@mui/material/Button";

export const MyIdeas = (props) => {
  console.log(props);
  const navigator = useNavigate();

  useEffect(() => {
    props.getMyIdeas();
  }, []);

  useEffect(() => {
    if (!props.userData) navigator("/");
  }, [props.userData]);

  return props && props.myIdeas
    ? props.myIdeas.map((idea) => {
        return <IdeaCard idea={idea} flag = {0} subscribe = {props.subscribe}/>;
      })
    : "";
};
