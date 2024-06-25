import React from 'react';
// import Home from './routes/home';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
      <Route Path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
      </Routes>
    </HashRouter>
  );
}


export default App;

// import axios from 'axios';
// import Movie from './components/Movie.js';
// import './App.css';

// class App extends React.Component {
  
//   state = {
//     isloading: true,
//     movies: []
//   };

//   componentDidMount() {
//     // 영화 데이터 로딩!
//     this.getMovies();
//   }
//   getMovies = async () => {
//     const {
//       data : {
//         data : { movies }
//       }
//     } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//     this.setState({ movies, isloading: false });
//   }

//   render() {
//     const { isloading, movies } = this.state;
//     return (
//       <section class="container">
//         { isloading ? (
//           <div className="loader">
//             <span className="loader_text">'loading...'</span>
//           </div>
//         ) :(
//           <div className='movies'>
//           {movies.map(movie => (
//             <Movie
//               id={movie.id}
//               year={movie.year}
//               title={movie.title}
//               summary={movie.summary}
//               poster={movie.medium_cover_image}
//               genres={movie.genres}
//             />
//         ))}
//         </div>
//       )}
//       </section>
//     );
//    }
//   }


// export default App;



