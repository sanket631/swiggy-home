// import Header from "./components/Header";
// import Category from "./components/Category";
// import Restaurant from "./components/Restaurant";
// import Online_restaurants from "./components/Online_restaurants";
// function App() {
//   return (
//     <>
//       <Header/>
//       <Category/>
//       <Restaurant/>
//       <Online_restaurants/>
//     </>
//   );
// }

// export default App;

import Header from "./components/Header";
import Category from "./components/Category";
import Restaurant from "./components/Restaurant";
import Online_restaurants from "./components/Online_restaurants";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Category />
        <Restaurant />
        <Online_restaurants />
      </main>
    </div>
  );
}

export default App;
