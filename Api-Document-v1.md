# Convention

Req/Res: camelCase

Header Data: [userID, companyCode]



# 로그인

```
POST /sign

Request {
    (string) "email":"",
    (string) "password":""
}

Response {
	"result": true / false,
	"message": "",
	"isApproval": true / false
}
```



# 회원 가입

```
POST /user

Request {
	(string) "companyCode": "",
    (string) "email":"",
    (string) "password":""
}

Response {
	"result": true / false,
	"message": "",   
}
```



# 회사 검색

```
GET /company/{companyName}

Response {
	"result": true / false,
	"message": "",
	"data": [
        "텐덤",
        "휴마트컴퍼니",
        "ㅁ",
		"ㅂ"
	]
}
```



# 회사 등록

```
POST /company

Request {
    (string) "companyName": "",
    (string) "companyCode": ""
}

Response {
	"result": true / false,
	"message": ""
}

 - `company_code(사업자 등록 번호)` 가 0인 경우 일반 단체
```



# 개인 정보 조회

```
GET /user

Response {
	"result": true / false,
	"message": "",
	"data": {
        "userName": "",
        "userCompanyName": "",
        "userCompanyCode": "",
        "isAdmin": "",
        "rentalCount": 0,
	}
}
```



# 전체 카테고리 조회

```
GET /category
(특정 카테고리를 조회하고 싶을 때는 `GET /category/{categoryID}`)

Response {
    "result": true / false,
    "message": "",
    "data": [
        {
            "categoryID": "",
            "categoryName": ""
        }
    ]
}
```



# 회사 전용 카테고리 조회

```
GET /company/category

Response {
    "result": true / false,
    "message": "",
    "data": [
        {
            "categoryID": "",
            "categoryName": ""
        }
    ]
}
```



# 도서 목록 조회

```
GET /books/?category={category}&pageOffset={0}&pagetLimit={10}

Response {
    "result": true / false,
    "message": "",
    "data": [
        {
            (string) "title": "",
            (string) "image": "",
            (string) "category": "",
            (string) "author": "",
            (string) "publishedDate": "",
            (string) "publisher": "",
            (array) "readerNames": [
           		'a','b','c'
            ],
            (array) "rentalUserNames": [
           		'a','b','c'
            ]
        }
    ]
}
```



# 도서 검색

```
GET /book/search

GET /book/search/{searchKeyword}/{pageCount}
GET /book/search/{searchKeyword}?pageCount={pageCount}

(1) {searchKeyword} 가 없는 경우
Response {
    "result": true / false,
    "message": "",
    "data": [
        {
            (string) "title": ""
        }
    ]
}

(2) {searchKeyword} 가 있는 경우
Response {
    "result": true / false,
    "message": "",
    "data": [
        {
            (string) "title": "",
            (string) "image": "",
            (string) "category": "",
            (string) "author": "",
            (string) "publishedDate": "",
            (string) "publisher": "",
            (array) "readerNames": [
           		'a','b','c'
            ],
            (array) "rentalUserNames": [
           		'a','b','c'
            ]
        }
    ]
}
```



# 도서 대출

```
POST /book/rent/{bookID}

Response {
    "result": true / false,
    "message": ""
}
```



# 도서 반납

```
DELETE /book/rent/{bookID}

Response {
    "result": true / false,
    "message": ""
}
```































