- HTTP Methods & Status Codes
- Rest API & vidu
- Middleware


### http methods: GET, POST, PUT, DELETE

- POST, PUT, DELETE: cần gửi lên data lên server thông qua body của mỗi request, server lấy data mà client gửi lên từ client thông qua body của request
- GET: không cần gửi data lên server và không có body, server lấy data từ client thông qua query string của request
- Bản chất các method không quyết định được việc data sẽ được thêm (POST), sửa (PUT), xoá (DELETE) hay đọc (GET). Mà sẽ sẽ do logic code của server quyết định
- Dùng Thunder Client hoặc Postman để test các method
