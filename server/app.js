const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 컨텐츠 목록을 조회하는 API
app.get('/api/content', (req, res) => {
    res.send('');
})

// 사용자가 작성한 컨텐츠 목록을 조회하는 API
app.get('/api/content/user', (req, res) => {
    res.send('');
})

// 스크랩한 컨텐츠 목록을 조회하는 API
app.get('/api/content/scrap', (req, res) => {
    res.send('');
})

// 컨텐츠를 작성하는 API
app.post('/api/content', (req, res) => {
    res.send('');
})

// 컨텐츠를 수정하는 API
app.patch('/api/content', (req, res) => {
    res.send('');
})

// 컨텐츠를 삭제하는 API
app.delete('/api/content', (req, res) => {
    res.send('');
})










app.listen(5000, () => {
  console.log("server start!!");
});