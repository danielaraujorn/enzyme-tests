import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ item }) => <li className="item">{item}</li>;

ListItem.propTypes = {
  item: PropTypes.string
};

export default ListItem;
