import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function BlogPost({ Category, title, ImageURL, author, Description, id }) {
  const dispatch = useDispatch();

  function handleOnEditClick(id) {
    dispatch({ type: "EDIT_BLOG_POST", payload: id });
    dispatch({ type: "SHOW_BLOG_POST_POPUP", payload: true });
  }

  return (
    <Card className="mb-5">
      <Card.Body>
        <div className="row">
          <div className="col-3">
            <img src={ImageURL} alt={Category} />
          </div>
          <div className="col-9">
            <h4>{title}</h4>
            <div>{Description}</div>
            <div className="d-flex justify-content-between my-2">
              <div className="d-flex justify-content-start">
                <span
                  className="badge badge-warning mr-2"
                  data-toggle="tooltip"
                  title="Category"
                >
                  {Category}
                </span>
                <span
                  className="badge badge-info"
                  data-toggle="tooltip"
                  title="Author name"
                >
                  {author}
                </span>
              </div>
            </div>
            {/* <div>
							<Link to={`/edit/${id}`}>Edit</Link>
						</div> */}
            <div>
              <Button
                className="p-0"
                onClick={() => handleOnEditClick(id)}
                variant="link"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

BlogPost.defaultProps = {
  Category: "",
  title: "",
  ImageURL: "",
  author: "",
  Description: ""
};

BlogPost.propTypes = {
  Category: PropTypes.string,
  title: PropTypes.string,
  ImageURL: PropTypes.string,
  author: PropTypes.string,
  Description: PropTypes.string
};

export default BlogPost;
