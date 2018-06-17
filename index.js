/**
 * Simple-Library-Nodejs
 */

'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 9687;
const morgan = require('morgan');

const isDebug = true;
const response = { response: true };

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('combined'));

// 로그인
app.post('/sign', (req, res) => {
  logMessage('info', '[로그인]');

  response.request = req.body;
  res.json(response);
});

// 회원가입
app.post('/user', (req, res) => {
  logMessage('info', '[회원가입]');

  response.request = req.body;
  res.json(response);
});

// 회사 검색
app.get('/company/:searchKeyword', (req, res) => {
  logMessage('info', '[회사 검색]');
  logMessage('info', '[회사 검색 키워드: ' + req.params.searchKeyword + ']');

  response.request = req.body;
  res.json(response);
});

// 회사 등록
app.post('/company', (req, res) => {
  logMessage('info', '[회사 등록]');

  response.request = req.body;
  res.json(response);
});

// 개인 정보 조회
app.get('/user', (req, res) => {
  logMessage('info', '[개인 정보 조회]');

  response.request = req.body;
  res.json(response);
});

// 전체 카테고리 조회
app.get('/category', (req, res) => {
  logMessage('info', '[전체 카테고리 조회]');

  response.request = req.body;
  res.json(response);
});

// 회사 전용 카테고리 조회
app.get('/company/category', (req, res) => {
  logMessage('info', '[회사 전용 카테고리 조회]');

  response.request = req.body;
  res.json(response);
});

// 도서 목록 조회 및 검색
app.get('/books/', (req, res) => {
  logMessage('info', '[도서 목록 조회 및 검색]');
  logMessage('info', '[검색 내용: ' + JSON.stringify(req.query) + ']');

  response.request = req.query;
  res.json(response);
});

// 도서 대출
app.post('/book/rent/:bookID', (req, res) => {
  logMessage('info', '[도서 대출]');
  logMessage('info', '[도서 아이디: ' + req.params.bookID + ']');

  response.request = req.params;
  res.json(response);
});

// 도서 반납
app.delete('/book/rent/:bookID', (req, res) => {
  logMessage('info', '[도서 반납]');
  logMessage('info', '[도서 아이디: ' + req.params.bookID + ']');

  response.request = req.params;
  res.json(response);
});

app.listen(port, () => {
  logMessage('info', '[SimpleLibrary Serv with ' + port + ']');
});

module.exports = app;

const logMessage = (level, msg) => {
  if (isDebug) {
    console[level](msg);

    if (level === 'debug') debugger;
  }
};
