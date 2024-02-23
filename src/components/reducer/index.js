import { ActionTypes } from "./ActionTypes";
export const initialState = {
  blogs: [],
  blog: {},
};
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.EDIT_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === payload.id ? payload : blog
        ),
      };

    // case types.DELETE_BLOG:
    //   return {
    //     ...state,
    //     blogs: state.blogs.filter((blog) => blog._id !== action.payload),
    //   };
    case ActionTypes.FETCH_BLOGS:
      return {
        ...state,
        blogs: payload,
      };
    case ActionTypes.ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, payload],
      };

    case ActionTypes.SELECTED_BLOG: {
      return {
        ...state,
        blog: payload,
      };
    }
  }
};
