import { React, useEffect } from "react";
import { useNavigate } from "react-router";
import IdeaCard from "./IdeaCard";

export const Ideas = (props) => {
  const navigator = useNavigate();

  useEffect(() => {
    props.getAllIdeas();
  }, []);

  useEffect(() => {
    if (!props.userData) navigator("/");
  }, [props.userData]);

  return props && props.AllIdeas
    ? props.AllIdeas.map((idea) => {
        return <IdeaCard idea={idea} flag = {1} subscribe = {props.subscribe}/>;
      })
    : "";
};
