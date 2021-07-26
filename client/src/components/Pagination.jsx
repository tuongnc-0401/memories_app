import React from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem } from "@material-ui/lab";
import useStyles from "./styles.js";
import { Link } from "react-router-dom";
const Paginate = () => {
  const classes = useStyles();
  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={`/posts?page=${1}`}
        ></PaginationItem>
      )}
    ></Pagination>
  );
};

export default Paginate;
