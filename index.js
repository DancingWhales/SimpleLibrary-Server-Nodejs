/**
 * Simple-Library-Nodejs
 */

'use strict';

const express = require('express'),
    app = express(),
    router = express.Router(),
    path = require('path'),
    bodyParser = require('body-parser'),
    port = 9687,
    isDebug = true;

const response = { 'response': true };

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

// 로그인
app.post('/sign', (req, res) => { log('info', '[로그인]'); res.json(response); });

// 회원가입
app.post('/user', (req, res) => { log('info', '[회원가입]'); res.json(response); });

// 회사 검색
app.get('/company/*', (req, res) => { log('info', '[회사 검색]'); res.json(response); });

// 회사 등록
app.post('/company', (req, res) => { log('info', '[회사 등록]'); res.json(response); });

// 개인 정보 조회
app.get('/user', (req, res) => { log('info', '[개인 정보 조회]'); res.json(response); });

// 전체 카테고리 조회
app.get('/category', (req, res) => { log('info', '[전체 카테고리 조회]'); res.json(response); });

// 회사 전용 카테고리 조회
app.get('/company/category', (req, res) => { log('info', '[회사 전용 카테고리 조회]'); res.json(response); });

// 도서 목록 조회
app.get('/book/category/*', (req, res) => { log('info', '[도서 목록 조회]'); res.json(response); });

// 도서 검색
app.get('/book/search/*', (req, res) => { log('info', '[도서 검색]'); res.json(response); });

// 도서 대출
app.post('/book/rent/*', (req, res) => { log('info', '[도서 대출]'); res.json(response); });

// 도서 반납
app.delete('/book/rent/*', (req, res) => { log('info', '[도서 반납]'); res.json(response); });

app.listen(port, () => {
  console.log('[SimpleLibrary Serv with ' + port + ']');
});

const log = (level, msg) => {
  if (isDebug) {
    console[level](msg);

    if (level === 'debug') debugger;
  }
};