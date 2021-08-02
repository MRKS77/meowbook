import React from "react";
import s from "./Paginator.module.css";
// import { useState } from "react";

// const Paginator1 = (props) => {
//   return (
//     <div className={s.butModule}>
//       {props.pageList().map((i) => {
//         return (
//           <button
//             className={s.pageButton}
//             key={i}
//             onClick={() => {
//               props.onChangePage(i);
//             }}
//             id={i === props.currentPage ? s.currentButton : ""}
//           >
//             {i}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

const Paginator = (props) => {
  let totalPages = Math.ceil(props.totalCount / props.pageSize);

  const onChangePage = (number) => {
    props.changePage(number);
    props.getItems(number, props.pageSize);
  };

  const listMover = (moveNumber) => {
    if (props.currentPage + moveNumber > totalPages) {
      onChangePage(totalPages);
    } else if (props.currentPage + moveNumber < 1) {
      onChangePage(1);
    } else {
      onChangePage(props.currentPage + moveNumber);
    }
  };

  const pageList = () => {
    let pages = [];
    let startPageBottom;

    props.currentPage < 6
      ? (startPageBottom = 1)
      : (startPageBottom = props.currentPage - 5);

    for (
      let i = startPageBottom;
      i <= totalPages && i < props.currentPage + 6;
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  const rightMove = () => {
    listMover(10);
  };
  const doubleRightMove = () => {
    listMover(50);
  };
  const leftMove = () => {
    listMover(-10);
  };
  const doubleLeftMove = () => {
    listMover(-50);
  };

  return (
    <div className={s.mainModule}>
      <div>
        <i
          className={
            "fas fa-angle-double-left " + s.moveIcon + " " + s.marginRight
          }
          onClick={doubleLeftMove}
        />
        <i className={"fas fa-angle-left " + s.moveIcon} onClick={leftMove} />
      </div>

      <div className={s.butModule}>
        {pageList().map((i) => {
          return (
            <button
              className={s.pageButton}
              key={i}
              onClick={() => {
                onChangePage(i);
              }}
              id={i === props.currentPage ? s.currentButton : ""}
            >
              {i}
            </button>
          );
        })}
      </div>

      <div>
        <i
          className={"fas fa-angle-right " + s.moveIcon + " " + s.marginRight}
          onClick={rightMove}
        />
        <i
          className={"fas fa-angle-double-right " + s.moveIcon}
          onClick={doubleRightMove}
        />
      </div>
    </div>
  );
};

// const Paginator = (props) => {
//   let totalPages = Math.ceil(props.totalCount / props.pageSize);
//   let pages = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(i);
//   }

//   const onChangePage = (number) => {
//     props.changePage(number);
//     props.getItems(number, props.pageSize);
//   };

//   let portionSize = 10;
//   let portionCount = Math.ceil(totalPages / portionSize);
//   let [ portionNumber, setPortionNumber ] = useState(1);
//   let leftPageNumber = (portionNumber - 1) * portionSize + 1;
//   let rightPageNumber = portionNumber * portionSize;

//   return (
//     <div className={s.mainModule}>
//       {leftPageNumber > 1 && (
//         <i
//           className={"fas fa-angle-left " + s.moveIcon}
//           onClick={() => {
//             setPortionNumber(portionNumber - 1);
//           }}
//         />
//       )}

//       <div className={s.butModule}>
//         {pages
//           .filter((i) => i >= leftPageNumber && i <= rightPageNumber)
//           .map((i) => {
//             return (
//               <button
//                 className={s.pageButton}
//                 key={i}
//                 onClick={() => {
//                   onChangePage(i);
//                 }}
//                 id={i === props.currentPage ? s.currentButton : ""}
//               >
//                 {i}
//               </button>
//             );
//           })}
//       </div>

//       {portionCount > portionNumber && (
//         <i
//           className={"fas fa-angle-right " + s.moveIcon + " " + s.marginRight}
//           onClick={() => {
//             setPortionNumber(portionNumber + 1);
//           }}
//         />
//       )}
//     </div>
//   );
// };

export default Paginator;
