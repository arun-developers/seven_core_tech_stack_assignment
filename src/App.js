import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogPostList from "./routes/blogPostList";
import BlogPostDetails from "./routes/blogPostDetails";
import Header from "./components/header";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const API_KEY = "9f670590bfd04f3ba5839ab25527c358";
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('india');
  const [pageSize, setPageSize] = useState(9);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchListData() {
      try {
        setLoading(true);
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&pageSize=${pageSize}&page=${page}&sortBy=publishedAt&apiKey=${API_KEY}`);
        setListData(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
      }
    }
    fetchListData();
  }, [search, pageSize, page]);

  return (
    <Router>
      <Grid container padding={2}>
          <Typography sx={{width:'100%'}} variant="h4" gutterBottom>
            <Header search={search} setSearch={setSearch}/>
          </Typography>
         <Grid item xs={12}>
          <Routes>
            <Route path="/" element={<BlogPostList listData={listData} loading={loading} page={page} setPage={setPage}/>}/>
            <Route path="/post/:id" element={<BlogPostDetails listData={listData} />}/>
          </Routes>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
