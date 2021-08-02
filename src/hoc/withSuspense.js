import React from "react";
import Preloader from "../components/common/preloader/Preloader";

export let withSuspense = (Component) => {
  return (props) => {
    return (
      <React.Suspense fallback={<Preloader />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
};
