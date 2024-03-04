import toast from "react-hot-toast";

export const errorMessage = {
  emptySearch: "It is necessary to enter text for images search.",
  emptyLoad: "Whoops, something went wrong! Please try reloading this page!",
  loadMore: "Load More",
};

export const errNotify = (message) => {
  toast.error(message, {
    duration: 500,
  });
};


export const okNotify = (message) => {
  toast.success(message, {
    duration: 500,
  });
};
