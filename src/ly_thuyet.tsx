// Các loại Hook cơ bản


// 1.useState:
// Dùng để quản lý trạng thái (state) trong functional component.
// const [state, setState] = useState(initialState);
// state: giá trị hiện tại của state.
// setState: hàm dùng để cập nhật giá trị của state.
// initialState: giá trị khởi tạo của state.
 


// 2.useEffect:
// useEffect nhận vào hai đối số: một hàm callback và một mảng dependencies.
// useEffect(() => {
  // code to run on mount and update
// }, [dependencies]);
// Hàm callback sẽ được gọi sau mỗi lần render khi một trong các dependencies thay đổi.
// Mảng dependencies chỉ định các biến hoặc giá trị mà effect phụ thuộc vào. Nếu một giá trị trong mảng thay đổi, effect sẽ được chạy lại.



// 3.useContext
// useContext là một hook trong React dùng để truy cập vào giá trị của một context trong functional components. 
// Context API của React cho phép bạn truyền dữ liệu qua cây component mà không cần phải truyền props xuống từng cấp. 
// Điều này rất hữu ích khi bạn cần chia sẻ dữ liệu giữa nhiều components mà không cần phải thông qua props drilling.
// => đơn giản là truyền hàm hoạc dữ liệu qua các compoment khác nhau thông qua hàm useContext khởi tạo sẳn
                   // Đầu tiên, bạn cần tạo một context bằng cách sử dụng React.createContext.
// const MyContext = createContext();
                     // thứ 2 ,Cung cấp Context:
// Sử dụng MyContext.Provider để cung cấp giá trị cho context. Mọi component bên trong Provider sẽ có thể truy cập vào giá trị này.
//     <MyContext.Provider value={value}>
//       <MyComponent />
//     </MyContext.Provider>
                    // thứ 3,Sử dụng Context:
// Dùng useContext trong functional component để truy cập vào giá trị của context.
//   const value = useContext(MyContext);
//   return <div>{value}</div>;




// 4.useReducer
// useReducer tương tự như useState, nhưng cho phép bạn xác định reducer function để cập nhật state dựa trên action.

// const [state, dispatch] = useReducer(reducer, initialState);
// reducer là một function nhận vào state hiện tại và một action, và trả về state mới.
// initialState là state ban đầu.
// state là state hiện tại.
// dispatch là hàm để gửi action.




// 5.useRef
// useRef là một hook trong React được sử dụng để lưu trữ các tham chiếu đến các phần tử DOM 
// hoặc các giá trị mà có thể thay đổi theo thời gian mà không gây ra việc re-render component.
// Cách sử dụng useRef
// Đầu tiên, bạn cần import useRef từ react.
// Sau đó, bạn có thể sử dụng useRef để tạo một tham chiếu và sử dụng nó trong component của bạn.
// vd:
// import React, { useRef } from 'react';
// function Counter() {
//   const countRef = useRef(0); // Khởi tạo countRef với giá trị ban đầu là 0
//   const increment = () => {
//     countRef.current++; // Tăng giá trị của countRef
//     console.log('Current count:', countRef.current);
//   };
//   return (
//     <div>
//       <p>Count: {countRef.current}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// export default Counter;
